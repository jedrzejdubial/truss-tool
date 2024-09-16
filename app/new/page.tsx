"use client";

import Button from "@/app/components/Button";
import { ListNumbers, DownloadSimple, Plus } from "@phosphor-icons/react";

export default function Page() {
    return (
        <div className={"h-screen flex flex-col justify-center items-center"}>
            <nav className={"w-full flex gap-3 p-3"}>
                <Button title={"Show details"} icon={ListNumbers} />
                <Button title={"Download an image of current canvas"} icon={DownloadSimple} />
            </nav>

            <div className={"h-full flex flex-col justify-center items-center gap-3"}>
                <Button icon={Plus} path={"/new"} />
                <p>Start your project by adding the first truss</p>
            </div>
        </div>
    );
}