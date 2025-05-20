
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LogOut, Menu, User, FileEdit } from "lucide-react";
import { useAuth } from "@/components/AuthProvider";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  // Handle scroll effect
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 20);
    });
  }

  // Check if user has admin role
  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!user) return;
      
      try {
        const { data } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', user.id)
          .eq('role', 'admin')
          .maybeSingle();
        
        setIsAdmin(!!data);
      } catch (error) {
        console.error("Error checking admin status:", error);
      }
    };

    if (user) {
      checkAdminStatus();
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
  ];
  
  const handleSignOut = async () => {
    await signOut();
    toast.success("Signed out successfully");
    navigate("/");
  };

  const handleAuthClick = () => {
    if (user) {
      handleSignOut();
    } else {
      navigate("/auth");
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b py-2 shadow-sm"
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-forest-800 text-xl md:text-2xl font-serif font-bold">
            MyceliMind
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-forest-800 hover:text-forest-600 font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          {isAdmin && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => navigate("/admin/blog/create")}
              className="gap-2"
            >
              <FileEdit className="h-4 w-4" />
              New Post
            </Button>
          )}
          
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {user.email}
              </span>
              <Button onClick={handleSignOut} variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          ) : (
            <Button onClick={() => navigate("/auth")}>
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          )}
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-foreground hover:text-forest-600 text-lg font-medium py-2 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              
              {isAdmin && (
                <Link
                  to="/admin/blog/create"
                  className="flex items-center gap-2 text-foreground hover:text-forest-600 text-lg font-medium py-2 transition-colors"
                >
                  <FileEdit className="h-4 w-4" />
                  New Post
                </Link>
              )}
              
              <Button 
                className="mt-4 w-full" 
                onClick={handleAuthClick}
              >
                {user ? (
                  <>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </>
                ) : (
                  <>
                    <User className="h-4 w-4 mr-2" />
                    Sign In
                  </>
                )}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
