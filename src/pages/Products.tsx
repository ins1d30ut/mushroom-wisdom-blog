
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data/productData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Products = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const categories = Array.from(new Set(products.map(product => product.category)));

  const filteredProducts = filter 
    ? products.filter(product => product.category === filter)
    : products;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Products Header */}
      <section className="pt-24 md:pt-32 pb-8 md:pb-12 bg-gradient-to-b from-mushroom-100 to-transparent">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-forest-800">
            Medicinal Mushroom Products
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover our carefully curated selection of high-quality mushroom supplements, 
            tinctures, and specialty products for your wellness journey.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={filter === null ? "default" : "outline"} 
              onClick={() => setFilter(null)}
              className="rounded-full"
              size="sm"
            >
              All
            </Button>
            {categories.map(category => (
              <Button 
                key={category} 
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="rounded-full"
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <Card key={product.id} className="overflow-hidden border-0 shadow-md mushroom-card-hover">
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-medium bg-forest-100 text-forest-800 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-forest-800">
                      ${product.price.toFixed(2)}
                    </span>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link to={`/products/${product.slug}`}>Details</Link>
                      </Button>
                      <Button size="sm">Add to Cart</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
