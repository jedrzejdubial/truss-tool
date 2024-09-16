"use client";

import { createElement } from "react";
import { Icon } from "@phosphor-icons/react";

export default function Button({ title, icon }: { title?: string, icon: Icon }) {
    return (
        <button className={"w-16 h-16 bg-[var(--gray)] rounded-lg flex justify-center items-center"} title={title}>
            { createElement(icon, { size: 32 }) }
        </button>
    );
}