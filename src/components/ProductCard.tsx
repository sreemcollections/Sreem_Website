import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, ZoomIn } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  discount?: number;
  image?: string;
  onQuickView?: (id: string) => void;
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  originalPrice,
  discount,
  image,
  onQuickView
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  
  // Mock multiple images for slider effect
  const images = [0, 1, 2, 3];

  return (
    <Link to={`/product/${id}`}>
      <Card 
        className="group overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl border-transparent hover:border-primary/20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-0">
          {/* Image Container with Zoom */}
          <div className="relative aspect-[3/4] bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
            {/* Placeholder for actual image with zoom effect */}
            <div 
              className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5 transition-transform duration-700 ease-out ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}
            >
              <span className="text-sm text-muted-foreground/50">Product Image {imageIndex + 1}</span>
            </div>
            
            {/* Catalog Badge */}
            <Badge className="absolute top-3 right-3 bg-background/90 text-foreground border border-primary/20 shadow-lg z-10 backdrop-blur-sm">
              Catalog Item
            </Badge>
            
            {/* Discount Badge */}
            {discount && (
              <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground shadow-lg z-10 transition-transform duration-300 group-hover:scale-110">
                {discount}% OFF
              </Badge>
            )}
            
            {/* Image Slider Dots */}
            {isHovered && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 z-20 animate-fade-in">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.preventDefault();
                      setImageIndex(idx);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      imageIndex === idx 
                        ? 'bg-white w-6' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`View image ${idx + 1}`}
                  />
                ))}
              </div>
            )}
            
            {/* Hover Overlay with View Details */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}>
              {/* View Details Button */}
              <div className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-500 ${
                isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}>
                <Button 
                  size="sm" 
                  className="w-full bg-white text-primary hover:bg-white/90 transition-all duration-300 shadow-lg"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </Button>
                <p className="text-xs text-white/80 text-center mt-2">Click to explore this item</p>
              </div>
            </div>

            {/* Shimmer Effect */}
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ${
              isHovered ? 'translate-x-full' : '-translate-x-full'
            }`} />
          </div>
          
          {/* Product Details */}
          <div className="p-4 space-y-2 bg-background transition-all duration-300 group-hover:bg-muted/30">
            <h3 className="font-semibold text-foreground transition-colors duration-300 group-hover:text-primary line-clamp-1">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 transition-all duration-300">
              {description}
            </p>
            
            {/* Price Section */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-primary">₹{price.toLocaleString()}</span>
                {originalPrice > price && (
                  <span className="text-sm text-muted-foreground line-through">₹{originalPrice.toLocaleString()}</span>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
