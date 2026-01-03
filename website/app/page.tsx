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



export default function Home() {

  const [visible, setVisible] = useState<boolean>(false);


  const visibleProf = ()=>{
    setVisible(!visible)
    const audio = new Audio("/click2.mp3"); 
    audio.play().catch((err) => console.error("Audio playback failed:", err));
  }
  return (
    <div className=" flex  justify-center items-center flex flex-col">
      <div className=" w-[60%]">
           {/* Navbar */}
 

    
     
      {/* Hero */}
      <div className=" w-full ">
        <Hero/>
      </div>

      <FloatingDockPage/>
      
        




      </div>
   
      
      
      
    </div>
  
  );
}
