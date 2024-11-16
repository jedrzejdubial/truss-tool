import { forwardRef, ReactNode, Ref, RefObject } from "react";
import Button from "@/app/components/Button";
import { X } from "@phosphor-icons/react";

const Dialog = forwardRef(({ title, children }: { title: string, children?: ReactNode }, ref: Ref<HTMLDialogElement>) => {
  return (
    <dialog ref={ ref } className="bg-[var(--gray)] text-white p-5 w-1/2 h-3/4 rounded-2xl no-scrollbar">
      <div className="flex justify-between">
        <h1>{ title }</h1>
        <Button title="Go back" icon={ X } onClick={ () => (ref as RefObject<HTMLDialogElement>).current?.close() } />
      </div>

      { children }
    </dialog>
  );  
});

Dialog.displayName = "Dialog";

export default Dialog;