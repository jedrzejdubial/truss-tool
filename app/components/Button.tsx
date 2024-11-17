"use client";

import { Icon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { createElement } from "react";

export default function Button({ title, text, icon, onClick, path }: { title?: string, text?: string, icon: Icon, onClick?: () => void, path?: string }) {
  const router = useRouter();

  const handleClick = () => onClick ? onClick() : path ? router.push(path) : undefined;

  return (
    <div className="flex flex-col items-center gap-2 w-fit">
      <button
      className="w-16 h-16 bg-[var(--gray)] hover:bg-[#424242] rounded-lg flex justify-center items-center"
      title={ title }
      onClick={ handleClick }>
        { createElement(icon, { size: 32 }) }
      </button>

      { text && 
      <p>{ text }</p> }
    </div>
  );
}
