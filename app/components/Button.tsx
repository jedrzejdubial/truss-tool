"use client";

import { Icon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { createElement } from "react";

interface ButtonProps {
  title?: string,
  text?: string,
  icon: Icon,
  onClick?: () => void,
  path?: string,
  width?: string,
  height?: string,
  iconSize?: number;
}

export default function Button(
  { title, text, icon, onClick, path, width = "4rem", height = "4rem", iconSize = 32 }: ButtonProps) {
  // Utilities
  const router = useRouter();
  const handleClick = () => onClick ? onClick() : path ? router.push(path) : undefined;

  return (
    <div className="flex flex-col items-center gap-2 w-fit">
      <button
      className="bg-[var(--gray)] hover:bg-[#424242] rounded-lg flex justify-center items-center"
      style={{ width: width, height: height }}
      title={ title }
      onClick={ handleClick }>
        { createElement(icon, { size: iconSize }) }
      </button>

      { text && 
      <p>{ text }</p> }
    </div>
  );
}
