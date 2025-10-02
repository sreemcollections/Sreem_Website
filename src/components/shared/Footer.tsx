import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link 
              to="/" 
              className="text-2xl font-playfair font-bold text-primary"
            >
              Sreem
            </Link>
            <p className="text-muted-foreground text-sm">
              Elegance Woven in Tradition. Authentic Indian ethnic fashion with handcrafted sarees and jewelry.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sarees" className="text-muted-foreground hover:text-primary transition-colors">Sarees</Link></li>
              <li><Link to="/jewelry" className="text-muted-foreground hover:text-primary transition-colors">Jewelry</Link></li>
              <li><Link to="/collections" className="text-muted-foreground hover:text-primary transition-colors">Collections</Link></li>
              <li><Link to="/artisans" className="text-muted-foreground hover:text-primary transition-colors">Artisans</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Customer Care</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">Help & FAQ</Link></li>
              <li><Link to="/returns" className="text-muted-foreground hover:text-primary transition-colors">Returns & Exchange</Link></li>
              <li><Link to="/care-guide" className="text-muted-foreground hover:text-primary transition-colors">Care Guide</Link></li>
              <li><Link to="/size-guide" className="text-muted-foreground hover:text-primary transition-colors">Size Guide</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@Sreem.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 Sreem. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/gst" className="hover:text-primary transition-colors">GST Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};