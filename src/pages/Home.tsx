import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Star, Truck, Shield, Award, ArrowRight } from 'lucide-react';
import kuchipudiDancer from '@/assets/kuchipudi-dancer.jpg';
import sareesModel from '@/assets/sarees.png';
import jewelryModel from '@/assets/jewlery.png';

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
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
              <Button asChild size="lg" className="group text-lg px-10 py-4 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                <Link to="/sarees" className="flex items-center relative z-10">
                  <span className="mr-3">Shop Sarees</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                </Link>
              </Button>
              <Button asChild size="lg" className="group text-lg px-10 py-4 bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm relative overflow-hidden border border-secondary/30">
                <Link to="/jewelry" className="flex items-center relative z-10">
                  <span className="mr-3">Explore Jewelry</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12 px-4">
            <h2 className="text-2xl md:text-4xl font-playfair font-bold text-foreground mb-4 relative">
              Explore Our Collections
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              From timeless Banarasi silks to contemporary jewelry designs, 
              discover pieces that celebrate India's artistic legacy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Sarees Collection Card */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] md:hover:scale-[1.02] cursor-pointer">
              <CardContent className="p-0 relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-primary/15 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-500">
                    <img 
                      src={sareesModel} 
                      alt="Sarees Collection" 
                      className="w-full h-full object-cover object-center scale-110 group-hover:scale-105 transition-transform duration-700 collection-image-blend"
                    />
                    {/* Overlay for better text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-secondary/30"></div>
                  </div>
                  
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-secondary/30 transform -skew-y-12 translate-y-8 group-hover:translate-y-4 transition-transform duration-500"></div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 animate-float-gentle backdrop-blur-sm"></div>
                  <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 w-6 h-6 md:w-8 md:h-8 bg-secondary/20 rounded-full opacity-50 group-hover:opacity-80 group-hover:scale-125 transition-all duration-700 animate-pulse-subtle backdrop-blur-sm" style={{ animationDelay: '1s' }}></div>
                  
                  {/* Content */}
                  <div className="text-center relative z-10 group-hover:transform group-hover:-translate-y-2 transition-transform duration-300 collection-content-glass rounded-xl md:rounded-2xl p-6 md:p-8 mx-3 md:mx-4">
                    <h3 className="text-xl md:text-2xl font-playfair font-bold text-primary mb-2 group-hover:text-primary group-hover:scale-110 transition-all duration-300 drop-shadow-md">Sarees</h3>
                    <p className="text-sm md:text-base text-foreground/90 mb-4 group-hover:text-foreground transition-colors duration-300 font-medium drop-shadow-sm">Handwoven masterpieces</p>
                    <Button asChild size="sm" className="md:size-default bg-primary hover:bg-primary/90 group-hover:scale-105 transition-all duration-300 shadow-md group-hover:shadow-lg text-sm md:text-base px-6 md:px-8">
                      <Link to="/sarees">Shop Collection</Link>
                    </Button>
                  </div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </div>
              </CardContent>
            </Card>
            
            {/* Jewelry Collection Card */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] md:hover:scale-[1.02] cursor-pointer">
              <CardContent className="p-0 relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-secondary/25 via-secondary/15 to-secondary/30 flex items-center justify-center relative overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-35 group-hover:opacity-45 transition-opacity duration-500">
                    <img 
                      src={jewelryModel} 
                      alt="Jewelry Collection" 
                      className="w-full h-full object-cover object-center scale-110 group-hover:scale-105 transition-transform duration-700 collection-image-blend"
                    />
                    {/* Overlay for better text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-secondary/20 to-secondary/35"></div>
                  </div>
                  
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-l from-secondary/40 via-transparent to-secondary/25 transform skew-y-12 -translate-y-8 group-hover:-translate-y-4 transition-transform duration-500"></div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 left-3 md:top-6 md:left-4 w-8 h-8 md:w-12 md:h-12 bg-secondary/20 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-600 animate-pulse-subtle backdrop-blur-sm"></div>
                  <div className="absolute bottom-3 right-4 md:bottom-4 md:right-6 w-7 h-7 md:w-10 md:h-10 bg-secondary/25 rounded-full opacity-50 group-hover:opacity-80 group-hover:scale-125 transition-all duration-800 animate-float-gentle backdrop-blur-sm" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-1/2 right-6 md:right-8 w-4 h-4 md:w-6 md:h-6 bg-secondary/15 rounded-full opacity-40 group-hover:opacity-70 group-hover:scale-150 transition-all duration-500 animate-pulse-subtle backdrop-blur-sm" style={{ animationDelay: '2s' }}></div>
                  
                  {/* Content */}
                  <div className="text-center relative z-10 group-hover:transform group-hover:-translate-y-2 transition-transform duration-300 collection-content-glass rounded-xl md:rounded-2xl p-6 md:p-8 mx-3 md:mx-4">
                    <h3 className="text-xl md:text-2xl font-playfair font-bold text-secondary mb-2 group-hover:text-secondary group-hover:scale-110 transition-all duration-300 drop-shadow-md">Jewelry</h3>
                    <p className="text-sm md:text-base text-foreground/90 mb-4 group-hover:text-foreground transition-colors duration-300 font-medium drop-shadow-sm">Traditional & contemporary</p>
                    <Button asChild variant="outline" size="sm" className="md:size-default border-secondary text-secondary hover:bg-secondary hover:text-white group-hover:scale-105 transition-all duration-300 shadow-md group-hover:shadow-lg bg-white/20 backdrop-blur-sm text-sm md:text-base px-6 md:px-8">
                      <Link to="/jewelry">Explore Collection</Link>
                    </Button>
                  </div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </div>
              </CardContent>
            </Card>
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

      {/* Customer Stories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-playfair font-bold text-center text-foreground mb-12">
              Stories of Timeless Elegance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-secondary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-muted-foreground mb-4 italic">
                  "The silk quality is absolutely exquisite. You can feel the craftsmanship in every thread. 
                  The saree drapes beautifully and feels luxurious against the skin."
                </blockquote>
                <div className="text-sm">
                  <p className="font-semibold text-foreground">Priya Sharma</p>
                  <p className="text-muted-foreground">Mumbai</p>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-secondary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-muted-foreground mb-4 italic">
                  "I've never seen such intricate work on jewelry. The temple designs are so detailed and 
                  the gold finish is perfect. It's clear these are made by master artisans."
                </blockquote>
                <div className="text-sm">
                  <p className="font-semibold text-foreground">Anitha Reddy</p>
                  <p className="text-muted-foreground">Hyderabad</p>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-secondary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-muted-foreground mb-4 italic">
                  "The Banarasi saree I received exceeded all expectations. The zari work is authentic 
                  and the colors are so vibrant. You can tell it's handwoven with love and care."
                </blockquote>
                <div className="text-sm">
                  <p className="font-semibold text-foreground">Kavitha Nair</p>
                  <p className="text-muted-foreground">Kochi</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}