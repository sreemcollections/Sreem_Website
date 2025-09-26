import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Star, Truck, Shield, Award, ArrowRight } from 'lucide-react';
import kuchipudiDancer from '@/assets/kuchipudi-dancer.jpg';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Motion Background */}
      <section className="relative h-screen overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center animate-[float_6s_ease-in-out_infinite]"
            style={{
              backgroundImage: `url(${kuchipudiDancer})`,
              filter: 'brightness(0.3)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40" />
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl animate-[float_4s_ease-in-out_infinite_reverse]" />
          <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-xl animate-[float_5s_ease-in-out_infinite]" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-6 bg-secondary/90 text-secondary-foreground">
              Authentic Indian Craftsmanship
            </Badge>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 animate-fade-in">
              Elegance Woven in <span className="text-secondary">Tradition</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in">
              Discover authentic handcrafted sarees and jewelry from master artisans across India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button asChild size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90">
                <Link to="/sarees">
                  Shop Sarees
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                <Link to="/jewelry">
                  Explore Jewelry
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
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