
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-footer-pattern border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-forest-800 mb-4">MyceliMind</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Exploring the healing potential of medicinal mushrooms through education, 
              research, and carefully curated products.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <div className="h-6 w-6 rounded-full bg-forest-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-forest-800" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="text-sm">contact@mycelimind.com</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="h-6 w-6 rounded-full bg-forest-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-forest-800" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm">123 Forest Grove, Mycelia Valley, CA 94123</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Blog", "Products", "About", "Contact", "FAQ"].map((item) => (
                <li key={item}>
                  <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-muted-foreground hover:text-forest-700 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Get updates on new articles, products, and special offers.
            </p>
            <div className="flex flex-col gap-2">
              <Input placeholder="Your email address" type="email" />
              <Button size="sm">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MyceliMind. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {/* Replace Link components with regular anchor tags for these links since they're not yet implemented */}
            <a href="#" className="text-sm text-muted-foreground hover:text-forest-700">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-forest-700">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
