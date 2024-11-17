import { useState } from "react";
import Button from "@/app/components/Button";
import { ArrowClockwise, TrashSimple } from "@phosphor-icons/react";

export default function Truss({ width }: { width: number }) {
  const [isControlsVisible, setIsControlsVisible] = useState(false);

  return (
    <div className="Truss">
      <div style={{ width: width }}>
        { isControlsVisible && <div className="flex justify-center gap-2">
          <Button title="Rotate" icon={ ArrowClockwise } width="29px" height="29px" iconSize={ 15 } />
          <Button title="Remove" icon={ TrashSimple } width="29px" height="29px" iconSize={ 15 } />
        </div> }

        <div
          className="flex justify-center items-center bg-[var(--gray)] h-[29px]" 
          onContextMenu={ e => { e.preventDefault(); setIsControlsVisible(!isControlsVisible) } }>
            <p>{ width }</p>
        </div>
      </div> 
    </div>
  );  
}