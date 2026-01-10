import { useState } from "react";
import { WordRotate } from "../ui/word-rotate";
import Image from "next/image";

export default function Hero() {
  const [visible, setVisible] = useState<boolean>(false);
  const visibleProf = () => {
    setVisible(!visible)
    const audio = new Audio("/click2.mp3");
    audio.play().catch((err) => console.error("Audio playback failed:", err));
  }
  return (
    <div className=" w-full pt-10 ">
          
            {/* <Hero/> */}
    
            <section id="hero">
              <div className ="mx-auto w-full max-w-3xl space-y-8 pl-3 pr-3 ">
                <div className=" flex justify-between">
                  <div className="flex-col flex flex-1 space-y-1.5">
                    <div className="flex">
                      <span className="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none" >Hi, I'm Siddhant</span>
                      </div>
                      <div className="flex">
                        <span className="inline-block max-w-[600px] md:text-lg text-muted-foreground">Building intelligent AI agents that remember and reason.</span>
                        </div>
                        <div><a className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline transition-all mt-2 mb-16" href="mailto:siddhant02rathi@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="size-4">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>siddhant02rathi@gmail.com</a></div></div>
                        <div className="pr-12 pt-3"><span className=" flex rounded-full size-32 sm:size-30 flex-shrink-0 ">
                         <button onClick={visibleProf}>
                                       {visible ? <div className="">
                                         <Image
                                           src="/siddhant.png"
                                           alt="profile"
                                           width={140}
                                           draggable={false}
                                           height={140}
                                           className="rounded-full  cursor-pointer z-50   hover:shadow-2xl shadow-lg transition-shadow duration-500  "
                                         />
                         
                                       </div> : <Image
                                         src="/logo1.png"
                                         alt="profile"
                                         width={140}
                                         height={140}
                                         draggable={false}
                                         className="rounded-full  cursor-pointer z-50. shadow-lg  hover:shadow-2xl transition-shadow duration-500 "
                                       />}
                                     </button></span>
                          </div>
                        </div>
                        </div>
                        </section>
          </div>
  );
}