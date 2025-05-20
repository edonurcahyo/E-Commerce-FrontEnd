
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-16">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">CV. Agung</h3>
            <p className="text-muted-foreground mb-4">
              Your trusted partner for building materials since 1995
            </p>
            <div className="flex items-center gap-4">
              {/* Social Media Icons would go here */}
              <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">FB</span>
              <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">IG</span>
              <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">TW</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-md mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
              <li><Link to="/news" className="text-muted-foreground hover:text-foreground">News & Blog</Link></li>
              <li><Link to="/partnership" className="text-muted-foreground hover:text-foreground">Partnership</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-md mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-muted-foreground hover:text-foreground">Help Center</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-foreground">FAQ</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-muted-foreground hover:text-foreground">Shipping Information</Link></li>
              <li><Link to="/returns" className="text-muted-foreground hover:text-foreground">Returns & Exchanges</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-md mb-4">Download Our App</h3>
            <p className="text-muted-foreground mb-4">Get exclusive offers and shop on the go</p>
            <div className="flex flex-col space-y-2">
              <button className="bg-foreground text-background px-4 py-2 rounded-md flex items-center justify-center">
                Google Play
              </button>
              <button className="bg-foreground text-background px-4 py-2 rounded-md flex items-center justify-center">
                App Store
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} CV. Agung. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/terms" className="text-muted-foreground hover:text-foreground text-sm">Terms of Service</Link>
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground text-sm">Privacy Policy</Link>
              <Link to="/cookies" className="text-muted-foreground hover:text-foreground text-sm">Cookies Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
