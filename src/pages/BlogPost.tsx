
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getPostBySlug, blogPosts } from "@/data/blogData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Markdown from "react-markdown";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug || "");
  
  if (!post) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Button asChild>
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  // Find related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Featured Image */}
      <div className="w-full h-[40vh] md:h-[50vh] relative">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center container px-4">
          <div className="text-center">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-forest-700 text-white text-sm rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-white/90 text-sm">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <Markdown>{post.content}</Markdown>
          </div>
          
          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-wrap gap-2">
              <span className="text-muted-foreground">Share this article:</span>
              {["Twitter", "Facebook", "LinkedIn", "Email"].map((platform) => (
                <Button key={platform} variant="outline" size="sm" className="rounded-full">
                  {platform}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="bg-mushroom-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-forest-800">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <div key={relatedPost.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Link to={`/blog/${relatedPost.slug}`}>
                    <div className="h-48 overflow-hidden">
                      <img
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-2">
                      <Link to={`/blog/${relatedPost.slug}`} className="hover:text-forest-600">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="text-sm text-muted-foreground">
                      {relatedPost.date} · {relatedPost.readTime}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;
