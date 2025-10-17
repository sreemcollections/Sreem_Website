import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Filter, Grid, List } from 'lucide-react';

export default function Jewelry() {
  const { collection } = useParams<{ collection: string }>();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const collectionTitles: Record<string, string> = {
    'panchaloham': 'Panchaloham Collection',
    'silver': 'Silver Collection',
    'gold': 'Gold Collection',
    'temple': 'Temple Jewelry Collection'
  };

  const collectionDescription: Record<string, string> = {
    'panchaloham': 'Sacred five-metal traditional jewelry crafted with ancient techniques',
    'silver': 'Exquisite sterling silver jewelry with intricate craftsmanship',
    'gold': 'Timeless 22K gold jewelry with traditional and contemporary designs',
    'temple': 'Divine temple-style jewelry inspired by South Indian traditions'
  };

  const currentTitle = collection ? collectionTitles[collection] || 'Handcrafted Jewelry' : 'Handcrafted Jewelry';
  const currentDescription = collection ? collectionDescription[collection] || 'Discover our exquisite collection of traditional and contemporary jewelry pieces' : 'Discover our exquisite collection of traditional and contemporary jewelry pieces';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            {currentTitle}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {currentDescription}
          </p>
        </div>
      </section>

      {/* Filter & Sort Bar */}
      <section className="border-b bg-background sticky top-16 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <span className="text-sm text-muted-foreground">
                Showing 1-20 of 80 jewelry pieces
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <Select defaultValue="featured">
                <SelectTrigger className="w-40">
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
              <h3 className="font-semibold mb-3">Search</h3>
              <Input placeholder="Search jewelry..." />
            </div>

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
                <div className="flex items-center space-x-2">
                  <Checkbox id="gold" />
                  <label htmlFor="gold" className="text-sm">Gold</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="temple" />
                  <label htmlFor="temple" className="text-sm">Temple</label>
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