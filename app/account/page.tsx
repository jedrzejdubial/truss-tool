"use client";

import { getUserData } from "@/app/utils/hooks/user";
import Button from "@/app/components/Button";
import { ArrowLeft } from "@phosphor-icons/react";
import AccountWrap from "@/app/account/AccountWrap";
import { functions } from "@/app/utils/supabase";
import Image from "next/image";

export default function Account() {
  const { user, isSignedIn } = getUserData();

  return (
    <>
      <nav className="flex items-center gap-6 mb-6">
        <Button title="Go back" icon={ ArrowLeft } path="/" />
        <h1>Account Center</h1>
      </nav>

      <main className="flex flex-col w-4/5 p-8">
        { /* Display this if user is not signed in */ }
        { !isSignedIn && <AccountWrap>
          <h1>You are not signed in</h1>
          <button onClick={ functions.signIn } className="account_button">Sign in with Google</button>
        </AccountWrap> }

        { /* Display this if user is signed in */ }
        { isSignedIn && <div>
          <AccountWrap>
            <div className="grid grid-cols-[auto_1fr] gap-8">
              <Image src={ user.picture } alt="Profile picture" width={ 100 } height={ 100 } className="rounded-full" />
              <div className="grid">
                <h1>{ user.name }</h1>
                <h2>{ user.email }</h2>
                <p>Account created with Google</p>
              </div>
            </div>
          </AccountWrap>

          <AccountWrap>
            <h1>Sign out of your account</h1>
            <button onClick={ functions.signOut } className="account_button">Sign out</button>
          </AccountWrap>

          <AccountWrap>
            <h1>Delete your account</h1>
            <p>If you want to delete your account, please contact jedrzejdubial@proton.me</p>
          </AccountWrap>
        </div> }
      </main>
    </>
  );
}