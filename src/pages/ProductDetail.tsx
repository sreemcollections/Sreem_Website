import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Heart, Share2, ShoppingCart, Truck, Shield, RotateCcw } from 'lucide-react';

export default function ProductDetail() {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [pincode, setPincode] = useState('');

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

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-muted-foreground">Product Image {selectedImage + 1}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 rounded border-2 transition-colors ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
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
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Price: ₹{(totalPrice - gstAmount).toLocaleString()}</p>
                <p>GST (5%): ₹{gstAmount.toLocaleString()}</p>
                <p className="font-semibold">Total (Inclusive of GST): ₹{totalPrice.toLocaleString()}</p>
              </div>
              <Badge variant="outline" className="text-xs">
                GST Invoice Available
              </Badge>
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

            {/* Pincode Check */}
            <div className="space-y-3">
              <h3 className="font-semibold">Delivery & Serviceability</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter PIN code"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="flex-1 px-3 py-2 border rounded-md"
                  maxLength={6}
                />
                <Button variant="outline" size="sm">Check</Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Truck className="h-4 w-4" />
                  <span>Free delivery above ₹1,499</span>
                </div>
                <div className="flex items-center gap-1">
                  <RotateCcw className="h-4 w-4" />
                  <span>7-day easy returns</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="flex gap-3">
                <Button className="flex-1" size="lg">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="secondary" className="w-full" size="lg">
                Buy Now
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-around py-4 border-t">
              <div className="text-center">
                <Shield className="h-6 w-6 mx-auto mb-1 text-primary" />
                <span className="text-xs text-muted-foreground">Authentic</span>
              </div>
              <div className="text-center">
                <Truck className="h-6 w-6 mx-auto mb-1 text-primary" />
                <span className="text-xs text-muted-foreground">Fast Delivery</span>
              </div>
              <div className="text-center">
                <RotateCcw className="h-6 w-6 mx-auto mb-1 text-primary" />
                <span className="text-xs text-muted-foreground">Easy Returns</span>
              </div>
            </div>

            {/* Artisan Info */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Meet the Artisan</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  Crafted by <strong>{product.artisan}</strong>
                </p>
                <p className="text-sm text-muted-foreground">
                  From {product.region}
                </p>
                <Button variant="link" className="px-0 text-primary">
                  View Artisan Profile →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Description Tabs */}
        <Separator className="my-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Care Instructions</h3>
              <p className="text-sm text-muted-foreground">
                {product.care}. Store in a cool, dry place away from direct sunlight.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Shipping Info</h3>
              <p className="text-sm text-muted-foreground">
                Ships within 2-3 business days. Express delivery available.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Return Policy</h3>
              <p className="text-sm text-muted-foreground">
                7-day easy returns. Item should be unused with original tags.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}