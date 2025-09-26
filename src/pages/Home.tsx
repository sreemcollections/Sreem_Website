import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Star, Truck, Shield, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Authentic Indian Craftsmanship
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-foreground mb-6">
              Elegance Woven in{' '}
              <span className="text-primary">Tradition</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover our exquisite collection of handcrafted sarees and jewelry, 
              where every thread tells a story of India's rich heritage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8">
                <Link to="/sarees">Shop Sarees</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8">
                <Link to="/jewelry">Explore Jewelry</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Authentic Craftsmanship</h3>
              <p className="text-muted-foreground text-sm">
                Handwoven by master artisans using traditional techniques
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
              <p className="text-muted-foreground text-sm">
                Complimentary shipping on orders above ₹2,999
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Authentic Guarantee</h3>
              <p className="text-muted-foreground text-sm">
                100% authentic products with quality assurance
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Curation</h3>
              <p className="text-muted-foreground text-sm">
                Carefully selected pieces from renowned artisans
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
              Explore Our Collections
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From timeless Banarasi silks to contemporary jewelry designs, 
              discover pieces that celebrate India's artistic legacy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-playfair font-bold text-primary mb-2">Sarees</h3>
                    <p className="text-muted-foreground mb-4">Handwoven masterpieces</p>
                    <Button asChild>
                      <Link to="/sarees">View Collection</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-playfair font-bold text-accent mb-2">Jewelry</h3>
                    <p className="text-muted-foreground mb-4">Traditional & contemporary</p>
                    <Button asChild variant="outline">
                      <Link to="/jewelry">View Collection</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-8">
              Trusted by Thousands Across India
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Artisan Partners</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <p className="text-muted-foreground">Years of Tradition</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}