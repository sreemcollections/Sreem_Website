import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Filter, Grid, List, Loader2, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import ProductCard from '@/components/ProductCard';
import sareesImage from '@/assets/sarees.png';
import panchalohamJewelry from '@/assets/panchaloham-jewelry.png';
import silverJewelry from '@/assets/jewlery.png';
import { fetchProducts, Product, getImageUrl } from '@/lib/sanity-products';
import { Link } from 'react-router-dom';

export default function Sarees() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoadingState] = useState(true);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRanges, setPriceRanges] = useState<string[]>([]);
  const [discountRanges, setDiscountRanges] = useState<string[]>([]);
  const { isLoading, loadingItems, setLoading, setItemLoading } = useCartStore();

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    applyFiltersAndSort();
  }, [products, priceRanges, discountRanges, sortBy]);

  const loadProducts = async () => {
    setLoadingState(true);
    const data = await fetchProducts({ category: 'sarees' });
    setProducts(data);
    setLoadingState(false);
  };

  const applyFiltersAndSort = () => {
    let filtered = [...products];

    // Apply price filters
    if (priceRanges.length > 0) {
      filtered = filtered.filter(product => {
        return priceRanges.some(range => {
          if (range === 'under-5000') return product.price < 5000;
          if (range === '5000-10000') return product.price >= 5000 && product.price <= 10000;
          if (range === '10000-25000') return product.price >= 10000 && product.price <= 25000;
          if (range === 'above-25000') return product.price > 25000;
          return false;
        });
      });
    }

    // Apply discount filters
    if (discountRanges.length > 0) {
      filtered = filtered.filter(product => {
        if (!product.originalPrice) return false;
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        return discountRanges.some(range => {
          if (range === '10') return discount >= 10;
          if (range === '20') return discount >= 20;
          if (range === '30') return discount >= 30;
          return false;
        });
      });
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return new Date(b._createdAt || '').getTime() - new Date(a._createdAt || '').getTime();
        case 'featured':
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });

    setFilteredProducts(filtered);
  };

  const togglePriceRange = (range: string) => {
    setPriceRanges(prev =>
      prev.includes(range) ? prev.filter(r => r !== range) : [...prev, range]
    );
  };

  const toggleDiscountRange = (range: string) => {
    setDiscountRanges(prev =>
      prev.includes(range) ? prev.filter(r => r !== range) : [...prev, range]
    );
  };

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
      {/* Hero Section with Traditional Motion Background */}
      <section className="relative h-[35vh] md:h-[45vh] overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center animate-[float_8s_ease-in-out_infinite]"
            style={{
              backgroundImage: `url(${sareesImage})`,
              filter: 'brightness(0.45) blur(0.5px)'
            }}
          />
          {/* Luxurious Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-amber-900/50" />
          
          {/* Floating Decorative Elements with Golden Tones */}
          <div className="absolute top-16 left-8 w-40 h-40 bg-gradient-to-br from-amber-500/15 to-yellow-600/10 rounded-full blur-2xl animate-[float_5s_ease-in-out_infinite_reverse]" />
          <div className="absolute bottom-24 right-12 w-32 h-32 bg-gradient-to-br from-amber-400/15 to-orange-500/10 rounded-full blur-2xl animate-[float_6s_ease-in-out_infinite]" />
          <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-gradient-to-br from-yellow-500/10 to-amber-600/15 rounded-full blur-xl animate-[float_7s_ease-in-out_infinite]" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 h-full flex items-center justify-center text-center">
          <div className="max-w-3xl w-full">
            <Badge variant="secondary" className="mb-3 sm:mb-4 bg-amber-600/90 text-white border-amber-500/50 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium">
              Handwoven Heritage
            </Badge>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-playfair font-bold text-white mb-3 sm:mb-4 animate-fade-in drop-shadow-2xl px-2">
              Exquisite <span className="text-amber-400">Sarees</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/95 max-w-2xl mx-auto animate-fade-in drop-shadow-lg leading-relaxed px-4">
              Discover our curated collection of handwoven sarees from master craftsmen across India
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
                Showing 1-{Math.min(20, filteredProducts.length)} of {filteredProducts.length} sarees
              </span>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto">
              <Select value={sortBy} onValueChange={setSortBy}>
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
                  <Checkbox 
                    id="under-5000" 
                    checked={priceRanges.includes('under-5000')}
                    onCheckedChange={() => togglePriceRange('under-5000')}
                  />
                  <label htmlFor="under-5000" className="text-sm cursor-pointer">Under ₹5,000</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="5000-10000" 
                    checked={priceRanges.includes('5000-10000')}
                    onCheckedChange={() => togglePriceRange('5000-10000')}
                  />
                  <label htmlFor="5000-10000" className="text-sm cursor-pointer">₹5,000 - ₹10,000</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="10000-25000" 
                    checked={priceRanges.includes('10000-25000')}
                    onCheckedChange={() => togglePriceRange('10000-25000')}
                  />
                  <label htmlFor="10000-25000" className="text-sm cursor-pointer">₹10,000 - ₹25,000</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="above-25000" 
                    checked={priceRanges.includes('above-25000')}
                    onCheckedChange={() => togglePriceRange('above-25000')}
                  />
                  <label htmlFor="above-25000" className="text-sm cursor-pointer">Above ₹25,000</label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Discount</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="discount-10" 
                    checked={discountRanges.includes('10')}
                    onCheckedChange={() => toggleDiscountRange('10')}
                  />
                  <label htmlFor="discount-10" className="text-sm cursor-pointer">10% and above</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="discount-20" 
                    checked={discountRanges.includes('20')}
                    onCheckedChange={() => toggleDiscountRange('20')}
                  />
                  <label htmlFor="discount-20" className="text-sm cursor-pointer">20% and above</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="discount-30" 
                    checked={discountRanges.includes('30')}
                    onCheckedChange={() => toggleDiscountRange('30')}
                  />
                  <label htmlFor="discount-30" className="text-sm cursor-pointer">30% and above</label>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-lg text-muted-foreground">No sarees found matching your filters.</p>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map((product) => {
                  const discount = product.originalPrice 
                    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
                    : 0;
                  
                  return (
                    <ProductCard
                      key={product._id}
                      id={product._id}
                      name={product.name}
                      description={product.description || ''}
                      price={product.price}
                      originalPrice={product.originalPrice}
                      discount={discount}
                      slug={product.slug.current}
                      images={product.images?.map(img => getImageUrl(img)) || []}
                      onQuickView={handleQuickView}
                    />
                  );
                })}
              </div>
            )}

            {/* Explore Jewelry Collections Banner */}
            <div className="mt-16 mb-12">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950 dark:via-yellow-950 dark:to-orange-950 border border-amber-200 dark:border-amber-800 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                
                <div className="relative p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                      <div className="inline-block">
                        <Badge className="bg-gradient-to-r from-amber-600 to-orange-600 text-white border-0 px-4 py-1.5 text-sm font-semibold shadow-lg">
                          Explore Our Jewelry
                        </Badge>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900 dark:from-amber-200 dark:via-orange-200 dark:to-amber-200 bg-clip-text text-transparent leading-tight">
                        Discover Exquisite Jewelry Collections
                      </h3>
                      
                      <p className="text-lg text-amber-800 dark:text-amber-200 leading-relaxed">
                        Complement your sarees with our stunning jewelry pieces - from sacred Panchaloha to elegant Silver collections, each crafted with timeless artistry.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Link 
                        to="/jewelry/panchaloham"
                        className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 cursor-pointer group"
                      >
                        <img 
                          src={panchalohamJewelry} 
                          alt="Panchaloha Jewelry" 
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-amber-600 text-white px-6 py-3 rounded-full font-semibold shadow-xl flex items-center gap-2">
                            Explore
                            <ArrowRight className="h-5 w-5" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-white font-bold text-lg">Panchaloha</p>
                          <p className="text-amber-200 text-sm">Sacred Five Metals</p>
                        </div>
                      </Link>
                      
                      <Link 
                        to="/jewelry/silver"
                        className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 cursor-pointer group"
                      >
                        <img 
                          src={silverJewelry} 
                          alt="Silver Jewelry" 
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-gray-600 text-white px-6 py-3 rounded-full font-semibold shadow-xl flex items-center gap-2">
                            Explore
                            <ArrowRight className="h-5 w-5" />
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-white font-bold text-lg">Silver</p>
                          <p className="text-gray-200 text-sm">Elegant Sterling</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
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