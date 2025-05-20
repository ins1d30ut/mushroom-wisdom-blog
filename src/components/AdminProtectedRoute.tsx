
import { ReactNode, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { supabase } from "@/integrations/supabase/client";

type AdminProtectedRouteProps = {
  children: ReactNode;
};

const AdminProtectedRoute = ({ children }: AdminProtectedRouteProps) => {
  const { user, isLoading } = useAuth();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [isCheckingAdmin, setIsCheckingAdmin] = useState<boolean>(true);

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
        setIsAdmin(false);
      } finally {
        setIsCheckingAdmin(false);
      }
    };

    if (user) {
      checkAdminStatus();
    } else {
      setIsCheckingAdmin(false);
    }
  }, [user]);

  // Show loading state while checking auth or admin status
  if (isLoading || (user && isCheckingAdmin)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  // Redirect to auth page if not logged in
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  // Redirect to home page if logged in but not admin
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  // Render children if authenticated and admin
  return <>{children}</>;
};

export default AdminProtectedRoute;
