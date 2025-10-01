import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCartStore } from '@/store/cartStore';
import { useAuthStore } from '@/store/authStore';
import elephantProcession from '@/assets/elephant-procession.png';
import flowerPathway from '@/assets/flower-pathway.png';
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const totalItems = useCartStore(state => state.getTotalItems());
  const {
    isAuthenticated
  } = useAuthStore();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsMobileSearchOpen(false);
    }
  };
  return (
    <header className="border-b-0 bg-background/95 backdrop-blur-md sticky top-0 z-50 shadow-lg border-b border-border/20">
      {/* Traditional Indian Decorative Border - Top Section */}
      <div className="w-full bg-gradient-to-b from-primary via-primary to-primary/95 relative overflow-hidden">
        
        {/* Top geometric pattern */}
        
        
        {/* Middle ornate circular floral pattern */}
        
        
        {/* Main elephant section */}
        
        
        {/* Bottom decorative scalloped border */}
        <div className="h-4 flex bg-inherit">
          {[...Array(80)].map((_, i) => <svg key={`scallop-${i}`} viewBox="0 0 20 16" style={{
          width: '20px',
          height: '16px'
        }} className="flex-shrink-0 my-[18px]">
              <path d="M0 0 Q10 8, 20 0 L20 16 L0 16 Z" fill="hsl(var(--background))" opacity="1" />
            </svg>)}
        </div>
      </div>

      {/* Main Navigation Section */}
      <div className="bg-background border-b border-border/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="block text-2xl lg:text-3xl font-playfair font-bold text-primary hover:text-primary/80 transition-all duration-300 hover:scale-105">
                Sreem
                <span className="text-xs font-normal text-muted-foreground block leading-none mt-1 tracking-wider">
                  AUTHENTIC CRAFTSMANSHIP
                </span>
              </Link>
            </div>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-10">
              <Link to="/sarees" className="group relative text-foreground hover:text-primary transition-all duration-300 font-medium tracking-wide text-sm xl:text-base py-2">
                Sarees
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/jewelry" className="group relative text-foreground hover:text-primary transition-all duration-300 font-medium tracking-wide text-sm xl:text-base py-2">
                Jewelry
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/collections" className="group relative text-foreground hover:text-primary transition-all duration-300 font-medium tracking-wide text-sm xl:text-base py-2">
                Collections
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-md xl:max-w-lg mx-6 xl:mx-8">
              <form onSubmit={handleSearch} className="w-full">
                <div className="relative">
                  <Input 
                    type="search" 
                    placeholder="Search for sarees, jewelry..." 
                    value={searchQuery} 
                    onChange={e => setSearchQuery(e.target.value)} 
                    className="w-full pl-12 pr-4 py-2.5 rounded-full border-border/40 bg-muted/30 focus:bg-background focus:border-primary/50 transition-all duration-300 placeholder:text-muted-foreground/70 text-sm" 
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground/70" />
                </div>
              </form>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-1 lg:space-x-3">
              {/* Mobile Search Toggle */}
              <Button 
                variant="ghost" 
                size="sm" 
                className="lg:hidden hover:bg-primary/10 transition-all duration-300 p-2" 
                onClick={() => {
                  setIsMobileSearchOpen(!isMobileSearchOpen);
                  setIsMenuOpen(false);
                }}
                aria-label="Toggle search"
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* Cart */}
              <Button variant="ghost" size="sm" className="relative hover:bg-primary/10 transition-all duration-300 p-2 lg:p-3" onClick={() => navigate('/cart')}>
                <ShoppingCart className="h-5 w-5 lg:h-6 lg:w-6" />
                {totalItems > 0 && <span className="absolute -top-1 -right-1 bg-gradient-to-r from-primary to-secondary text-white text-xs rounded-full h-5 w-5 lg:h-6 lg:w-6 flex items-center justify-center font-bold shadow-lg animate-pulse min-w-[20px] lg:min-w-[24px]">
                    {totalItems}
                  </span>}
              </Button>

              {/* User Account */}
              <Button variant="ghost" size="sm" className="hover:bg-primary/10 transition-all duration-300 p-2 lg:p-3" onClick={() => navigate(isAuthenticated ? '/profile' : '/login')}>
                <User className="h-5 w-5 lg:h-6 lg:w-6" />
              </Button>

              {/* Mobile Menu Toggle */}
              <Button 
                variant="ghost" 
                size="sm" 
                className="lg:hidden hover:bg-primary/10 transition-all duration-300 p-2" 
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  setIsMobileSearchOpen(false);
                }}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Search Bar */}
        {isMobileSearchOpen && (
          <div className="lg:hidden border-t border-border/30 bg-background/95 backdrop-blur-sm animate-fade-in">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <Input 
                    type="search" 
                    placeholder="Search for sarees, jewelry..." 
                    value={searchQuery} 
                    onChange={e => setSearchQuery(e.target.value)} 
                    className="w-full pl-12 pr-4 py-3 rounded-full border-border/40 bg-muted/30 focus:bg-background focus:border-primary/50 transition-all duration-300 placeholder:text-muted-foreground/70" 
                    autoFocus
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground/70" />
                </div>
              </form>
            </div>
          </div>
        )}
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border/30 bg-background/95 backdrop-blur-sm animate-fade-in">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
              {/* Mobile Navigation */}
              <nav className="space-y-3">
                <Link 
                  to="/sarees" 
                  className="flex items-center py-4 px-5 text-foreground hover:text-primary hover:bg-primary/5 active:bg-primary/10 transition-all duration-300 rounded-xl font-medium tracking-wide text-lg border border-transparent hover:border-primary/20 shadow-sm hover:shadow-md" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sarees
                </Link>
                <Link 
                  to="/jewelry" 
                  className="flex items-center py-4 px-5 text-foreground hover:text-primary hover:bg-primary/5 active:bg-primary/10 transition-all duration-300 rounded-xl font-medium tracking-wide text-lg border border-transparent hover:border-primary/20 shadow-sm hover:shadow-md" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Jewelry
                </Link>
                <Link 
                  to="/collections" 
                  className="flex items-center py-4 px-5 text-foreground hover:text-primary hover:bg-primary/5 active:bg-primary/10 transition-all duration-300 rounded-xl font-medium tracking-wide text-lg border border-transparent hover:border-primary/20 shadow-sm hover:shadow-md" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Collections
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
