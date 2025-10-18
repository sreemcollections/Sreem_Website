import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import panchalohamJewelry from '@/assets/panchaloham-jewelry.png';
import silverJewelry from '@/assets/jewlery.png';

export default function JewelryCollections() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const collections = [
    {
      id: 'panchaloham',
      name: 'Panchaloham Collection',
      description: 'Sacred five-metal traditional jewelry crafted with ancient techniques',
      image: panchalohamJewelry,
      gradient: 'from-yellow-600 to-orange-600',
      textColor: 'text-yellow-900',
      bgAccent: 'bg-yellow-50'
    },
    {
      id: 'silver',
      name: 'Silver Collection',
      description: 'Exquisite sterling silver jewelry with intricate craftsmanship',
      image: silverJewelry,
      gradient: 'from-gray-400 to-gray-600',
      textColor: 'text-gray-900',
      bgAccent: 'bg-gray-50'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Collection Selection */}
      <section className="py-10 sm:py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-foreground mb-3 sm:mb-4 px-4">
              Choose Your Collection
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Each collection tells a unique story of heritage, artistry, and timeless beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-5xl mx-auto px-2 sm:px-0">
            {collections.map((collection, index) => (
              <Link 
                key={collection.id} 
                to={`/jewelry/${collection.id}`}
                className="group transform transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="overflow-hidden border-2 border-transparent hover:border-primary/30 transition-all duration-500 hover:shadow-2xl">
                  <div className={`h-3 sm:h-4 bg-gradient-to-r ${collection.gradient} transition-all duration-300 group-hover:h-4 sm:group-hover:h-5`}></div>
                  
                  <CardContent className="p-0">
                    {/* Image Section */}
                    <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      <img
                        src={collection.image}
                        alt={collection.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Floating Badge */}
                      <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 ${collection.bgAccent} ${collection.textColor} px-3 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg backdrop-blur-sm bg-opacity-90 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
                        Exclusive
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-8 md:p-10">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                        {collection.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                        {collection.description}
                      </p>
                      
                      <div className="flex items-center text-primary font-semibold group-hover:gap-4 gap-2 transition-all duration-300 text-lg">
                        <span>Explore Collection</span>
                        <svg 
                          className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" 
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
    </div>
  );
}
