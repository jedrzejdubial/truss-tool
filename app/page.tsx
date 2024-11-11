"use client";

import { getUserData } from "@/app/utils/hooks/user";
import Button from "@/app/components/Button";
import { User, FilePlus } from "@phosphor-icons/react";

export default function Home() {
  const { user } = getUserData();

  return (
    <>
      <nav className="flex justify-end h-24">
        <div className="flex flex-col items-center gap-2">
          <Button title="Go to Account Center" icon={ User } path="/account" />

          { /* User status */ }
          <p>{ user.name ? `Signed in as ${user.name}` : "Not signed in" }</p>
        </div>
      </nav>

      <main className="flex flex-col flex-1 items-center justify-center gap-3">
        <h1>Welcome to Truss Tool</h1>
        <Button title="Create a new project" icon={ FilePlus } path="/new" />
        <p>Create a new project</p>
      </main>

      <footer className="flex justify-end items-end h-24">
        <p>Made by <a href="https://github.com/jedrzejdubial" target="_blank" className="text-blue-500">jedrzej</a></p>
      </footer>
    </>
  );
}
