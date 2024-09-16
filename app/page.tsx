"use client";

import Button from "@/app/components/Button";
import { FilePlus } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className={"h-screen flex flex-col justify-center items-center"}>
        <div className={"h-full flex flex-col justify-center items-center gap-3"}>
            <h1 className={"text-3xl font-semibold"}>Welcome to Truss Tool</h1>
            <Button icon={FilePlus} path={"/new"} />
            <p>Create a new project</p>
        </div>

        <footer className={"w-full text-right p-3"}>
            <p>Made by <a href={"https://jedrzej.tech"} className={"text-blue-500"}>jedrzej.tech</a></p>
        </footer>
    </div>
  );
}
