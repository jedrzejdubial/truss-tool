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
      <dialog ref={ ref } className={"w-3/5 h-3/4 bg-[var(--gray)] text-white rounded-xl p-4"}>
        <div className={"flex justify-between"}>
          <h1 className={"text-3xl font-semibold"}>{ title }</h1>
          <Button title={"Close menu"} icon={ X } onClick={() => ref.current.close()} />
        </div>

        { children }
      </dialog>
    );
  }
);

Dialog.displayName = "Dialog";

export default Dialog;
