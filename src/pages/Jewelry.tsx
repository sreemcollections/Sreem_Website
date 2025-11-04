import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Filter, Loader2, ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import panchalohamJewelry from '@/assets/panchaloham-jewelry.png';
import silverJewelry from '@/assets/jewlery.png';
import sareesImage from '@/assets/sarees.png';
import { fetchProducts, Product, getImageUrl } from '@/lib/sanity-products';

export default function Jewelry() {
  const { collection } = useParams<{ collection: string }>();
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Filter and Sort State
  const [sortBy, setSortBy] = useState('featured');
  const [priceRanges, setPriceRanges] = useState<string[]>([]);
  const [discountRanges, setDiscountRanges] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadProducts();
  }, [collection]);

  useEffect(() => {
    applyFiltersAndSort();
  }, [products, sortBy, priceRanges, discountRanges]);

  const applyFiltersAndSort = () => {
    let filtered = [...products];

    // Apply Price Range Filters
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

    // Apply Discount Filters
    if (discountRanges.length > 0) {
      filtered = filtered.filter(product => {
        if (!product.originalPrice) return false;
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        return discountRanges.some(range => discount >= parseInt(range));
      });
    }

    // Apply Sorting
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      filtered.sort((a, b) => new Date(b._createdAt || 0).getTime() - new Date(a._createdAt || 0).getTime());
    }

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

  const loadProducts = async () => {
    setLoading(true);
    const options: any = { category: 'jewelry' };
    
    // Map URL collection param to Sanity collection names
    if (collection === 'panchaloham') {
      options.collection = 'Panchaloha';
    } else if (collection === 'silver') {
      options.collection = 'Silver';
    }
    
    const data = await fetchProducts(options);
    setProducts(data);
    setLoading(false);
  };

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
                Showing 1-{Math.min(20, filteredProducts.length)} of {filteredProducts.length} jewelry pieces
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
                <p className="text-lg text-muted-foreground">
                  No jewelry found matching your filters{collection ? ` in ${collection} collection` : ''}.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
                    />
                  );
                })}
              </div>
            )}

            {/* Explore Sarees Collection Banner */}
            <div className="mt-16 mb-12">
              <div className="relative overflow-hidden rounded-2xl border-2 border-amber-300/50 dark:border-amber-700/50 shadow-2xl">
                {/* Luxury Pattern Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600" 
                     style={{
                       backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.15'%3E%3Cpath d='M40 40c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm0-12c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm16 28c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-20c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zM24 56c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-20c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zM8 40c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm64 0c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zM40 72c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zM40 8c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                       backgroundSize: '80px 80px'
                     }}>
                </div>
                
                {/* Ornamental Pattern Overlay */}
                <div className="absolute inset-0"
                     style={{
                       backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 L55 25 L70 25 L58 35 L62 50 L50 40 L38 50 L42 35 L30 25 L45 25 Z M25 50 L30 60 L40 60 L32 68 L35 80 L25 72 L15 80 L18 68 L10 60 L20 60 Z M75 50 L80 60 L90 60 L82 68 L85 80 L75 72 L65 80 L68 68 L60 60 L70 60 Z M50 75 L53 85 L63 85 L55 92 L58 100 L50 94 L42 100 L45 92 L37 85 L47 85 Z' fill='%23FFFFFF' fill-opacity='0.08'/%3E%3C/svg%3E")`,
                       backgroundSize: '100px 100px',
                       backgroundPosition: 'center'
                     }}>
                </div>
                
                {/* Gold Shimmer Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/25 to-transparent animate-shimmer"></div>
                
                {/* Decorative Border Pattern */}
                <div className="absolute inset-0 border-4 border-yellow-400/25 rounded-2xl m-2"></div>
                
                <div className="relative p-4 sm:p-6 md:p-8 lg:p-12 backdrop-blur-sm bg-gradient-to-br from-amber-50/40 via-orange-50/40 to-yellow-50/40 dark:from-amber-950/40 dark:via-orange-950/40 dark:to-yellow-950/40">
                  <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                    {/* Text Content */}
                    <div className="space-y-4 md:space-y-6 text-center lg:text-left">
                      <div className="inline-block">
                        <Badge className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 text-white border-0 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold shadow-lg">
                          Explore Our Sarees
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-rose-900 via-pink-800 to-purple-900 dark:from-rose-100 dark:via-pink-100 dark:to-purple-100 bg-clip-text text-transparent leading-tight drop-shadow-sm">
                        Discover Exquisite Saree Collections
                      </h3>
                      
                      <p className="text-sm sm:text-base lg:text-lg text-amber-950/90 dark:text-amber-50/90 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                        Complete your jewelry look with our stunning saree collection. From traditional temple borders to contemporary designs, each piece tells a story of heritage and elegance.
                      </p>
                    </div>

                    {/* Image Card */}
                    <Link 
                      to="/sarees"
                      className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group aspect-[4/3] sm:aspect-auto sm:h-auto max-w-md mx-auto lg:max-w-none"
                    >
                      <img 
                        src={sareesImage} 
                        alt="Sarees Collection" 
                        className="w-full h-full sm:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300"></div>
                      
                      {/* Desktop Hover Effect */}
                      <div className="hidden md:flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold shadow-xl flex items-center gap-2 text-base lg:text-lg">
                          Explore
                          <ArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />
                        </div>
                      </div>
                      
                      {/* Text Overlay */}
                      <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 right-3 sm:right-4 lg:right-6">
                        <p className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-1 sm:mb-2 drop-shadow-lg">Sarees Collection</p>
                        <p className="text-rose-200 text-xs sm:text-sm lg:text-base drop-shadow-md">Traditional Elegance Meets Modern Grace</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Load More */}
            {!loading && products.length > 0 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Products
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}