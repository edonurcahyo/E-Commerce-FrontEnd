
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product/ProductCard';
import { searchProducts, Product } from '@/data/products';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const results = searchProducts(query);
      setProducts(results);
      setIsLoading(false);
    }, 500);
  }, [query]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container px-4 md:px-6 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">
            Search Results for "{query}"
          </h1>
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Mobile Filter Button */}
          <div className="md:hidden mb-4">
            <Button variant="outline" className="w-full">
              <Filter className="h-4 w-4 mr-2" />
              Filter Results
            </Button>
          </div>

          {/* Sidebar Filters (Hidden on Mobile) */}
          <div className="hidden md:block md:w-1/4 lg:w-1/5">
            <div className="bg-card border rounded-lg p-4 sticky top-20">
              <h2 className="font-bold mb-4">Filters</h2>
              
              <div className="mb-4">
                <h3 className="text-sm font-medium mb-2">Price Range</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="price1" className="mr-2" />
                    <label htmlFor="price1" className="text-sm">Under Rp100.000</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="price2" className="mr-2" />
                    <label htmlFor="price2" className="text-sm">Rp100.000 - Rp500.000</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="price3" className="mr-2" />
                    <label htmlFor="price3" className="text-sm">Rp500.000 - Rp1.000.000</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="price4" className="mr-2" />
                    <label htmlFor="price4" className="text-sm">Above Rp1.000.000</label>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="text-sm font-medium mb-2">Rating</h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center">
                      <input type="checkbox" id={`rating${rating}`} className="mr-2" />
                      <label htmlFor={`rating${rating}`} className="text-sm">
                        {rating}★ & above
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button className="w-full">Apply Filters</Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="md:w-3/4 lg:w-4/5">
            {isLoading ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div key={index} className="animate-pulse">
                    <div className="bg-muted rounded-lg aspect-square mb-2"></div>
                    <div className="h-4 bg-muted rounded mb-2"></div>
                    <div className="h-4 bg-muted rounded w-2/3"></div>
                  </div>
                ))}
              </div>
            ) : products.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h2 className="text-xl font-bold mb-2">No Products Found</h2>
                <p className="text-muted-foreground mb-6">
                  We couldn't find any products matching your search.
                </p>
                <Button asChild>
                  <a href="/">Browse All Products</a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchResults;
