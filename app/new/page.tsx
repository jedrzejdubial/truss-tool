"use client";

import { useRef } from "react";
import Button from "@/app/components/Button";
import Dialog from "@/app/components/Dialog";
import list from "@/public/list.json";
import { ListNumbers, DownloadSimple, Plus } from "@phosphor-icons/react";

export default function Page() {
  const elementsDialog = useRef(null);

  return (
    <div className={"h-screen flex flex-col justify-center items-center"}>
      <nav className={"w-full flex gap-3 p-3"}>
        <Button title={"Show details"} icon={ ListNumbers }/>
        <Button title={"Download an image of current canvas"} icon={ DownloadSimple }/>
      </nav>

      <div className={"h-full flex flex-col justify-center items-center gap-3"}>
        <Button icon={ Plus } onClick={() => elementsDialog.current.showModal()} />
        <p>Start your project by adding the first truss</p>
      </div>

      <Dialog title={"Elements"} ref={elementsDialog}>
        <h1>Hello World</h1>

        <div>
          {list.objects.map(obj => (
            <p>{ obj.word }</p>
          ))}
        </div>
      </Dialog>
    </div>
  );
}
