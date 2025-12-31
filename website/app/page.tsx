"use client"
import { Navbarpage } from "@/components/page/navbar";

import { Skiper26 } from "@/components/ui/skiper-ui/skiper26";
import Image from "next/image";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"

export default function Home() {
  return (
    <div className=" flex  justify-center items-center select-none ">
      <div className="h-screen w-[60%]">
       <div className ="pt-5">
        <Navbarpage />
      </div>
   

      </div>
      
      
    </div>
  
  );
}
