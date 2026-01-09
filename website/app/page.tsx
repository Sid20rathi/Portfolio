"use client"


import { Skiper26 } from "@/components/ui/skiper-ui/skiper26";
import Image from "next/image";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import GridLayout from "@/components/GridLyout";
import { WordRotate } from "@/components/ui/word-rotate";
import { useState } from "react";
import { IconCircleHalf2 } from "@tabler/icons-react";
import { FloatingDockPage } from "@/components/floatnavbar";
import Hero from "@/components/page/hero";
import Navbar from "@/components/page/navbar";
import About from "@/components/page/about";
import Experience from "@/components/page/experience";
import { DockDemo } from "@/components/newdock";
import Project from "@/components/page/project";
import Skills from "@/components/page/skills";
import Activity from "@/components/page/Activity";



export default function Home() {

  const [visible, setVisible] = useState<boolean>(false);


  const visibleProf = ()=>{
    setVisible(!visible)
    const audio = new Audio("/click2.mp3"); 
    audio.play().catch((err) => console.error("Audio playback failed:", err));
  }
  return (
    <div className=" flex  justify-center items-center flex flex-col ">
    
     
      <div className=" w-full border-x-2 border-dashed">
         <div className="w-[100%] flex justify-center items-center border-b-2 border-dashed ">
        <div className="w-[50%] border-x-2 border-dashed pt-28  ">

        </div>

      </div>
        <div className="w-full flex justify-center items-center border-b-2 border-dashed">
          <div className="w-[50%] border-x-2 border-dashed">
            <Hero/>
          </div>

        </div>
        < div className="w-full flex justify-center items-center border-b-2 border-dashed">
          <div className="w-[50%] border-x-2 border-dashed">
            <div className="h-full w-full border-b-2 border-x-2 border-none">
                <div className="font-bold  text-xl  pl-3 uppercase tracking-[0.01em]">
                    <h1>About.</h1>
                </div>
                <div>
                </div>

            </div>
          </div>
        </div>
  
      <div className="w-full flex justify-center items-center border-b-2 border-dashed">
         <div className="w-[50%] border-x-2 border-dashed"> 
        <About/>

      </div>
      </div>
     
      <div className="w-full flex justify-center items-center border-b-2 border-dashed">
        <div className="w-[50%] border-x-2 border-dashed">
          <Experience/>
        </div>
      </div>
      
         <div className="w-full flex justify-center items-center border-b-2 border-dashed">
        <div className="w-[50%] border-x-2 border-dashed">
          <Project/>
        </div>
      </div>
      
      <div className="w-full flex justify-center items-center border-b-2 border-dashed">
        <div className="w-[50%] border-x-2 border-dashed">
          <Skills/>
        </div>
      </div>
      <div className="w-full flex justify-center items-center border-b-2 border-dashed">
        <div className="w-[50%] border-x-2 border-dashed">
          <Activity/>
        </div>
      </div>
      




      </div>
   
      
      
      
    </div>
  
  );
}
