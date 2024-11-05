"use client";

import { supabase } from "@/app/utils/supabase";
import Button from "@/app/components/Button";
import { User, FilePlus } from "@phosphor-icons/react";

export default function Home() {
  async function login() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google'
    });
    if(error) throw(error);
  };

  return (
    <>
      <nav className="flex justify-end h-24">
        <Button title="Sign in with Google" icon={ User } onClick={ login } />
      </nav>

      <div className="flex flex-col flex-1 items-center justify-center gap-3">
        <h1>Welcome to Truss Tool</h1>
        <Button icon={ FilePlus } path="/new" />
        <p>Create a new project</p>
      </div>

      <footer className="flex justify-end items-end h-24">
        <p>Made by <a href="https://github.com/jedrzejdubial" target="_blank" className="text-blue-500">jedrzej</a></p>
      </footer>
    </>
  );
}
