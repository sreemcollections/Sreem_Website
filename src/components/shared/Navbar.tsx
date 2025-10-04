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
    <header className="bg-white sticky top-0 z-50 shadow-md">
      {/* Luxury Top Border */}
      <div className="w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>

      {/* Main Navigation Section */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4 lg:py-5">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-3 lg:gap-4 hover:opacity-90 transition-opacity duration-300 group">
                <div className="relative">
                  <img 
                    src="/Sreem_Logo.png" 
                    alt="Sreem" 
                    className="h-14 sm:h-16 lg:h-20 w-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <div className="hidden">
                    <div className="text-2xl lg:text-3xl font-playfair font-bold text-primary">
                      Sreem
                    </div>
                    <span className="text-[10px] font-medium text-gray-600 block leading-tight tracking-[0.2em] mt-1">
                      AUTHENTIC CRAFTSMANSHIP
                    </span>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <div className="text-xl lg:text-2xl font-playfair font-bold text-primary tracking-tight">
                    Sreem
                  </div>
                  <div className="text-[9px] lg:text-[10px] font-medium text-gray-600 tracking-[0.25em] uppercase">
                    Authentic Craftsmanship
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center space-x-10 xl:space-x-14">
              <Link to="/sarees" className="group relative text-gray-800 hover:text-primary transition-colors duration-300 font-medium tracking-wide text-sm xl:text-base uppercase">
                Sarees
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/jewelry" className="group relative text-gray-800 hover:text-primary transition-colors duration-300 font-medium tracking-wide text-sm xl:text-base uppercase">
                Jewelry
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/designers" className="group relative text-gray-800 hover:text-primary transition-colors duration-300 font-medium tracking-wide text-sm xl:text-base uppercase">
                Designers
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-xs xl:max-w-sm mx-8">
              <form onSubmit={handleSearch} className="w-full">
                <div className="relative">
                  <Input 
                    type="search" 
                    placeholder="Search..." 
                    value={searchQuery} 
                    onChange={e => setSearchQuery(e.target.value)} 
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 placeholder:text-gray-400 text-sm" 
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </form>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-1 lg:gap-2">
              {/* Mobile Search Toggle */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="lg:hidden hover:bg-gray-100 transition-colors duration-200 h-10 w-10" 
                onClick={() => {
                  setIsMobileSearchOpen(!isMobileSearchOpen);
                  setIsMenuOpen(false);
                }}
                aria-label="Toggle search"
              >
                <Search className="h-5 w-5 text-gray-700" />
              </Button>

              {/* Cart */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative hover:bg-gray-100 transition-colors duration-200 h-10 w-10 lg:h-11 lg:w-11" 
                onClick={() => navigate('/cart')}
              >
                <ShoppingCart className="h-5 w-5 lg:h-5 lg:w-5 text-gray-700" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                    {totalItems}
                  </span>
                )}
              </Button>

              {/* User Account */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-gray-100 transition-colors duration-200 h-10 w-10 lg:h-11 lg:w-11" 
                onClick={() => navigate(isAuthenticated ? '/profile' : '/login')}
              >
                <User className="h-5 w-5 lg:h-5 lg:w-5 text-gray-700" />
              </Button>

              {/* Mobile Menu Toggle */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="lg:hidden hover:bg-gray-100 transition-colors duration-200 h-10 w-10" 
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  setIsMobileSearchOpen(false);
                }}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="h-5 w-5 text-gray-700" /> : <Menu className="h-5 w-5 text-gray-700" />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Search Bar */}
        {isMobileSearchOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="container mx-auto px-4 py-4">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <Input 
                    type="search" 
                    placeholder="Search..." 
                    value={searchQuery} 
                    onChange={e => setSearchQuery(e.target.value)} 
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 placeholder:text-gray-400 text-sm" 
                    autoFocus
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </form>
            </div>
          </div>
        )}
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="container mx-auto px-4 py-4">
              {/* Mobile Navigation */}
              <nav className="space-y-1">
                <Link 
                  to="/sarees" 
                  className="block py-3 px-4 text-gray-800 hover:bg-gray-50 hover:text-primary transition-colors duration-200 font-medium tracking-wide text-sm uppercase border-b border-gray-100" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sarees
                </Link>
                <Link 
                  to="/jewelry" 
                  className="block py-3 px-4 text-gray-800 hover:bg-gray-50 hover:text-primary transition-colors duration-200 font-medium tracking-wide text-sm uppercase border-b border-gray-100" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Jewelry
                </Link>
                <Link 
                  to="/designers" 
                  className="block py-3 px-4 text-gray-800 hover:bg-gray-50 hover:text-primary transition-colors duration-200 font-medium tracking-wide text-sm uppercase" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Designers
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
