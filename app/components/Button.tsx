"use client";

import { createElement } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@phosphor-icons/react";

export default function Button({ title, icon, action, path }: { title?: string, icon: Icon, action?: () => void, path?: string }) {
    const router = useRouter();

    const handleClick = () => action ? action() : path ? router.push(path) : undefined;

    return (
        <button
          className={"w-16 h-16 bg-[var(--gray)] hover:bg-[#424242] rounded-lg flex justify-center items-center"}
          title={title}
          onClick={handleClick}>
            {createElement(icon, {size: 32})}
        </button>
    );
}