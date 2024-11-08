"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/utils/supabase";
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
  const [supabaseUser, setSupabaseUser] = useState<UserState>({
    picture: "", 
    name: null, 
    email: null
  });

  useEffect(() => {
    const getUserData = async() => {
      const { data: { user } } = await supabase.auth.getUser();
      setSupabaseUser({
        picture: user?.user_metadata.picture || null,
        name: user?.user_metadata.full_name || null,
        email: user?.email || null
      });
    };

    getUserData();
  }, []);

  async function signIn() {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google'
      });

      if(error) throw error;
    } catch(error) {
      console.error("Error signing in: " + error);
      alert("Failed to sign in. Please try again.");
    }
  }

  async function signOut() {
    try {
      await supabase.auth.signOut();
      window.location.reload();
    } catch(error) {
      console.error("Error signing out:" + error);
      alert("Failed to sign out. Please try again.");
    }
  }

  async function deleteAccount() {
    try {
      // Prompt user to confirm their choice
      if(!window.confirm("Are you sure you want to delete your account? You will lose access to all of your projects.")) return;

      const { data: { user } } = await supabase.auth.getUser();
      if(!user) throw new Error("No user found");

      /* Delete user data from any other tables first if needed
      await supabase.from('your_table').delete().eq('user_id', user.id);
      TODO after actually implementing projects functionality */

      const { error } = await supabase.functions.invoke("delete-user");
      if(error) throw error;

      await signOut();
    } catch(error) {
      console.error("Error deleting account: " + error);
      alert("Failed to delete your account. Please try again.");
    }
  }

  return (
    <>
      <nav className="flex items-center gap-6 mb-6">
        <Button title="Go back" icon={ ArrowLeft } path="/" />
        <h1>Account Center</h1>
      </nav>


      <div className="flex flex-col w-4/5 p-8">
        { supabaseUser.email == null && 
        <AccountComponent>
          <h1>You are not signed in</h1>
          <button onClick={ signIn } className="account_button">Sign in with Google</button>
        </AccountComponent> }

        { supabaseUser.email != null && 
        <div>
          <AccountComponent>
            <div className="grid grid-cols-[auto_1fr] gap-8">
              <Image src={ supabaseUser.picture } alt="Profile picture" width={100} height={100} className="rounded-full" />
              <div className="grid">
                <h1>{ supabaseUser.name }</h1>
                <h2>{ supabaseUser.email }</h2>
                <p>Account created with Google</p>
              </div>
            </div>
          </AccountComponent>

          <AccountComponent>
            <h1>Sign out of your account</h1>
            <button onClick={ signOut } className="account_button">Sign out</button>
          </AccountComponent>

          <AccountComponent> {/* TODO: make this work */}
            <h1>Delete your account</h1>
            <button onClick={ deleteAccount } className="account_button">Delete</button>
          </AccountComponent>
        </div> }
      </div>
    </>
  );
}