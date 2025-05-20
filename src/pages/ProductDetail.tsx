
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { getProductBySlug, products } from "@/data/productData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug || "");
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Button asChild>
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
    // You would implement actual cart functionality here
  };

  // Find similar products (same category, excluding current product)
  const similarProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 md:pt-32">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <div className="text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-forest-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-forest-600">Products</Link>
            <span className="mx-2">/</span>
            <span>{product.name}</span>
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div>
              <div className="aspect-square overflow-hidden rounded-lg bg-mushroom-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <span className="text-sm text-muted-foreground font-medium bg-forest-100 px-3 py-1 rounded-full">
                {product.category}
              </span>
              <h1 className="text-3xl font-bold mt-4 mb-4 text-forest-900">{product.name}</h1>
              <div className="text-2xl font-bold text-forest-800 mb-6">
                ${product.price.toFixed(2)}
              </div>

              <p className="text-muted-foreground mb-8">{product.description}</p>

              {/* Size info if available */}
              {product.details.size && (
                <div className="mb-6">
                  <h3 className="font-medium mb-1">Size</h3>
                  <p>{product.details.size}</p>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="mb-8">
                <h3 className="font-medium mb-3">Quantity</h3>
                <div className="flex items-center">
                  <button 
                    className="w-10 h-10 border rounded-l-md flex items-center justify-center"
                    onClick={() => setQuantity(q => (q > 1 ? q - 1 : 1))}
                  >
                    -
                  </button>
                  <div className="w-12 h-10 border-t border-b flex items-center justify-center">
                    {quantity}
                  </div>
                  <button 
                    className="w-10 h-10 border rounded-r-md flex items-center justify-center"
                    onClick={() => setQuantity(q => q + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button size="lg" className="w-full mb-8" onClick={handleAddToCart}>
                Add to Cart
              </Button>

              {/* Product Details Accordion */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="benefits">
                  <AccordionTrigger>Benefits</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1">
                      {product.details.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="ingredients">
                  <AccordionTrigger>Ingredients</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1">
                      {product.details.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="usage">
                  <AccordionTrigger>Usage Instructions</AccordionTrigger>
                  <AccordionContent>
                    <p>{product.details.usage}</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Similar Products */}
          {similarProducts.length > 0 && (
            <section className="mt-16 pt-8 border-t">
              <h2 className="text-2xl font-bold mb-8 text-forest-800">You Might Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {similarProducts.map(similar => (
                  <Card key={similar.id} className="overflow-hidden border-0 shadow-md mushroom-card-hover">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={similar.image}
                        alt={similar.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">{similar.name}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{similar.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-forest-800">
                          ${similar.price.toFixed(2)}
                        </span>
                        <Button size="sm" asChild>
                          <Link to={`/products/${similar.slug}`}>View Details</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
