import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import elephantProcession from '@/assets/elephant-procession.png';
import flowerPathway from '@/assets/flower-pathway.png';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      {/* Luxury Top Border */}
      <div className="w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>

      {/* Main Navigation Section */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between py-2.5 sm:py-3 md:py-4 lg:py-5">
            {/* Logo with Brand Name */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition-opacity duration-300">
                <img 
                  src="/Sreem_Logo.png" 
                  alt="Sreem" 
                  className="h-12 sm:h-12 md:h-13 lg:h-14 xl:h-16 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                <div className="flex flex-col">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-playfair font-bold text-primary leading-none">
                    Sreem
                  </div>
                  <span className="text-[8px] sm:text-[9px] lg:text-[10px] font-medium text-gray-600 leading-tight tracking-[0.15em] sm:tracking-[0.2em] mt-0.5">
                    AUTHENTIC CRAFTSMANSHIP
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Right */}
            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12 ml-auto">
              <Link to="/sarees" className="group relative text-gray-800 hover:text-primary transition-all duration-300 font-medium tracking-widest text-sm uppercase">
                Sarees
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/jewelry" className="group relative text-gray-800 hover:text-primary transition-all duration-300 font-medium tracking-widest text-sm uppercase">
                Jewelry
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/designers" className="group relative text-gray-800 hover:text-primary transition-all duration-300 font-medium tracking-widest text-sm uppercase">
                Designers
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center lg:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                className="lg:hidden hover:bg-gray-100 transition-colors duration-200 h-11 w-11 sm:h-10 sm:w-10" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="h-5 w-5 text-gray-700" /> : <Menu className="h-5 w-5 text-gray-700" />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-gradient-to-b from-white to-gray-50 animate-fade-in">
            <div className="container mx-auto px-4 py-6">
              {/* Mobile Navigation */}
              <nav className="space-y-2">
                <Link 
                  to="/sarees" 
                  className="block py-4 px-5 text-gray-800 hover:bg-white hover:text-primary hover:shadow-sm transition-all duration-300 font-medium tracking-widest text-sm uppercase rounded-lg border border-transparent hover:border-gray-200" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center justify-between">
                    Sarees
                    <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </span>
                </Link>
                <Link 
                  to="/jewelry" 
                  className="block py-4 px-5 text-gray-800 hover:bg-white hover:text-primary hover:shadow-sm transition-all duration-300 font-medium tracking-widest text-sm uppercase rounded-lg border border-transparent hover:border-gray-200" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center justify-between">
                    Jewelry
                    <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </span>
                </Link>
                <Link 
                  to="/designers" 
                  className="block py-4 px-5 text-gray-800 hover:bg-white hover:text-primary hover:shadow-sm transition-all duration-300 font-medium tracking-widest text-sm uppercase rounded-lg border border-transparent hover:border-gray-200" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center justify-between">
                    Designers
                    <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </span>
                </Link>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
