import { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [pincode, setPincode] = useState('');
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Mock product data
  const product = {
    name: "Royal Banarasi Silk Saree",
    price: 15999,
    originalPrice: 19999,
    description: "Exquisite handwoven Banarasi silk saree with intricate golden zari work, perfect for weddings and special occasions.",
    fabric: "Pure Silk",
    weave: "Banarasi",
    length: "6.3 meters",
    blouse: "0.8 meters",
    care: "Dry clean only",
    artisan: "Master Weaver Ramlal",
    region: "Varanasi, Uttar Pradesh",
    images: [
      "/placeholder.svg",
      "/placeholder.svg", 
      "/placeholder.svg",
      "/placeholder.svg"
    ]
  };

  const gstAmount = Math.round(product.price * 0.05); // 5% GST
  const totalPrice = product.price;

  // Handle swipe gestures for mobile with improved smoothness
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX); // Initialize touchEnd
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    // Prevent page scroll while swiping on image
    if (imageContainerRef.current) {
      e.preventDefault();
    }
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    // Circular navigation - wrap around to first/last image
    if (isLeftSwipe) {
      setSwipeDirection('left');
      setTimeout(() => setSwipeDirection(null), 300);
      setSelectedImage((prev) => (prev + 1) % product.images.length);
    }
    if (isRightSwipe) {
      setSwipeDirection('right');
      setTimeout(() => setSwipeDirection(null), 300);
      setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
    }

    // Reset values
    setTouchStart(0);
    setTouchEnd(0);
  };

  const nextImage = () => {
    setSwipeDirection('left');
    setTimeout(() => setSwipeDirection(null), 300);
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSwipeDirection('right');
    setTimeout(() => setSwipeDirection(null), 300);
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image with Swipe Support */}
            <div 
              ref={imageContainerRef}
              className="relative aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden group touch-pan-y select-none"
              style={{ touchAction: 'pan-y' }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className={`w-full h-full flex items-center justify-center transition-all duration-300 ease-out ${
                swipeDirection === 'left' ? 'animate-slide-left' : swipeDirection === 'right' ? 'animate-slide-right' : ''
              }`}>
                <span className="text-muted-foreground">Product Image {selectedImage + 1}</span>
              </div>
              
              {/* Swipe direction indicators */}
              {touchStart > 0 && touchEnd > 0 && Math.abs(touchStart - touchEnd) > 10 && (
                <div className="absolute inset-0 pointer-events-none">
                  {touchStart > touchEnd ? (
                    // Swiping left (next)
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 animate-fade-in">
                      <ChevronLeft className="h-12 w-12 text-white/80 drop-shadow-lg" />
                    </div>
                  ) : (
                    // Swiping right (previous)
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 animate-fade-in">
                      <ChevronRight className="h-12 w-12 text-white/80 drop-shadow-lg" />
                    </div>
                  )}
                </div>
              )}

              {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-lg opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-lg opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Swipe Indicator for Mobile */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:hidden bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                {product.images.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      selectedImage === index ? 'bg-white w-6' : 'bg-white/40 w-1.5'
                    }`}
                  />
                ))}
              </div>

              {/* Swipe hint text for mobile - shows on first and last image */}
              {(selectedImage === 0 || selectedImage === product.images.length - 1) && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 md:hidden animate-fade-in">
                  <Badge variant="secondary" className="bg-black/70 text-white text-xs backdrop-blur-sm">
                    {selectedImage === 0 ? '← Swipe to view more →' : '← Swipe loops back to start'}
                  </Badge>
                </div>
              )}
            </div>
            
            {/* Thumbnail Grid - Desktop and Tablet */}
            <div className="hidden md:grid grid-cols-4 gap-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 rounded border-2 transition-all duration-300 ${
                    selectedImage === index ? 'border-primary scale-105' : 'border-transparent hover:border-primary/50'
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">{index + 1}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Mobile Thumbnail Slider */}
            <div className="flex md:hidden gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded border-2 transition-all duration-300 ${
                    selectedImage === index ? 'border-primary scale-105' : 'border-transparent'
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">{index + 1}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-playfair font-bold text-foreground mb-2">
                {product.name}
              </h1>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-primary">₹{totalPrice.toLocaleString()}</span>
                <span className="text-lg text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                <Badge variant="secondary">20% OFF</Badge>
              </div>
            </div>

            {/* Product Details */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y">
              <div>
                <span className="text-sm font-semibold">Fabric:</span>
                <p className="text-sm text-muted-foreground">{product.fabric}</p>
              </div>
              <div>
                <span className="text-sm font-semibold">Weave:</span>
                <p className="text-sm text-muted-foreground">{product.weave}</p>
              </div>
              <div>
                <span className="text-sm font-semibold">Length:</span>
                <p className="text-sm text-muted-foreground">{product.length}</p>
              </div>
              <div>
                <span className="text-sm font-semibold">Blouse:</span>
                <p className="text-sm text-muted-foreground">{product.blouse}</p>
              </div>
            </div>


            {/* Action Buttons - Catalog Mode */}
            <div className="space-y-3">
              <div className="bg-muted/50 border border-primary/20 rounded-lg p-4 text-center">
                <p className="text-sm font-medium text-muted-foreground mb-2">
                  This is a catalog showcase
                </p>
                <p className="text-xs text-muted-foreground">
                  Please contact us for pricing and availability
                </p>
              </div>
              
              <div className="flex gap-3">
                <Button className="flex-1" size="lg" variant="outline">
                  <Heart className="h-4 w-4 mr-2" />
                  Save to Wishlist
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
              
              <Button className="w-full" size="lg">
                Request Information
              </Button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <Separator className="my-12" />
        
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-3 relative inline-block">
              You May Also Like
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
            </h2>
            <p className="text-muted-foreground mt-4">Handpicked pieces to complement your style</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }, (_, i) => {
              const relatedProducts = [
                { id: 'related-1', name: 'Kanjivaram Silk Saree', description: 'Rich temple border design', price: 18999, originalPrice: 23999, discount: 21 },
                { id: 'related-2', name: 'Chanderi Cotton Saree', description: 'Lightweight festive wear', price: 8999, originalPrice: 11999, discount: 25 },
                { id: 'related-3', name: 'Tant Cotton Saree', description: 'Bengal handloom classic', price: 5999, originalPrice: 7999, discount: 25 },
                { id: 'related-4', name: 'Patola Silk Saree', description: 'Double ikat masterpiece', price: 32999, originalPrice: 42999, discount: 23 }
              ];
              
              const product = relatedProducts[i];
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  discount={product.discount}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}