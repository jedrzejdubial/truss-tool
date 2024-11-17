import { useEffect, useState } from "react";
import { supabase } from "@/app/utils/client";

interface User {
  picture: string;
  name: string | null;
  email: string | null;
};

export const useUserData = () => {
  const [user, setUser] = useState<User>({
    picture: '',
    name: null,
    email: null
  });

  useEffect(() => {
    const getUser = async () => {
      const { data: { user: authUser } } = await supabase.auth.getUser();

      if(authUser) {
        setUser({
          picture: authUser?.user_metadata.picture || null,
          name: authUser?.user_metadata.full_name || null,
          email: authUser?.email || null
        });
      }
    };

    getUser();
  }, []);

  return { user, isSignedIn: !!user.email };
}