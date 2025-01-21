"use client";

import { useRef, useState } from "react";
import Button from "@/app/components/Button";
import Truss from "@/app/components/Truss";
import Dialog from "@/app/components/Dialog";
import { ArrowLeft, Info, DownloadSimple, Plus } from "@phosphor-icons/react";
import { generateId } from "@/app/utils/math";
import list from "@/public/list.json";
import Image from "next/image";

interface TrussType {
  width: number;
  top: number;
  right: number;
  left: number;
  id: number;
}

export default function NewProject() {
  const elementsDialog = useRef<HTMLDialogElement>(null);
  const detailsDialog = useRef<HTMLDialogElement>(null);
  const [trusses, setTrusses] = useState<TrussType[]>([]);
  const [selectedTruss, setSelectedTruss] = useState<TrussType | null>(null);

  function addTruss(newTruss: TrussType, prevTruss: TrussType | null = null) {
    // Added as a sibling
    if(prevTruss) {
      const updatedTruss = {
        ...newTruss,
        left: prevTruss.left + prevTruss.width,
        top: 0,
        id: generateId()
      };
      setTrusses([...trusses, updatedTruss]);
    } else {
      // Initial truss
      const initialTruss = {
        ...newTruss,
        id: generateId()
      };
      setTrusses([...trusses, initialTruss]);
    }
    elementsDialog.current?.close();
  }

  function removeTruss(id: number) {
    setTrusses(trusses.filter(truss => truss.id !== id));
  }

  function group() {
    // Group by width
    const grouped = trusses.reduce((acc: Record<number, number>, truss) => {
      acc[truss.width] = (acc[truss.width] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(grouped).map(([width, count]) => ({
      width: parseInt(width),
      count
    })).sort((a, b) => b.width - a.width); // Sort in descending order
  }

  // TODO
  function onEdgeLeft(truss: TrussType) {
    setSelectedTruss(truss);
    elementsDialog.current?.showModal();
  }
  
  return (
    <>
      <nav className="nav_left gap-3 mb-4">
        <Button title="Go back" icon={ArrowLeft} path="/" />
        <Button title="Show details" icon={Info} onClick={() => detailsDialog.current?.showModal()} />
        <Button title="Download an image of current canvas" icon={DownloadSimple} />
      </nav>

      {/* Display only when there's no truss */}
      {trusses.length === 0 && 
      <div className="flex flex-col flex-1 items-center justify-center gap-3">
        <Button icon={Plus} onClick={() => elementsDialog.current?.showModal()} />
        <p>Start your project by adding the first truss</p>
      </div>}

      <div className="Canvas" style={{position: "relative"}}>
        {trusses.map(truss => {
          return <Truss 
            key={truss.id} 
            width={truss.width} 
            top={truss.top}
            left={truss.left}
            onRemove={() => removeTruss(truss.id)} 
            onEdgeLeft={() => onEdgeLeft(truss)} 
            onEdgeRight={() => {}}
          />
        })}
      </div>

      <Dialog title="Elements" ref={elementsDialog}>
        <div className="grid grid-cols-3">
          {list.items.map(item => (
            <button 
            key={item.id} 
            className="flex m-2" 
            onClick={() => {
              addTruss({width: item.width, top: 0, right: 0, left: 0, id: generateId()}, selectedTruss)
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

      <Dialog title="Details" ref={detailsDialog}>
        <div>
          {group().map(({width, count}) => (
            <p key={width}>{count > 1 ? `${count}x ${width}cm` : `1x ${width}cm`}</p>
          ))}
        </div>
      </Dialog>
    </>
  );
}