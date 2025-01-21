import { useState } from "react";
import Button from "@/app/components/Button";
import { ArrowClockwise, TrashSimple } from "@phosphor-icons/react";

interface TrussElement {
  width: number;
  top: number;
  left: number;
  onRemove?: () => void;
  onEdgeRight: () => void;
  onEdgeLeft: () => void;
}

export default function Truss({ width, top, left, onRemove, onEdgeRight, onEdgeLeft }: TrussElement) {
  const [controls, setControls] = useState(false);
  const [rotation, setRotation] = useState(0);

  function rotate() {
    setRotation(rotation + 90);
  }

  return (
    <div className="Truss" style={{width: width + 10, height: "62px", position: "absolute", left: left, top: top, rotate: `${rotation}deg`}}>
      <div className={`absolute top-0 left-0 right-0 flex justify-center gap-1 h-[29px] ${controls ? '' : 'hidden'}`}>
        <Button title="Rotate" icon={ArrowClockwise} width="29px" height="29px" iconSize={15} onClick={rotate} />
        <Button title="Remove" icon={TrashSimple} width="29px" height="29px" iconSize={15} onClick={onRemove} />
      </div>

      <div
      className="absolute bottom-0 left-0 right-0 flex bg-[var(--gray)] h-[29px]" 
      onContextMenu={e => {
        e.preventDefault();
        setControls(!controls);
      }}>

        <div 
        className="flex justify-between items-center"
        style={{width: width + 10}}>
          <div className="w-[5px] h-[29px] bg-green-500" onClick={onEdgeRight} />
          <p>{width}</p>
          <div className="w-[5px] h-[29px] bg-green-500" onClick={onEdgeLeft} />
        </div>
        
      </div>
    </div>
  );  
}