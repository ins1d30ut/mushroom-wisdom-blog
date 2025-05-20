
import { supabase } from "@/integrations/supabase/client";

/**
 * Checks if the current user has the admin role
 * @returns Promise<boolean> indicating if user has admin role
 */
export const isUserAdmin = async (): Promise<boolean> => {
  try {
    const { data } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', supabase.auth.getSession().then(({ data }) => data.session?.user.id))
      .eq('role', 'admin')
      .maybeSingle();
    
    return !!data;
  } catch (error) {
    console.error("Error checking admin status:", error);
    return false;
  }
};
