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
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  
  const totalItems = useCartStore((state) => state.getTotalItems());
  const { isAuthenticated } = useAuthStore();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="border-b-0 bg-background sticky top-0 z-50 shadow-md relative overflow-hidden">
      {/* Main Header Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-3xl font-playfair font-bold text-primary hover:text-primary/80 transition-all duration-300 hover:scale-105"
          >
            Mudhra
            <span className="text-xs font-normal text-muted-foreground block leading-none mt-1 tracking-wider">
              AUTHENTIC CRAFTSMANSHIP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            <Link 
              to="/sarees" 
              className="group relative text-foreground hover:text-primary transition-all duration-300 font-medium tracking-wide"
            >
              Sarees
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/jewelry" 
              className="group relative text-foreground hover:text-primary transition-all duration-300 font-medium tracking-wide"
            >
              Jewelry
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/collections" 
              className="group relative text-foreground hover:text-primary transition-all duration-300 font-medium tracking-wide"
            >
              Collections
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden lg:flex items-center flex-1 max-w-lg mx-12">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Search for sarees, jewelry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 rounded-full border-border/40 bg-muted/30 focus:bg-background focus:border-primary/50 transition-all duration-300 placeholder:text-muted-foreground/70"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground/70" />
            </div>
          </form>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Cart */}
            <Button 
              variant="ghost" 
              size="lg" 
              className="relative hover:bg-primary/10 transition-all duration-300"
              onClick={() => navigate('/cart')}
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-primary to-secondary text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                  {totalItems}
                </span>
              )}
            </Button>

            {/* User Account */}
            <Button 
              variant="ghost" 
              size="lg"
              className="hover:bg-primary/10 transition-all duration-300"
              onClick={() => navigate(isAuthenticated ? '/profile' : '/login')}
            >
              <User className="h-6 w-6" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="lg"
              className="lg:hidden hover:bg-primary/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border/30 py-6 animate-fade-in">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-6">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search for sarees, jewelry..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 rounded-full border-border/40 bg-muted/30 focus:bg-background focus:border-primary/50 transition-all duration-300"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground/70" />
              </div>
            </form>

            {/* Mobile Navigation */}
            <nav className="space-y-1">
              <Link 
                to="/sarees" 
                className="block py-4 px-4 text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 rounded-lg font-medium tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Sarees
              </Link>
              <Link 
                to="/jewelry" 
                className="block py-4 px-4 text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 rounded-lg font-medium tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Jewelry
              </Link>
              <Link 
                to="/collections" 
                className="block py-4 px-4 text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 rounded-lg font-medium tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Collections
              </Link>
            </nav>
          </div>
        )}
      </div>
      
      {/* Traditional Indian Decorative Border */}
      <div aria-hidden="true" className="w-full h-16 bg-gradient-to-b from-primary/90 to-primary relative overflow-hidden">
        {/* Top ornate vine pattern */}
        <div className="absolute top-0 left-0 right-0 h-5 flex">
          {[...Array(30)].map((_, i) => (
            <svg key={`vine-${i}`} viewBox="0 0 60 20" className="flex-shrink-0" style={{ width: '60px', height: '20px' }}>
              <path d="M0 15 Q15 5, 30 10 T60 10" stroke="hsl(var(--secondary))" strokeWidth="1" fill="none" opacity="0.8"/>
              <circle cx="15" cy="8" r="2" fill="hsl(var(--secondary))" opacity="0.7"/>
              <circle cx="30" cy="10" r="2.5" fill="hsl(var(--secondary))" opacity="0.8"/>
              <circle cx="45" cy="8" r="2" fill="hsl(var(--secondary))" opacity="0.7"/>
              <path d="M30 10 L28 6 L32 6 Z" fill="hsl(var(--secondary))" opacity="0.6"/>
            </svg>
          ))}
        </div>
        
        {/* Middle section with elephant motifs */}
        <div className="absolute top-5 left-0 right-0 bottom-5 flex items-center justify-center">
          <div className="flex items-center gap-4 md:gap-8 lg:gap-12">
            {[...Array(5)].map((_, i) => (
              <div key={`elephant-${i}`} className="flex items-center gap-2 md:gap-4">
                {/* Elephant motif */}
                <svg viewBox="0 0 50 30" className="w-10 h-6 md:w-14 md:h-8 lg:w-16 lg:h-10">
                  {/* Elephant body */}
                  <ellipse cx="25" cy="18" rx="12" ry="8" fill="hsl(var(--secondary))" opacity="0.9"/>
                  {/* Elephant head */}
                  <circle cx="15" cy="15" r="6" fill="hsl(var(--secondary))" opacity="0.9"/>
                  {/* Trunk */}
                  <path d="M12 18 Q8 22, 10 26" stroke="hsl(var(--secondary))" strokeWidth="2" fill="none" opacity="0.9"/>
                  {/* Decorative blanket pattern */}
                  <rect x="20" y="14" width="10" height="8" fill="hsl(var(--accent))" opacity="0.6"/>
                  <circle cx="25" cy="18" r="1.5" fill="hsl(var(--background))" opacity="0.8"/>
                  {/* Legs */}
                  <line x1="20" y1="26" x2="20" y2="30" stroke="hsl(var(--secondary))" strokeWidth="2" opacity="0.9"/>
                  <line x1="30" y1="26" x2="30" y2="30" stroke="hsl(var(--secondary))" strokeWidth="2" opacity="0.9"/>
                </svg>
                
                {/* Decorative divider */}
                {i < 4 && (
                  <svg viewBox="0 0 20 30" className="w-4 h-6 md:w-6 md:h-8">
                    <path d="M10 5 L10 25" stroke="hsl(var(--secondary))" strokeWidth="1" opacity="0.6"/>
                    <circle cx="10" cy="10" r="2" fill="hsl(var(--secondary))" opacity="0.7"/>
                    <circle cx="10" cy="20" r="2" fill="hsl(var(--secondary))" opacity="0.7"/>
                    <path d="M10 15 L8 13 L12 13 Z" fill="hsl(var(--secondary))" opacity="0.6"/>
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom decorative border */}
        <div className="absolute bottom-0 left-0 right-0 h-5 flex">
          {[...Array(40)].map((_, i) => (
            <svg key={`bottom-${i}`} viewBox="0 0 40 20" className="flex-shrink-0" style={{ width: '40px', height: '20px' }}>
              <circle cx="10" cy="10" r="2" fill="hsl(var(--secondary))" opacity="0.7"/>
              <circle cx="20" cy="10" r="2" fill="hsl(var(--secondary))" opacity="0.7"/>
              <circle cx="30" cy="10" r="2" fill="hsl(var(--secondary))" opacity="0.7"/>
              <path d="M5 15 L20 15" stroke="hsl(var(--secondary))" strokeWidth="0.5" opacity="0.5"/>
            </svg>
          ))}
        </div>
      </div>
    </header>
  );
};