
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Product } from '@/data/products';
import { formatPrice } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      seller: product.seller.name,
    });
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="group block rounded-lg border bg-card shadow-sm hover:shadow-md transition-shadow overflow-hidden h-full"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.discount && (
          <Badge variant="destructive" className="absolute top-2 left-2">
            {product.discount}% OFF
          </Badge>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium line-clamp-2 mb-1" title={product.name}>
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-brand-yellow text-brand-yellow" />
            <span className="text-sm ml-1">{product.rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">
            {product.reviewCount} reviews
          </span>
        </div>
        <div className="mb-3">
          <div className="font-bold text-lg">{formatPrice(product.price)}</div>
          {product.originalPrice && (
            <div className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </div>
          )}
        </div>
        <div className="flex justify-between items-center">
          <div className="text-xs text-muted-foreground">
            {product.sold} sold
          </div>
          <Button 
            size="sm"
            onClick={handleAddToCart}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  );
}
