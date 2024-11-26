import { ReactNode } from "react";

export default function AccountWrap({ children }: { children: ReactNode }) {
  return (
    <div className="border-solid border-2 border-[var(--gray)] rounded-xl p-10 mb-10">
      {children}
    </div>
  );
}