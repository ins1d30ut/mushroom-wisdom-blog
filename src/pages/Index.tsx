
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getFeaturedPosts } from "@/data/blogData";
import { getFeaturedProducts } from "@/data/productData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const featuredPosts = getFeaturedPosts();
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 bg-gradient-to-b from-mushroom-100 to-transparent">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-forest-800">
                Discover the Healing Power of Medicinal Mushrooms
              </h1>
              <p className="text-lg md:text-xl text-mushroom-800 mb-8 max-w-xl">
                Explore our carefully curated content and high-quality products to harness the ancient wisdom of functional fungi.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/products">Shop Products</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/blog">Read Articles</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843" 
                alt="Forest mushrooms" 
                className="rounded-lg shadow-lg max-h-[500px] object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-forest-800">Featured Products</h2>
            <Button variant="ghost" asChild>
              <Link to="/products">View All</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden border-0 shadow-md mushroom-card-hover">
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-forest-900">{product.name}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-forest-800">${product.price.toFixed(2)}</span>
                    <Button size="sm" asChild>
                      <Link to={`/products/${product.slug}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-forest-800">Latest Articles</h2>
            <Button variant="ghost" asChild>
              <Link to="/blog">View All</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden border-0 shadow-md mushroom-card-hover">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-full">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium bg-forest-100 text-forest-800 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-mushroom-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-forest-800">
            Benefits of Medicinal Mushrooms
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Immune Support",
                description: "Many medicinal mushrooms contain beta-glucans and other compounds that help modulate and strengthen the immune system."
              },
              {
                title: "Cognitive Enhancement",
                description: "Species like Lion's Mane contain compounds that may support nerve growth and improve cognitive function."
              },
              {
                title: "Stress Adaptation",
                description: "Adaptogenic mushrooms like Reishi help the body resist physical, biological, and chemical stressors."
              },
              {
                title: "Energy & Stamina",
                description: "Cordyceps is known for improving oxygen utilization and increasing ATP production, supporting energy and endurance."
              },
              {
                title: "Antioxidant Protection",
                description: "Many mushrooms are rich in antioxidants that help combat oxidative stress and support cellular health."
              },
              {
                title: "Gut Health",
                description: "Prebiotic compounds in medicinal mushrooms support beneficial gut bacteria and digestive health."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-mushroom-800">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-forest-100 to-forest-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-forest-800">Join Our Community</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive content, special offers, and the latest research on medicinal mushrooms.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 border border-muted rounded-md flex-grow"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
