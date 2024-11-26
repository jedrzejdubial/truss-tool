"use client";

import { useUserData } from "@/app/utils/hooks";
import Button from "@/app/components/Button";
import { User, FilePlus } from "@phosphor-icons/react";

export default function Home() {
  const {user} = useUserData();

  return (
    <>
      <nav className="nav_right h-24">
        <Button 
          title="Go to Account center" 
          text={user.name ? `Signed in as ${user.name}` : "Not signed in"} 
          icon={User} path="/account" />
      </nav>

      <main className="flex flex-col flex-1 items-center justify-center gap-3">
        <h1>Welcome to Truss Tool</h1>
        <Button 
          title="Create a new project" 
          text="Create a new project" 
          icon={FilePlus} path="/new" />
      </main>

      <footer className="nav_right items-end h-24">
        <p>Made by <a href="https://github.com/jedrzejdubial" target="_blank">jedrzej</a></p>
      </footer>
    </>
  );
}
