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
    <div className=" flex  justify-center items-center flex flex-col">
      <div className=" w-[50%]  ">
      {/* Hero */}
      <div className=" w-full ">
        <Hero/>
      </div>

      <div> 
        <About/>

      </div>
      <div>
        <Experience/>
      </div>
      
         <div>
        <Project/>
      </div>

      
      <div className="">
        <Skills/>
      </div>
      <div className="pb-80">
        <Activity/>
      </div>
  

      
      
        




      </div>
   
      
      
      
    </div>
  
  );
}
