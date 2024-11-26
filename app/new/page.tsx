"use client";

import { useRef, useState } from "react";
import Button from "@/app/components/Button";
import Truss from "@/app/components/Truss";
import Dialog from "@/app/components/Dialog";
import { ArrowLeft, ListNumbers, DownloadSimple, Plus } from "@phosphor-icons/react";
import { generateId } from "@/app/utils/math";
import list from "@/public/list.json";
import Image from "next/image";

interface Truss {
  width: number;
  id: number;
}

export default function NewProject() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [trusses, setTrusses] = useState<Truss[]>([]);

  function removeTruss(id: number) {
    setTrusses(trusses.filter(truss => truss.id !== id));
  }
  
  return (
    <>
      <nav className="nav_left gap-3 mb-4">
        <Button title="Go back" icon={ArrowLeft} path="/" />
        <Button title="Show details" icon={ListNumbers} />
        <Button title="Download an image of current canvas" icon={DownloadSimple} />
      </nav>

      {/* Display only when there's no truss */}
      {trusses.length === 0 && 
      <div className="flex flex-col flex-1 items-center justify-center gap-3">
        <Button icon={Plus} onClick={() => dialogRef.current?.showModal()} />
        <p>Start your project by adding the first truss</p>
      </div>}

      <div className="Canvas">
        {trusses.map(truss => {
          return <Truss key={truss.id} width={truss.width} onRemove={() => removeTruss(truss.id)} />
        })}
      </div>

      <Dialog title="Elements" ref={dialogRef}>
        <div className="grid grid-cols-3">
          {list.items.map(item => (
            <button 
            key={item.id} 
            className="flex m-2" 
            onClick={() => {
              setTrusses([...trusses, {width: item.width, id: generateId()}]);
              dialogRef.current?.close();
            }}>
              <Image src={`/truss/${item.width}.jpg`} alt={`Truss ${item.width}`} width={80} height={80} className="rounded-lg" />

              <div className="text-left ml-2">
                <h2>{item.title}</h2>
                <p>{item.width}x29cm</p>
                <p>{item.weight}kg</p>
              </div>              
            </button>
          ))}
        </div>
      </Dialog>
    </>
  );
}