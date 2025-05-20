
import { supabase } from "@/integrations/supabase/client";

/**
 * Checks if the current user has the admin role
 * @returns Promise<boolean> indicating if user has admin role
 */
export const isUserAdmin = async (): Promise<boolean> => {
  try {
    // First get the session asynchronously
    const { data: sessionData } = await supabase.auth.getSession();
    const userId = sessionData.session?.user.id;
    
    // If no user ID, return false
    if (!userId) return false;
    
    // Query user roles with the retrieved user ID
    const { data } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', userId)
      .eq('role', 'admin')
      .maybeSingle();
    
    return !!data;
  } catch (error) {
    console.error("Error checking admin status:", error);
    return false;
  }
};
