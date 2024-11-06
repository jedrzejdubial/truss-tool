"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/utils/supabase";
import Button from "@/app/components/Button";
import { ArrowLeft } from "@phosphor-icons/react";
import AccountComponent from "@/app/components/AccountComponent";

export default function Account() {
  const [supabaseUser, setSupabaseUser] = useState<{ picture: string | undefined, name: string | null, email: string | null }>({ picture: undefined, name: null, email: null });

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

  async function logIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google'
    });

    if(error) throw(error);
  }

  function signOut() { // TODO: make this better with refresh etc.
    supabase.auth.signOut();
  }

  return (
    <>
      <nav className="flex items-center gap-6 mb-6">
        <Button title="Go back" icon={ ArrowLeft } path="/" />
        <h1>Account center</h1>
      </nav>


      <div className="flex flex-col w-4/5 p-8">
        { supabaseUser.email == null && 
        <AccountComponent>
          <h1>You are not signed in</h1>
          <button onClick={ logIn } className="account_button">Sign in with Google</button>
        </AccountComponent> }

        { supabaseUser.email != null && 
        <div>
          <AccountComponent>
            <div className="grid grid-cols-[auto_1fr] gap-8">
              <img src={ supabaseUser.picture } width="100" height="100" className="rounded-full" />
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
            <button className="account_button">Delete</button>
          </AccountComponent>
        </div> }
      </div>
    </>
  );
}