"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/app/utils/supabase";
import Button from "@/app/components/Button";
import { User, FilePlus } from "@phosphor-icons/react";

export default function Home() {
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const getUserData = async() => {
      const { data: { user } } = await supabase.auth.getUser();
      const username = user?.user_metadata.full_name || null;

      setStatus(username ? `Signed in as ${username}` : "Not signed in");
    };

    getUserData();
  }, []);

  return (
    <>
      <nav className="flex justify-end h-24">
        <div className="flex flex-col items-center gap-2">
          <Button icon={ User } path="/account" />
          <p>{ status }</p>
        </div>
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
