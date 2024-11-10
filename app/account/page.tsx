"use client";

import { useEffect, useState } from "react";
import { functions, supabase } from "@/app/utils/supabase";
import Button from "@/app/components/Button";
import { ArrowLeft } from "@phosphor-icons/react";
import AccountComponent from "@/app/account/AccountComponent";
import Image from "next/image";

interface UserState {
  picture: string;
  name: string | null;
  email: string | null;
};

export default function Account() {
  const [user, setUser] = useState<UserState>({
    picture: "", 
    name: null, 
    email: null
  });

  useEffect(() => {
    const getUserData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser({
        picture: user?.user_metadata.picture || null,
        name: user?.user_metadata.full_name || null,
        email: user?.email || null
      });
    };

    getUserData();
  }, []);

  return (
    <>
      <nav className="flex items-center gap-6 mb-6">
        <Button title="Go back" icon={ ArrowLeft } path="/" />
        <h1>Account Center</h1>
      </nav>


      <div className="flex flex-col w-4/5 p-8">
        { user.email == null && 
        <AccountComponent>
          <h1>You are not signed in</h1>
          <button onClick={ functions.signIn } className="account_button">Sign in with Google</button>
        </AccountComponent> }

        { user.email != null && 
        <div>
          <AccountComponent>
            <div className="grid grid-cols-[auto_1fr] gap-8">
              <Image src={ user.picture } alt="Profile picture" width={100} height={100} className="rounded-full" />
              <div className="grid">
                <h1>{ user.name }</h1>
                <h2>{ user.email }</h2>
                <p>Account created with Google</p>
              </div>
            </div>
          </AccountComponent>

          <AccountComponent>
            <h1>Sign out of your account</h1>
            <button onClick={ functions.signOut } className="account_button">Sign out</button>
          </AccountComponent>

          <AccountComponent>
            <h1>Delete your account</h1>
            <p>If you want to delete your account, please contact jedrzejdubial@proton.me</p>
          </AccountComponent>
        </div> }
      </div>
    </>
  );
}