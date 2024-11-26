import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!, 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const functions = {
  signIn: async() => {
    try {
      await supabase.auth.signInWithOAuth({provider: "google"});
    } catch(error) {
      console.error("Error signing in: " + error);
      alert("Failed to sign in. Please try again.");
    }
  },

  signOut: async() => {
    try {
      await supabase.auth.signOut();

      // Refresh the page after signing out
      window.location.reload();
    } catch(error) {
      console.error("Error signing out: " + error);
      alert("Failed to sign out. Please try again.");
    }
  }
};