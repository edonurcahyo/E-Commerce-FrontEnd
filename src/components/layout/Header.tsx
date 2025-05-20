
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { Badge } from '@/components/ui/badge';

export function Header() {
  const { user, isAuthenticated } = useAuth();
  const { itemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container px-4 md:px-6 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-brand-dark">
            <span className="text-brand-green">CV.</span>Agung
          </Link>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 mx-6">
          <form onSubmit={handleSearch} className="w-full max-w-xl relative">
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full pl-4 pr-10 py-2 rounded-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit" 
              size="icon" 
              variant="ghost" 
              className="absolute right-0 top-0 h-full"
            >
              <Search className="h-5 w-5" />
            </Button>
          </form>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <Badge variant="destructive" className="absolute -top-2 -right-2 min-w-[1.25rem] h-5 flex items-center justify-center">
                  {itemCount}
                </Badge>
              )}
            </Button>
          </Link>

          {isAuthenticated ? (
            <Link to="/profile">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Search - Always visible on mobile */}
      <div className="md:hidden p-3 border-t">
        <form onSubmit={handleSearch} className="flex">
          <Input
            type="search"
            placeholder="Search products..."
            className="w-full rounded-r-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit" size="sm" className="rounded-l-none">
            <Search className="h-4 w-4" />
          </Button>
        </form>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col divide-y">
            <Link to="/cart" className="px-4 py-3 flex justify-between items-center">
              <span>Cart</span>
              {itemCount > 0 && (
                <Badge variant="destructive">{itemCount}</Badge>
              )}
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link to="/profile" className="px-4 py-3">Profile</Link>
                <Link to="/orders" className="px-4 py-3">My Orders</Link>
                <Link to="/wishlist" className="px-4 py-3">Wishlist</Link>
              </>
            ) : (
              <>
                <Link to="/login" className="px-4 py-3">Login</Link>
                <Link to="/register" className="px-4 py-3">Register</Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
