
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, Star, Truck, Check, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { getProductById, Product } from '@/data/products';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addItem } = useCart();
  const { toast } = useToast();
  
  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      if (id) {
        const foundProduct = getProductById(id);
        setProduct(foundProduct || null);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addItem({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          seller: product.seller.name
        });
      }
      
      toast({
        title: "Added to cart",
        description: `${quantity} x ${product.name} added to your cart`,
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container px-4 md:px-6 py-8">
          <div className="animate-pulse">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="bg-muted h-80 md:h-96 rounded-lg"></div>
                <div className="flex mt-4 gap-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-muted h-20 w-20 rounded"></div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 space-y-4">
                <div className="h-8 bg-muted rounded w-3/4"></div>
                <div className="h-6 bg-muted rounded w-1/4"></div>
                <div className="h-10 bg-muted rounded w-1/3"></div>
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-4 bg-muted rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container px-4 md:px-6 py-8">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-2">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist or has been removed.</p>
            <Link to="/">
              <Button>Return to Homepage</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container px-4 md:px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-6 text-sm text-muted-foreground">
          <ol className="flex items-center space-x-2">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li>/</li>
            <li><Link to={`/category/${product.category}`} className="hover:text-foreground">Category</Link></li>
            <li>/</li>
            <li className="text-foreground font-medium truncate">{product.name}</li>
          </ol>
        </nav>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Images */}
          <div className="md:w-1/2">
            <div className="bg-white border rounded-lg overflow-hidden">
              <img
                src={product.images[activeImage] || product.image}
                alt={product.name}
                className="w-full h-80 md:h-96 object-contain"
              />
            </div>
            <div className="flex mt-4 gap-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`border rounded h-20 w-20 overflow-hidden ${
                    activeImage === index ? 'border-primary border-2' : 'border-border'
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} view ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-brand-yellow text-brand-yellow" />
                <span className="ml-1 font-medium">{product.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {product.reviewCount} reviews
              </span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">
                {product.sold} sold
              </span>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl md:text-3xl font-bold">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                {product.discount && (
                  <Badge variant="destructive">{product.discount}% OFF</Badge>
                )}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Description</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">Quantity</h3>
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-10 text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => quantity < product.stock && setQuantity(quantity + 1)}
                    disabled={quantity >= product.stock}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                {product.stock} items available
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Truck className="h-4 w-4" />
                <span>Ships from {product.seller.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4" />
                <span>Sold by {product.seller.name} ({product.seller.rating}★)</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="flex-1" onClick={handleAddToCart}>
                Add to Cart
              </Button>
              <Button variant="secondary" className="flex-1">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Buy Now
              </Button>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="details">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>
            <TabsContent value="details">
              <Card className="p-6">
                <h3 className="font-bold mb-4">Product Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Specifications</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Category</span>
                        <span>{product.category}</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Stock</span>
                        <span>{product.stock} items</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-muted-foreground">Sold</span>
                        <span>{product.sold} items</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Seller Information</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Name</span>
                        <span>{product.seller.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Rating</span>
                        <span>{product.seller.rating}★</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Location</span>
                        <span>{product.seller.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="reviews">
              <Card className="p-6">
                <h3 className="font-bold mb-4">Customer Reviews</h3>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl font-bold">{product.rating}</div>
                  <div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating)
                              ? "fill-brand-yellow text-brand-yellow"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Based on {product.reviewCount} reviews
                    </div>
                  </div>
                </div>
                <div className="text-center py-8 text-muted-foreground">
                  <p>Reviews will be displayed here</p>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="shipping">
              <Card className="p-6">
                <h3 className="font-bold mb-4">Shipping Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Shipping Options</h4>
                    <ul className="space-y-3">
                      <li className="flex justify-between p-3 border rounded-md">
                        <div>
                          <div className="font-medium">Regular Delivery</div>
                          <div className="text-sm text-muted-foreground">
                            Estimated arrival: 3-5 business days
                          </div>
                        </div>
                        <div className="font-medium">Rp15.000</div>
                      </li>
                      <li className="flex justify-between p-3 border rounded-md">
                        <div>
                          <div className="font-medium">Express Delivery</div>
                          <div className="text-sm text-muted-foreground">
                            Estimated arrival: 1-2 business days
                          </div>
                        </div>
                        <div className="font-medium">Rp30.000</div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Shipping Policy</h4>
                    <p className="text-muted-foreground">
                      Orders are typically processed and shipped within 24 hours on business days.
                      Shipping times may vary based on location and availability.
                    </p>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
