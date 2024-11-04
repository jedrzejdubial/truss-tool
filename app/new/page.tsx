"use client";

import Button from "@/app/components/Button";
import { ListNumbers, DownloadSimple, Plus } from "@phosphor-icons/react";

export default function NewProject() {
  return (
    <>
      <nav className="flex gap-3">
        <Button title="Show details" icon={ ListNumbers } />
        <Button title="Download an image of current canvas" icon={ DownloadSimple } />
      </nav>

      <div className="flex flex-col flex-1 items-center justify-center gap-3">
        <Button icon={ Plus } />
        <p>Start your project by adding the first truss</p>
      </div>
    </>
  );
}
