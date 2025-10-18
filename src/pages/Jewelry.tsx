import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Filter, Grid, List } from 'lucide-react';
import panchalohamJewelry from '@/assets/panchaloham-jewelry.png';
import silverJewelry from '@/assets/jewlery.png';

export default function Jewelry() {
  const { collection } = useParams<{ collection: string }>();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [collection]);

  const collectionTitles: Record<string, string> = {
    'panchaloham': 'Panchaloham Collection',
    'silver': 'Silver Collection'
  };

  const collectionDescription: Record<string, string> = {
    'panchaloham': 'Sacred five-metal traditional jewelry crafted with ancient techniques',
    'silver': 'Exquisite sterling silver jewelry with intricate craftsmanship'
  };

  const collectionImages: Record<string, string> = {
    'panchaloham': panchalohamJewelry,
    'silver': silverJewelry
  };

  const collectionGradients: Record<string, string> = {
    'panchaloham': 'from-amber-900/60 via-yellow-800/40 to-orange-900/50',
    'silver': 'from-slate-900/60 via-gray-800/40 to-slate-800/50'
  };

  const collectionAccents: Record<string, string> = {
    'panchaloham': 'text-yellow-400',
    'silver': 'text-gray-300'
  };

  const collectionBadges: Record<string, string> = {
    'panchaloham': 'bg-amber-600/90 border-amber-500/50',
    'silver': 'bg-gray-600/90 border-gray-500/50'
  };

  const currentTitle = collection ? collectionTitles[collection] || 'Handcrafted Jewelry' : 'Handcrafted Jewelry';
  const currentDescription = collection ? collectionDescription[collection] || 'Discover our exquisite collection of traditional and contemporary jewelry pieces' : 'Discover our exquisite collection of traditional and contemporary jewelry pieces';
  const currentImage = collection ? collectionImages[collection] : silverJewelry;
  const currentGradient = collection ? collectionGradients[collection] : 'from-accent/60 to-secondary/60';
  const currentAccent = collection ? collectionAccents[collection] : 'text-accent';
  const currentBadge = collection ? collectionBadges[collection] : 'bg-accent/90 border-accent/50';

  return (
    <div className="min-h-screen">
      {/* Hero Section with Traditional Motion Background */}
      <section className="relative h-[35vh] md:h-[45vh] overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center animate-[float_8s_ease-in-out_infinite]"
            style={{
              backgroundImage: `url(${currentImage})`,
              filter: 'brightness(0.45) blur(0.5px)'
            }}
          />
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${currentGradient}`} />
          
          {/* Floating Decorative Elements */}
          <div className="absolute top-16 left-8 w-32 h-32 bg-gradient-to-br from-amber-500/15 to-yellow-600/10 rounded-full blur-2xl animate-[float_5s_ease-in-out_infinite_reverse]" />
          <div className="absolute bottom-24 right-12 w-24 h-24 bg-gradient-to-br from-amber-400/15 to-orange-500/10 rounded-full blur-2xl animate-[float_6s_ease-in-out_infinite]" />
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-yellow-500/10 to-amber-600/15 rounded-full blur-xl animate-[float_7s_ease-in-out_infinite]" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex items-center justify-center text-center">
          <div className="max-w-3xl w-full">
            <Badge variant="secondary" className={`mb-3 sm:mb-4 ${currentBadge} text-white backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium`}>
              Handcrafted Excellence
            </Badge>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-playfair font-bold text-white mb-3 sm:mb-4 animate-fade-in drop-shadow-2xl px-2">
              {currentTitle.split(' ')[0]} <span className={currentAccent}>{currentTitle.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/95 max-w-2xl mx-auto animate-fade-in drop-shadow-lg leading-relaxed px-4">
              {currentDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Sort Bar */}
      <section className="border-b bg-background sticky top-16 z-40">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden text-xs sm:text-sm"
              >
                <Filter className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2" />
                Filters
              </Button>
              <span className="text-xs sm:text-sm text-muted-foreground">
                Showing 1-20 of 80 jewelry pieces
              </span>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto">
              <Select defaultValue="featured">
                <SelectTrigger className="w-32 sm:w-40 text-xs sm:text-sm">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
              
              <div className="flex border rounded-md">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className={`w-64 space-y-6 ${showFilters ? 'block' : 'hidden'} md:block`}>
            <div>
              <h3 className="font-semibold mb-3">Price Range</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="under-10000" />
                  <label htmlFor="under-10000" className="text-sm">Under ₹10,000</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="10000-25000" />
                  <label htmlFor="10000-25000" className="text-sm">₹10,000 - ₹25,000</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="25000-50000" />
                  <label htmlFor="25000-50000" className="text-sm">₹25,000 - ₹50,000</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="above-50000" />
                  <label htmlFor="above-50000" className="text-sm">Above ₹50,000</label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Type</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="necklace" />
                  <label htmlFor="necklace" className="text-sm">Necklace</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="earrings" />
                  <label htmlFor="earrings" className="text-sm">Earrings</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="bangles" />
                  <label htmlFor="bangles" className="text-sm">Bangles</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="rings" />
                  <label htmlFor="rings" className="text-sm">Rings</label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Collection</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="panchaloham" />
                  <label htmlFor="panchaloham" className="text-sm">Panchaloham</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="silver" />
                  <label htmlFor="silver" className="text-sm">Silver</label>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {/* Sample Products */}
              {Array.from({ length: 12 }, (_, i) => (
                <Card key={i} className="group overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gradient-to-br from-accent/10 to-secondary/10 relative">
                      <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
                        Handcrafted
                      </Badge>
                      <div className="absolute bottom-3 right-3">
                        <Button size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                          Quick View
                        </Button>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold mb-1">Temple Gold Necklace</h3>
                      <p className="text-sm text-muted-foreground mb-2">Traditional Lakshmi design</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-primary">₹25,999</span>
                          <span className="text-sm text-muted-foreground line-through">₹29,999</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          GST Included
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}