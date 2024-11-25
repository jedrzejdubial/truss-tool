import { useState } from "react";
import Button from "@/app/components/Button";
import { ArrowClockwise, TrashSimple } from "@phosphor-icons/react";

export default function Truss({ width }: { width: number }) {
  const [controls, setControls] = useState(false);

  return (
    <div className="Truss" style={{width: width, height: "62px", position: "relative"}}>
      <div className={`absolute top-0 left-0 right-0 flex justify-center gap-1 h-[29px] ${controls ? '' : 'hidden'}`}>
        <Button title="Rotate" icon={ArrowClockwise} width="29px" height="29px" iconSize={15} />
        <Button title="Remove" icon={TrashSimple} width="29px" height="29px" iconSize={15} />
      </div>

      <div
      className="absolute bottom-0 left-0 right-0 flex justify-center items-center bg-[var(--gray)] h-[29px]" 
      onContextMenu={e => {
        e.preventDefault();
        setControls(!controls);
      }}>
        <p>{width}</p>
      </div>
    </div>
  );  
}