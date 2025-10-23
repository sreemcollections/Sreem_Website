import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Heart, Share2, ChevronLeft, ChevronRight, ArrowLeft, Copy, Mail, MessageCircle, X } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { fetchProductBySlug, fetchProducts, getImageUrl, type Product } from '@/lib/sanity-products';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [pincode, setPincode] = useState('');
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  
  // Fullscreen zoom states
  const [fullscreenScale, setFullscreenScale] = useState(1);
  const [fullscreenPosX, setFullscreenPosX] = useState(0);
  const [fullscreenPosY, setFullscreenPosY] = useState(0);
  const [fullscreenLastDistance, setFullscreenLastDistance] = useState(0);
  const [fullscreenIsPinching, setFullscreenIsPinching] = useState(false);
  const [fullscreenLastPanX, setFullscreenLastPanX] = useState(0);
  const [fullscreenLastPanY, setFullscreenLastPanY] = useState(0);

  useEffect(() => {
    const loadProduct = async () => {
      if (!slug) return;
      setLoading(true);
      const data = await fetchProductBySlug(slug);
      setProduct(data);
      
      // Fetch related products from the same category
      if (data) {
        const related = await fetchProducts({ 
          category: data.category, 
          limit: 4 
        });
        // Filter out the current product
        setRelatedProducts(related.filter(p => p._id !== data._id).slice(0, 4));
      }
      
      setLoading(false);
    };

    loadProduct();
  }, [slug]);

  const handleGoBack = () => {
    if (!product) return;
    
    // Navigate back to the appropriate section based on product category and collection
    if (product.category === 'sarees') {
      navigate('/sarees');
    } else if (product.category === 'jewelry') {
      // Navigate to specific jewelry collection
      if (product.collection === 'Panchaloha') {
        navigate('/jewelry/panchaloham');
      } else if (product.collection === 'Silver') {
        navigate('/jewelry/silver');
      } else {
        navigate('/jewelry');
      }
    } else {
      // Fallback to browser back
      navigate(-1);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Product not found</h1>
          <p className="text-muted-foreground">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;
  const gstAmount = Math.round(product.price * 0.05); // 5% GST
  const totalPrice = product.price;

  // Handle swipe gestures for mobile with improved smoothness
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      // Single finger swipe
      setTouchStart(e.targetTouches[0].clientX);
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      // Handle swipe
      if (imageContainerRef.current) {
        e.preventDefault();
      }
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    // Circular navigation - wrap around to first/last image
    if (isLeftSwipe) {
      setSwipeDirection('left');
      setTimeout(() => setSwipeDirection(null), 800);
      setSelectedImage((prev) => (prev + 1) % product.images.length);
    }
    if (isRightSwipe) {
      setSwipeDirection('right');
      setTimeout(() => setSwipeDirection(null), 800);
      setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
    }

    // Reset values
    setTouchStart(0);
    setTouchEnd(0);
  };

  const nextImage = () => {
    if (!product.images || product.images.length === 0) return;
    setSwipeDirection('left');
    setTimeout(() => setSwipeDirection(null), 800);
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    if (!product.images || product.images.length === 0) return;
    setSwipeDirection('right');
    setTimeout(() => setSwipeDirection(null), 800);
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const productImages = product.images && product.images.length > 0 
    ? product.images.map(img => getImageUrl(img))
    : ['/placeholder.svg'];

  const handleShare = () => {
    if (!product) return;
    setIsShareModalOpen(true);
  };

  const getShareUrl = () => {
    if (!product) return '';
    const productionDomain = 'https://sreem-collection.lovable.app';
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname.startsWith('192.168');
    
    return isLocalhost 
      ? `${productionDomain}/product/${product.slug.current}`
      : window.location.href;
  };

  const handleNativeShare = async () => {
    if (!product) return;
    
    const shareUrl = getShareUrl();
    const shareData = {
      title: product.name,
      text: `Check out ${product.name} - ${product.description || 'Beautiful handcrafted product from Sreem Collection'}`,
      url: shareUrl
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setIsShareModalOpen(false);
      }
    } catch (error) {
      if ((error as Error).name !== 'AbortError') {
        console.error('Error sharing:', error);
      }
    }
  };

  const handleWhatsAppShare = () => {
    const shareUrl = getShareUrl();
    const text = encodeURIComponent(`Check out ${product?.name}! ${shareUrl}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
    setIsShareModalOpen(false);
  };

  const handleEmailShare = () => {
    const shareUrl = getShareUrl();
    const subject = encodeURIComponent(product?.name || 'Check out this product');
    const body = encodeURIComponent(`I thought you might like this:\n\n${product?.name}\n${product?.description || ''}\n\n${shareUrl}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    setIsShareModalOpen(false);
  };

  const handleSMSShare = () => {
    const shareUrl = getShareUrl();
    const text = encodeURIComponent(`Check out ${product?.name}! ${shareUrl}`);
    window.open(`sms:?body=${text}`, '_blank');
    setIsShareModalOpen(false);
  };

  const handleRequestInformation = () => {
    if (!product) return;
    
    // Your business WhatsApp number (replace with actual number)
    // Format: country code + number (no + sign, no spaces, no dashes)
    const businessWhatsAppNumber = 'sudo'; // Replace with your actual WhatsApp number
    
    const shareUrl = getShareUrl();
    
    // Create a professional inquiry message
    const message = encodeURIComponent(
      `Hello! I'm interested in the following product:\n\n` +
      `*${product.name}*\n` +
      `${product.description || ''}\n\n` +
      `Price: ₹${product.price.toLocaleString()}` +
      `${product.originalPrice ? ` (was ₹${product.originalPrice.toLocaleString()})` : ''}\n\n` +
      `Product Link: ${shareUrl}\n\n` +
      `Could you please provide more information about this product?`
    );
    
    // Open WhatsApp with pre-filled message to business number
    window.open(`https://wa.me/${businessWhatsAppNumber}?text=${message}`, '_blank');
  };

  const copyToClipboard = async (url: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
      } else {
        // Final fallback: Create temporary input element
        const textArea = document.createElement('textarea');
        textArea.value = url;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          alert('Link copied to clipboard!');
        } catch (err) {
          alert(`Share this link: ${url}`);
        }
        document.body.removeChild(textArea);
      }
    } catch (error) {
      console.error('Clipboard error:', error);
      alert(`Share this link: ${url}`);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-4">
        {/* Go Back Button - Luxurious Design */}
        {product && (
          <div className="mb-2">
            <button
              onClick={handleGoBack}
              className="group inline-flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 relative"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full border border-muted-foreground/20 group-hover:border-primary/40 transition-all duration-300 group-hover:shadow-md">
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform duration-300" />
              </div>
              <span className="relative">
                Back to {product.category === 'sarees' ? 'Sarees Collection' : 
                         product.collection === 'Panchaloha' ? 'Panchaloha Collection' : 
                         product.collection === 'Silver' ? 'Silver Collection' : 'Jewelry'}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
              </span>
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image with Swipe Support */}
            <div 
              ref={imageContainerRef}
              className="relative aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden group touch-pan-y select-none cursor-pointer"
              style={{ touchAction: 'pan-y' }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onClick={() => {
                setIsZoomModalOpen(true);
              }}
            >
              <div 
                className={`w-full h-full flex items-center justify-center transition-all duration-700 ease-in-out ${
                  swipeDirection === 'left' ? 'animate-slide-left' : swipeDirection === 'right' ? 'animate-slide-right' : ''
                }`}
              >
                <img 
                  src={productImages[selectedImage]} 
                  alt={`${product.name} - Image ${selectedImage + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Zoom indicator overlay - Desktop only */}
              <div className="hidden md:flex absolute inset-0 items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/10 pointer-events-none">
                <div className="bg-white/90 rounded-full p-3 shadow-lg">
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
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
                {productImages.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      selectedImage === index ? 'bg-white w-6' : 'bg-white/40 w-1.5'
                    }`}
                  />
                ))}
              </div>

            </div>
            
            {/* Tap to view fullscreen hint - Mobile only - Outside image */}
            <div className="flex md:hidden justify-center -mt-2 mb-2">
              <Badge variant="secondary" className="bg-black/60 text-white text-xs backdrop-blur-sm border-0">
                Tap to view fullscreen
              </Badge>
            </div>
            
            {/* Thumbnail Grid - Desktop and Tablet */}
            <div className="hidden md:grid grid-cols-4 gap-2">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedImage(index);
                  }}
                  className={`aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 rounded border-2 transition-all duration-300 overflow-hidden ${
                    selectedImage === index ? 'border-primary scale-105' : 'border-transparent hover:border-primary/50'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Mobile Thumbnail Slider */}
            <div className="flex md:hidden gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedImage(index);
                  }}
                  className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded border-2 transition-all duration-300 overflow-hidden ${
                    selectedImage === index ? 'border-primary scale-105' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            <div>
              <h1 className="text-2xl font-serif font-medium text-foreground mb-1.5 leading-tight">
                {product.name}
              </h1>
              <p className="text-sm text-muted-foreground">{product.description}</p>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-primary">₹{totalPrice.toLocaleString()}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                    <Badge variant="secondary">{discount}% OFF</Badge>
                  </>
                )}
              </div>
            </div>

            {/* Product Details */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y">
              {product.fabric && (
                <div>
                  <span className="text-sm font-semibold">Fabric:</span>
                  <p className="text-sm text-muted-foreground">{product.fabric}</p>
                </div>
              )}
              {product.collection && (
                <div>
                  <span className="text-sm font-semibold">Collection:</span>
                  <p className="text-sm text-muted-foreground">{product.collection}</p>
                </div>
              )}
              {product.material && (
                <div>
                  <span className="text-sm font-semibold">Material:</span>
                  <p className="text-sm text-muted-foreground">{product.material}</p>
                </div>
              )}
              {product.inStock !== undefined && (
                <div>
                  <span className="text-sm font-semibold">Availability:</span>
                  <p className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </p>
                </div>
              )}
            </div>

            {/* Panchaloha Information Banner */}
            {product.collection === 'Panchaloha' && (
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-amber-900 mb-1">About Panchaloha</h4>
                <p className="text-xs text-amber-800 leading-relaxed">
                  Panchaloha is a sacred alloy of five metals: gold, silver, copper, iron, and tin. This traditional combination is revered in temple jewelry and religious artifacts for its spiritual significance and durability.
                </p>
              </div>
            )}


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
                <Button 
                  className="flex-1" 
                  size="lg"
                  onClick={handleRequestInformation}
                >
                  Request Information
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={handleShare}
                  type="button"
                  aria-label="Share product"
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
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
            {relatedProducts.length > 0 ? (
              relatedProducts.map((relatedProduct) => {
                const discount = relatedProduct.originalPrice 
                  ? Math.round(((relatedProduct.originalPrice - relatedProduct.price) / relatedProduct.originalPrice) * 100)
                  : 0;
                
                return (
                  <ProductCard
                    key={relatedProduct._id}
                    id={relatedProduct._id}
                    name={relatedProduct.name}
                    description={relatedProduct.description || ''}
                    price={relatedProduct.price}
                    originalPrice={relatedProduct.originalPrice}
                    discount={discount}
                    slug={relatedProduct.slug.current}
                    images={relatedProduct.images?.map(img => getImageUrl(img)) || []}
                  />
                );
              })
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-muted-foreground">No related products available</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      {isZoomModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          style={{ touchAction: 'none' }}
        >
          {/* Close Button */}
          <button
            onClick={() => {
              setIsZoomModalOpen(false);
              setFullscreenScale(1);
              setFullscreenPosX(0);
              setFullscreenPosY(0);
            }}
            className="absolute top-4 right-4 z-50 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 backdrop-blur-sm transition-all"
            aria-label="Close fullscreen"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Zoom level indicator */}
          {fullscreenScale > 1 && (
            <div className="absolute top-4 left-4 z-50">
              <Badge className="bg-white/20 text-white backdrop-blur-sm border-0 text-base px-3 py-1">
                {fullscreenScale.toFixed(1)}x
              </Badge>
            </div>
          )}

          {/* Reset Zoom Button */}
          {fullscreenScale > 1 && (
            <button
              onClick={() => {
                setFullscreenScale(1);
                setFullscreenPosX(0);
                setFullscreenPosY(0);
              }}
              className="absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-white/20 hover:bg-white/30 text-white rounded-full px-4 py-2 backdrop-blur-sm transition-all text-sm"
            >
              Reset Zoom
            </button>
          )}

          {/* Navigation arrows */}
          {productImages.length > 1 && fullscreenScale === 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 backdrop-blur-sm z-50 transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 backdrop-blur-sm z-50 transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Zoomable Image Container */}
          <div 
            className="relative w-full h-full flex items-center justify-center overflow-hidden"
            onTouchStart={(e) => {
              if (e.touches.length === 2) {
                // Pinch start
                setFullscreenIsPinching(true);
                const dx = e.touches[0].clientX - e.touches[1].clientX;
                const dy = e.touches[0].clientY - e.touches[1].clientY;
                setFullscreenLastDistance(Math.sqrt(dx * dx + dy * dy));
              } else if (e.touches.length === 1 && fullscreenScale > 1) {
                // Pan start
                setFullscreenLastPanX(e.touches[0].clientX);
                setFullscreenLastPanY(e.touches[0].clientY);
              }
            }}
            onTouchMove={(e) => {
              if (e.touches.length === 2 && fullscreenIsPinching) {
                // Pinch zoom
                e.preventDefault();
                const dx = e.touches[0].clientX - e.touches[1].clientX;
                const dy = e.touches[0].clientY - e.touches[1].clientY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const newScale = fullscreenScale * (distance / fullscreenLastDistance);
                const clampedScale = Math.max(1, Math.min(5, newScale));
                setFullscreenScale(clampedScale);
                setFullscreenLastDistance(distance);
              } else if (e.touches.length === 1 && fullscreenScale > 1) {
                // Pan when zoomed
                e.preventDefault();
                const touch = e.touches[0];
                const deltaX = (touch.clientX - fullscreenLastPanX) * 2; // Faster panning
                const deltaY = (touch.clientY - fullscreenLastPanY) * 2;
                
                const maxPan = 1000; // Large boundary for smooth panning
                const newPosX = Math.max(-maxPan, Math.min(maxPan, fullscreenPosX + deltaX));
                const newPosY = Math.max(-maxPan, Math.min(maxPan, fullscreenPosY + deltaY));
                
                setFullscreenPosX(newPosX);
                setFullscreenPosY(newPosY);
                setFullscreenLastPanX(touch.clientX);
                setFullscreenLastPanY(touch.clientY);
              }
            }}
            onTouchEnd={() => {
              setFullscreenIsPinching(false);
              setFullscreenLastPanX(0);
              setFullscreenLastPanY(0);
              // Reset if zoomed out too much
              if (fullscreenScale < 1.1) {
                setFullscreenScale(1);
                setFullscreenPosX(0);
                setFullscreenPosY(0);
              }
            }}
          >
            <img 
              src={productImages[selectedImage]} 
              alt={`${product.name} - Zoom view ${selectedImage + 1}`}
              className="max-w-none select-none"
              draggable={false}
              style={{ 
                transform: `scale(${fullscreenScale}) translate(${fullscreenPosX / fullscreenScale}px, ${fullscreenPosY / fullscreenScale}px)`,
                transition: fullscreenIsPinching ? 'none' : 'transform 0.2s ease-out',
                maxWidth: '100vw',
                maxHeight: '100vh',
                objectFit: 'contain',
                willChange: 'transform'
              }}
            />
          </div>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 text-white px-4 py-2 rounded-full backdrop-blur-sm text-sm z-50">
            {selectedImage + 1} / {productImages.length}
          </div>

          {/* Zoom hint */}
          {fullscreenScale === 1 && (
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
              <Badge variant="secondary" className="bg-white/20 text-white text-xs backdrop-blur-sm border-0">
                Pinch to zoom • Drag to pan
              </Badge>
            </div>
          )}
        </div>
      )}

      {/* Share Modal */}
      {isShareModalOpen && product && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end md:items-center justify-center"
          onClick={() => setIsShareModalOpen(false)}
        >
          <div 
            className="bg-background rounded-t-2xl md:rounded-2xl w-full md:max-w-md max-h-[80vh] overflow-y-auto animate-slide-up shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-background border-b px-6 py-4 flex items-center justify-between z-10">
              <h3 className="text-lg font-semibold">Share this product</h3>
              <button
                onClick={() => setIsShareModalOpen(false)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Product Preview */}
            <div className="px-6 py-4 border-b">
              <div className="flex gap-4 items-center">
                <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                  <img 
                    src={productImages[selectedImage]} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm line-clamp-2 mb-1">
                    {product.name}
                  </h4>
                  <p className="text-lg font-bold text-primary">
                    ₹{product.price.toLocaleString()}
                  </p>
                  {product.originalPrice && (
                    <p className="text-sm text-muted-foreground line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Share Options */}
            <div className="p-6 space-y-4">
              {/* Native Share (Mobile) */}
              {navigator.share && (
                <button
                  onClick={handleNativeShare}
                  className="w-full flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors text-left"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <Share2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">More options</p>
                    <p className="text-sm text-muted-foreground">Share via other apps</p>
                  </div>
                </button>
              )}

              {/* WhatsApp */}
              <button
                onClick={handleWhatsAppShare}
                className="w-full flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors text-left"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">Share via WhatsApp</p>
                </div>
              </button>

              {/* Email */}
              <button
                onClick={handleEmailShare}
                className="w-full flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors text-left"
              >
                <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">Share via email</p>
                </div>
              </button>

              {/* SMS */}
              <button
                onClick={handleSMSShare}
                className="w-full flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors text-left"
              >
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">Messages</p>
                  <p className="text-sm text-muted-foreground">Share via SMS</p>
                </div>
              </button>

              {/* Copy Link */}
              <button
                onClick={async () => {
                  await copyToClipboard(getShareUrl());
                  setIsShareModalOpen(false);
                }}
                className="w-full flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors text-left"
              >
                <div className="w-12 h-12 rounded-full bg-gray-500 flex items-center justify-center flex-shrink-0">
                  <Copy className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">Copy link</p>
                  <p className="text-sm text-muted-foreground">Copy to clipboard</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}