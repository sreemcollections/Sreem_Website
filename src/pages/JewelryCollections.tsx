import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function JewelryCollections() {
  const collections = [
    {
      id: 'panchaloham',
      name: 'Panchaloham Collection',
      description: 'Sacred five-metal traditional jewelry crafted with ancient techniques',
      image: '/placeholder.svg',
      gradient: 'from-yellow-600 to-orange-600',
      textColor: 'text-yellow-900',
      bgAccent: 'bg-yellow-50'
    },
    {
      id: 'silver',
      name: 'Silver Collection',
      description: 'Exquisite sterling silver jewelry with intricate craftsmanship',
      image: '/placeholder.svg',
      gradient: 'from-gray-400 to-gray-600',
      textColor: 'text-gray-900',
      bgAccent: 'bg-gray-50'
    },
    {
      id: 'gold',
      name: 'Gold Collection',
      description: 'Timeless 22K gold jewelry with traditional and contemporary designs',
      image: '/placeholder.svg',
      gradient: 'from-yellow-500 to-amber-600',
      textColor: 'text-amber-900',
      bgAccent: 'bg-amber-50'
    },
    {
      id: 'temple',
      name: 'Temple Jewelry',
      description: 'Divine temple-style jewelry inspired by South Indian traditions',
      image: '/placeholder.svg',
      gradient: 'from-red-600 to-pink-600',
      textColor: 'text-red-900',
      bgAccent: 'bg-red-50'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <Sparkles className="h-12 w-12 text-secondary animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-6">
            Jewelry Collections
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our curated collections of handcrafted jewelry, each piece a testament to 
            <span className="text-primary font-semibold"> timeless elegance</span> and 
            <span className="text-secondary font-semibold"> master craftsmanship</span>
          </p>
          <div className="mt-8 h-1 w-32 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Collection Selection */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
              Choose Your Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each collection tells a unique story of heritage, artistry, and timeless beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {collections.map((collection) => (
              <Link 
                key={collection.id} 
                to={`/jewelry/${collection.id}`}
                className="group"
              >
                <Card className="overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  <div className={`h-3 bg-gradient-to-r ${collection.gradient}`}></div>
                  
                  <CardContent className="p-0">
                    {/* Image Section */}
                    <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      <img
                        src={collection.image}
                        alt={collection.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Floating Badge */}
                      <div className={`absolute top-4 right-4 ${collection.bgAccent} ${collection.textColor} px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm bg-opacity-90`}>
                        Exclusive
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      <h3 className="text-2xl md:text-3xl font-playfair font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {collection.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {collection.description}
                      </p>
                      
                      <div className="flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                        <span>Explore Collection</span>
                        <svg 
                          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Collections Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center text-foreground mb-12">
              Why Our Collections Stand Apart
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Authentic Craftsmanship</h3>
                <p className="text-muted-foreground">
                  Each piece handcrafted by master artisans using traditional techniques passed down through generations
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Premium Quality</h3>
                <p className="text-muted-foreground">
                  Hallmarked metals and certified gemstones ensuring authenticity and lasting value
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Timeless Designs</h3>
                <p className="text-muted-foreground">
                  Blend of traditional heritage and contemporary elegance for every occasion
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our jewelry experts are here to guide you in selecting the perfect piece
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-left">
                <p className="font-semibold">📧 Email: support@sreem.com</p>
                <p className="font-semibold">📞 Phone: +91-XXXX-XXXXXX</p>
                <p className="font-semibold">⏰ Mon-Sat, 10:00 AM - 6:00 PM IST</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
