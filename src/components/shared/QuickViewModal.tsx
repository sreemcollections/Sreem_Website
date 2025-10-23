import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/lib/sanity-products';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

interface QuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export function QuickViewModal({ isOpen, onClose, product }: QuickViewModalProps) {
  if (!product) return null;

  const mainImage = product.images && product.images.length > 0 
    ? product.images[0] 
    : '/placeholder.svg';

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='max-w-4xl'>
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='aspect-square relative overflow-hidden rounded-lg'>
            <img 
              src={mainImage} 
              alt={product.name}
              className='w-full h-full object-cover'
            />
          </div>

          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              {discount > 0 && (
                <Badge variant='destructive'>{discount}% OFF</Badge>
              )}
              {product.featured && (
                <Badge>Featured</Badge>
              )}
              <Badge variant={product.inStock ? 'default' : 'secondary'}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </Badge>
            </div>

            {product.description && (
              <p className='text-muted-foreground'>{product.description}</p>
            )}

            <div className='space-y-2'>
              <div className='flex items-baseline gap-2'>
                <span className='text-3xl font-bold'>
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className='text-lg text-muted-foreground line-through'>
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>
            </div>

            {product.category === 'sarees' && product.fabric && (
              <div className='space-y-1 text-sm'>
                <p><strong>Fabric:</strong> {product.fabric}</p>
              </div>
            )}

            {product.category === 'jewelry' && (
              <div className='space-y-1 text-sm'>
                {product.material && <p><strong>Material:</strong> {product.material}</p>}
                {product.collection && <p><strong>Collection:</strong> {product.collection}</p>}
              </div>
            )}

            <div className='flex gap-2 pt-4'>
              <Button asChild className='flex-1'>
                <Link to={`/product/${product.slug?.current || product._id}`}>View Full Details</Link>
              </Button>
              <Button variant='outline' size='icon'>
                <Heart className='h-4 w-4' />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
