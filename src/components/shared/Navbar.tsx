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
    <header className="border-b-0 bg-background sticky top-0 z-50 shadow-lg">
      {/* Traditional Indian Decorative Border - Top Section */}
      <div className="w-full bg-gradient-to-b from-primary via-primary to-primary/95 relative overflow-hidden">
        
        {/* Top geometric pattern */}
        <div className="h-4 flex border-b border-secondary/30">
          {[...Array(60)].map((_, i) => (
            <svg key={`geo-${i}`} viewBox="0 0 30 16" className="flex-shrink-0" style={{ width: '30px', height: '16px' }}>
              <path d="M15 2 L20 8 L15 14 L10 8 Z" fill="none" stroke="hsl(var(--secondary))" strokeWidth="0.8" opacity="0.7"/>
              <circle cx="15" cy="8" r="1.5" fill="hsl(var(--secondary))" opacity="0.6"/>
            </svg>
          ))}
        </div>
        
        {/* Middle ornate circular floral pattern */}
        <div className="h-12 flex items-center border-b border-secondary/30 bg-primary/80">
          {[...Array(20)].map((_, i) => (
            <svg key={`floral-${i}`} viewBox="0 0 60 48" className="flex-shrink-0" style={{ width: '60px', height: '48px' }}>
              {/* Circular frame */}
              <circle cx="30" cy="24" r="18" fill="none" stroke="hsl(var(--secondary))" strokeWidth="1" opacity="0.8"/>
              {/* Central tree/floral motif */}
              <path d="M30 10 L30 38" stroke="hsl(var(--secondary))" strokeWidth="1.5" opacity="0.8"/>
              <path d="M30 18 Q25 20, 25 24 T30 30" fill="hsl(var(--secondary))" opacity="0.6"/>
              <path d="M30 18 Q35 20, 35 24 T30 30" fill="hsl(var(--secondary))" opacity="0.6"/>
              <circle cx="30" cy="15" r="3" fill="hsl(var(--secondary))" opacity="0.7"/>
              <circle cx="26" cy="24" r="2" fill="hsl(var(--secondary))" opacity="0.7"/>
              <circle cx="34" cy="24" r="2" fill="hsl(var(--secondary))" opacity="0.7"/>
              <path d="M22 24 L20 20 L24 22 Z" fill="hsl(var(--secondary))" opacity="0.6"/>
              <path d="M38 24 L40 20 L36 22 Z" fill="hsl(var(--secondary))" opacity="0.6"/>
            </svg>
          ))}
        </div>
        
        {/* Main elephant section */}
        <div className="h-32 md:h-40 flex items-center justify-center py-4 relative">
          <div className="flex items-center gap-8 md:gap-16 lg:gap-24">
            {[...Array(3)].map((_, i) => (
              <svg key={`elephant-main-${i}`} viewBox="0 0 120 80" className="w-24 h-20 md:w-32 md:h-28 lg:w-40 lg:h-32">
                {/* Elephant body with detailed pattern */}
                <ellipse cx="60" cy="50" rx="35" ry="22" fill="hsl(var(--secondary))" opacity="0.85"/>
                <circle cx="40" cy="40" r="18" fill="hsl(var(--secondary))" opacity="0.85"/>
                
                {/* Trunk */}
                <path d="M30 45 Q20 55, 25 65 T30 72" stroke="hsl(var(--secondary))" strokeWidth="5" fill="none" opacity="0.85"/>
                
                {/* Ear */}
                <ellipse cx="35" cy="38" rx="8" ry="15" fill="hsl(var(--secondary))" opacity="0.7"/>
                
                {/* Decorative blanket with intricate patterns */}
                <rect x="45" y="35" width="35" height="30" rx="2" fill="hsl(var(--accent))" opacity="0.6"/>
                <rect x="48" y="38" width="29" height="5" fill="hsl(var(--secondary))" opacity="0.8"/>
                <rect x="48" y="56" width="29" height="5" fill="hsl(var(--secondary))" opacity="0.8"/>
                
                {/* Geometric patterns on blanket */}
                <circle cx="55" cy="50" r="3" fill="hsl(var(--background))" opacity="0.9"/>
                <circle cx="63" cy="50" r="3" fill="hsl(var(--background))" opacity="0.9"/>
                <circle cx="71" cy="50" r="3" fill="hsl(var(--background))" opacity="0.9"/>
                <path d="M59 45 L63 50 L59 55 L55 50 Z" fill="hsl(var(--background))" opacity="0.8"/>
                <path d="M67 45 L71 50 L67 55 L63 50 Z" fill="hsl(var(--background))" opacity="0.8"/>
                
                {/* Legs with anklets */}
                <line x1="50" y1="72" x2="50" y2="80" stroke="hsl(var(--secondary))" strokeWidth="5" opacity="0.85"/>
                <line x1="65" y1="72" x2="65" y2="80" stroke="hsl(var(--secondary))" strokeWidth="5" opacity="0.85"/>
                <line x1="75" y1="72" x2="75" y2="80" stroke="hsl(var(--secondary))" strokeWidth="5" opacity="0.85"/>
                <circle cx="50" cy="75" r="2" fill="hsl(var(--accent))" opacity="0.8"/>
                <circle cx="65" cy="75" r="2" fill="hsl(var(--accent))" opacity="0.8"/>
                <circle cx="75" cy="75" r="2" fill="hsl(var(--accent))" opacity="0.8"/>
                
                {/* Decorative stars around */}
                {i === 1 && (
                  <>
                    <path d="M15 25 L17 30 L22 30 L18 33 L20 38 L15 35 L10 38 L12 33 L8 30 L13 30 Z" fill="hsl(var(--secondary))" opacity="0.6"/>
                    <path d="M105 25 L107 30 L112 30 L108 33 L110 38 L105 35 L100 38 L102 33 L98 30 L103 30 Z" fill="hsl(var(--secondary))" opacity="0.6"/>
                  </>
                )}
              </svg>
            ))}
          </div>
          
          {/* Scattered floral motifs */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <svg 
                key={`scatter-${i}`} 
                viewBox="0 0 20 20" 
                className="absolute w-4 h-4 md:w-5 md:h-5"
                style={{
                  left: `${10 + (i * 8)}%`,
                  top: `${20 + (i % 3) * 25}%`,
                  opacity: 0.5
                }}
              >
                <circle cx="10" cy="10" r="2" fill="hsl(var(--secondary))"/>
                <circle cx="10" cy="5" r="1.5" fill="hsl(var(--secondary))"/>
                <circle cx="10" cy="15" r="1.5" fill="hsl(var(--secondary))"/>
                <circle cx="5" cy="10" r="1.5" fill="hsl(var(--secondary))"/>
                <circle cx="15" cy="10" r="1.5" fill="hsl(var(--secondary))"/>
              </svg>
            ))}
          </div>
        </div>
        
        {/* Bottom decorative scalloped border */}
        <div className="h-4 flex">
          {[...Array(80)].map((_, i) => (
            <svg key={`scallop-${i}`} viewBox="0 0 20 16" className="flex-shrink-0" style={{ width: '20px', height: '16px' }}>
              <path d="M0 0 Q10 8, 20 0 L20 16 L0 16 Z" fill="hsl(var(--background))" opacity="1"/>
            </svg>
          ))}
        </div>
      </div>

      {/* Main Navigation Section */}
      <div className="bg-background border-b border-border/20">
        <div className="container mx-auto px-4 lg:px-8">
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
      </div>
    </header>
  );
};