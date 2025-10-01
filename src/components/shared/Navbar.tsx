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
    <header className="border-b border-border/30 bg-background/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm relative">
      {/* Elephant Animation Box - Behind Content */}
      <div aria-hidden="true" className="block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[420px] md:w-[500px] lg:w-[560px] h-10 md:h-12 overflow-hidden rounded-md z-0 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-contain bg-background"
        >
          <source src="/elephants-loop.mp4" type="video/mp4" />
        </video>
      </div>
      
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
    </header>
  );
};