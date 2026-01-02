"use client"
import { Navbarpage } from "@/components/page/navbar";

import { Skiper26 } from "@/components/ui/skiper-ui/skiper26";
import Image from "next/image";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import GridLayout from "@/components/GridLyout";
import { WordRotate } from "@/components/ui/word-rotate";
import { useState } from "react";
import { IconCircleHalf2 } from "@tabler/icons-react";
import { FloatingDockPage } from "@/components/floatnavbar";

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
          <FloatingDockPage/>
          

        </div>

      </div>
      <div className="h-full w-[60%] m-auto border-x-2 border-dashed">
      <div className=" pl-10 flex flex-row justify-between md:justify-center lg:justify-center xl:justify-center">
        <div>
          <div className="flex flex-col pt-28 "><span className="inline-block text-3xl font-bold  sm:text-4xl md:text-5xl xl:text-6xl/none">Hi, I'm Siddhant</span>
        <div className="pb-10 ">
          <WordRotate
      className=" text-sm md:text-xl xl:text-2xl fixed font-mono tracking-tighter text-neutral-500 dark:text-white hover:text-blue-400 dark:hover:text-blue-400"
      words={["- AI Engineer", "- Full Stack web developer",]}
    />
        </div>
        
        
        </div>

        </div>
        <div className="pt-28 pr-2 md:pl-7 md:pb-5 lg">
          <button onClick={visibleProf}>
            {visible ? <div className="flex flex-row items-center">
              <img
            src="/siddhant.png"
            alt="profile"
            width={120}
            height={120}
            className="rounded-full hidden md:block size-16 md:size-20 lg:size-28 xl:size-28 cursor-pointer z-20 shadow-2xl "
          />
          
            </div>:<img
            src="/logo1.png"
            alt="profile"
            width={120}
            height={120}
            className="rounded-full hidden md:block size-16 md:size-20 lg:size-28 xl:size-28 cursor-pointer z-20 shadow-2xl "
          />}
          </button>
          
          
        </div>
       



      </div>
       <div className="border-b-2 border-dashed pt-15 "/>
          
        

      </div>
      
      
      
    </div>
  
  );
}
