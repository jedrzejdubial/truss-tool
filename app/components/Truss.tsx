import { useState } from "react";
import Button from "@/app/components/Button";
import { ArrowClockwise, TrashSimple } from "@phosphor-icons/react";

export default function Truss({ width, onRemove }: { width: number, onRemove?: () => void }) {
  const [controls, setControls] = useState(false);
  const [rotation, setRotation] = useState(0);

  function rotate() {
    setRotation(rotation + 90);
  }

  return (
    <div className="Truss" style={{width: width, height: "62px", position: "relative", rotate: `${rotation}deg`}}>
      <div className={`absolute top-0 left-0 right-0 flex justify-center gap-1 h-[29px] ${controls ? '' : 'hidden'}`}>
        <Button title="Rotate" icon={ArrowClockwise} width="29px" height="29px" iconSize={15} onClick={rotate} />
        <Button title="Remove" icon={TrashSimple} width="29px" height="29px" iconSize={15} onClick={onRemove} />
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