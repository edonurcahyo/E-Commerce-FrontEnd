
import { useState, useEffect } from 'react';
import { HeroCarousel } from '@/components/home/HeroCarousel';
import { CategoryGrid } from '@/components/home/CategoryGrid';
import { ProductSection } from '@/components/home/ProductSection';
import { getPopularProducts, getFeaturedProducts } from '@/data/products';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch with a timeout
    setTimeout(() => {
      setPopularProducts(getPopularProducts());
      setFeaturedProducts(getFeaturedProducts());
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container px-4 md:px-6 py-4 md:py-6 mx-auto">
          <section className="mb-8">
            <HeroCarousel />
          </section>

          <section className="my-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Shop by Category</h2>
            <CategoryGrid />
          </section>

          {isLoading ? (
            <div className="py-12 flex justify-center">
              <div className="animate-pulse space-y-4">
                <div className="h-8 w-64 bg-muted rounded"></div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="bg-muted rounded h-64"></div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <>
              <ProductSection 
                title="Featured Products" 
                products={featuredProducts}
                viewAllLink="/featured"
              />
              
              <ProductSection 
                title="Popular Products" 
                products={popularProducts}
                viewAllLink="/popular"
              />
            </>
          )}

          <section className="my-12 rounded-lg bg-brand-light p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready for Your Next Project?</h2>
                <p className="text-muted-foreground mb-4">Get all the building materials you need delivered right to your doorstep.</p>
                <button className="bg-brand-green hover:bg-brand-dark text-white px-6 py-2 rounded-md transition-colors">
                  Shop Now
                </button>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <img src="/next project.png" alt="Building materials" className="h-40 w-40 object-contain" />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
