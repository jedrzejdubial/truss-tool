import React, { ForwardedRef, forwardRef } from "react";
import Button from "@/app/components/Button";
import { X } from "@phosphor-icons/react";

interface DialogProps {
    title: string,
    children: React.ReactNode;
}

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  ({ title, children }, ref: ForwardedRef<HTMLDialogElement>) => {
    return (
      <dialog ref={ ref } className={"w-1/2 h-2/3 bg-[var(--gray)] text-white rounded-xl p-4"}>
        <div className={"flex justify-between"}>
          <h1>{ title }</h1>
          <Button title={"Close menu"} icon={ X } onClick={() => ref?.current.close()} />
        </div>

        { children }
      </dialog>
    );
  }
);

Dialog.displayName = "Dialog";

export default Dialog;
