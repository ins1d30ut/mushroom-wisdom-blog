
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/data/blogData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  const filteredPosts = filter 
    ? blogPosts.filter(post => post.category === filter)
    : blogPosts;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Blog Header */}
      <section className="pt-24 md:pt-32 pb-8 md:pb-12 bg-gradient-to-b from-mushroom-100 to-transparent">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-forest-800">
            Medicinal Mushroom Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore our collection of articles about medicinal mushrooms, their benefits, 
            preparation methods, and the latest research in the field.
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

      {/* Blog Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <Card key={post.id} className="overflow-hidden border-0 shadow-md mushroom-card-hover">
                <div className="h-48 overflow-hidden">
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
                  <h2 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h2>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      {post.date} · {post.author}
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
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

export default Blog;
