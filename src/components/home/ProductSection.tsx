
import { Product } from '@/data/products';
import { ProductCard } from '@/components/product/ProductCard';
import { Link } from 'react-router-dom';

interface ProductSectionProps {
  title: string;
  products: Product[];
  viewAllLink?: string;
}

export function ProductSection({ title, products, viewAllLink }: ProductSectionProps) {
  return (
    <section className="my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
        {viewAllLink && (
          <Link to={viewAllLink} className="text-primary hover:underline text-sm">
            View All
          </Link>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
