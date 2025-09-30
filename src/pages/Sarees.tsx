import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Filter, Grid, List, Loader2 } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

export default function Sarees() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const { isLoading, loadingItems, setLoading, setItemLoading } = useCartStore();

  const handleQuickView = async (productId: string) => {
    setItemLoading(productId, true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setItemLoading(productId, false);
  };

  const handleLoadMore = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4">
            Exquisite Sarees
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collection of handwoven sarees from master craftsmen across India
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
                Showing 1-20 of 150 sarees
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
              <Input placeholder="Search sarees..." />
            </div>

            <div>
              <h3 className="font-semibold mb-3">Price Range</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="under-5000" />
                  <label htmlFor="under-5000" className="text-sm">Under ₹5,000</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="5000-10000" />
                  <label htmlFor="5000-10000" className="text-sm">₹5,000 - ₹10,000</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="10000-25000" />
                  <label htmlFor="10000-25000" className="text-sm">₹10,000 - ₹25,000</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="above-25000" />
                  <label htmlFor="above-25000" className="text-sm">Above ₹25,000</label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Fabric</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="silk" />
                  <label htmlFor="silk" className="text-sm">Silk</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="cotton" />
                  <label htmlFor="cotton" className="text-sm">Cotton</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="georgette" />
                  <label htmlFor="georgette" className="text-sm">Georgette</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="chiffon" />
                  <label htmlFor="chiffon" className="text-sm">Chiffon</label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Discount</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="discount-10" />
                  <label htmlFor="discount-10" className="text-sm">10% and above</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="discount-20" />
                  <label htmlFor="discount-20" className="text-sm">20% and above</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="discount-30" />
                  <label htmlFor="discount-30" className="text-sm">30% and above</label>
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
              {Array.from({ length: 12 }, (_, i) => {
                const productId = `product-${i}`;
                const isItemLoading = loadingItems.has(productId);
                const discountPercentage = [20, 25, 15, 30, 10, 35][i % 6];
                
                return (
                  <Card key={i} className="group overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-secondary/10 relative">
                        <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
                          {discountPercentage}% OFF
                        </Badge>
                        <div className="absolute bottom-3 right-3">
                          <Button 
                            size="sm" 
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => handleQuickView(productId)}
                            disabled={isItemLoading}
                          >
                            {isItemLoading ? (
                              <>
                                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                Loading
                              </>
                            ) : (
                              'Quick View'
                            )}
                          </Button>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <h3 className="font-semibold mb-1">Royal Banarasi Silk Saree</h3>
                        <p className="text-sm text-muted-foreground mb-2">Handwoven with golden zari</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-primary">₹15,999</span>
                            <span className="text-sm text-muted-foreground line-through">₹19,999</span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            GST Included
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleLoadMore}
                disabled={isLoading}
                className="min-w-[200px]"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Loading Products
                  </>
                ) : (
                  'Load More Products'
                )}
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}