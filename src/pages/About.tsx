
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* About Header */}
      <section className="pt-24 md:pt-32 pb-8 md:pb-16 bg-gradient-to-b from-mushroom-100 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-forest-800">
            About MyceliMind
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A community dedicated to exploring the healing potential of medicinal mushrooms 
            through education and carefully curated products.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843" 
                alt="Forest with mushrooms" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-forest-800">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                MyceliMind began with a simple fascination: how could organisms so small and 
                often overlooked hold such powerful healing secrets? Our founder, after experiencing 
                the transformative benefits of medicinal mushrooms firsthand, became dedicated to 
                sharing this ancient wisdom with others.
              </p>
              <p className="text-muted-foreground mb-4">
                What started as a personal blog documenting research and experiences has grown into 
                a community of enthusiasts, scientists, foragers, and wellness practitioners all 
                united by their interest in the fascinating world of fungi.
              </p>
              <p className="text-muted-foreground">
                Today, we're committed to providing evidence-based information alongside carefully 
                sourced products that meet our strict quality standards. We believe in the power of 
                education, sustainability, and making the benefits of medicinal mushrooms accessible 
                to everyone on their wellness journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 bg-forest-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-forest-800">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality & Purity",
                description: "We source only the highest quality mushrooms, tested for purity and potency. Every product meets rigorous standards before reaching our customers."
              },
              {
                title: "Education & Transparency",
                description: "We believe in sharing knowledge openly and honestly, empowering our community with evidence-based information about medicinal mushrooms."
              },
              {
                title: "Sustainability",
                description: "Our commitment to the environment means responsible sourcing, minimal packaging, and supporting regenerative agricultural practices."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-forest-800">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-forest-800">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Rivera",
                role: "Founder & Mycologist",
                bio: "With over 15 years of experience studying medicinal fungi, Alex leads our research and product development.",
                image: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
              },
              {
                name: "Dr. Sarah Chen",
                role: "Scientific Advisor",
                bio: "A published researcher specializing in the therapeutic applications of functional mushrooms in modern healthcare.",
                image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
              },
              {
                name: "Michael Oaks",
                role: "Sustainability Director",
                bio: "Ensures our sourcing and operations maintain the highest environmental standards while supporting local communities.",
                image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-forest-800">{member.name}</h3>
                  <p className="text-forest-600 font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-forest-100 to-forest-50 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-forest-800">Join Our Mushroom Journey</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're new to medicinal mushrooms or a seasoned enthusiast, we'd love to 
            have you as part of our growing community.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/products">Explore Our Products</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/blog">Read Our Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
