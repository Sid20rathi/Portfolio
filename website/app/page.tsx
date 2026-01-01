"use client"
import { Navbarpage } from "@/components/page/navbar";

import { Skiper26 } from "@/components/ui/skiper-ui/skiper26";
import Image from "next/image";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import GridLayout from "@/components/GridLyout";
import { WordRotate } from "@/components/ui/word-rotate";
import { useState } from "react";
import { IconCircleHalf2 } from "@tabler/icons-react";

export default function Home() {

  const [visible, setVisible] = useState<boolean>(false);


  const visibleProf = ()=>{
    setVisible(!visible)
    const audio = new Audio("/click2.mp3"); 
    audio.play().catch((err) => console.error("Audio playback failed:", err));
  }
  return (
    <div className=" flex  justify-center items-center flex flex-col">
      <div className="h-[100px] w-screen border-b-2 border-dashed  ">
        <div className="h-[100px] w-[60%] m-auto border-x-2 border-dashed">
          <Navbarpage/>
          

        </div>

      </div>
      <div className="h-full w-[60%] m-auto border-x-2 border-dashed">
      <div className=" pl-10 flex flex-row justify-center  ">
        <div>
          <div className="flex flex-col pt-28 "><span className="inline-block text-4xl font-bold  sm:text-5xl xl:text-6xl/none">Hi, I'm Siddhant</span>
        <div>
          <WordRotate
      className="text-2xl pl-10 font-mono tracking-tighter text-neutral-500 dark:text-white hover:text-blue-400 dark:hover:text-blue-400"
      words={["- AI Engineer", "- Full Stack web developer",]}
    />
        </div>
        
        
        </div>

        </div>
        <div className="pl-14 pt-24 ">
          <button onClick={visibleProf}>
            {visible ? <div className="flex flex-row items-end">
              <img
            src="/siddhant.png"
            alt="profile"
            width={120}
            height={120}
            className="rounded-full zoom-in-25 cursor-pointer z-20 shadow-2xl "
          />
          
            </div>:<img
            src="/logo1.png"
            alt="profile"
            width={120}
            height={120}
            className="rounded-full zoom-in-25 cursor-pointer z-20 shadow-2xl "
          />}
          </button>
          
          
        </div>
       



      </div>
       <div className="border-b-2 border-dashed pt-15 "/>
          
        

      </div>
      
      
      
    </div>
  
  );
}
