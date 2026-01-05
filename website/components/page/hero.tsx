import { useState } from "react";
import { WordRotate } from "../ui/word-rotate";

export default function Hero() {
  const [visible, setVisible] = useState<boolean>(false);
  const visibleProf = () => {
    setVisible(!visible)
    const audio = new Audio("/click2.mp3");
    audio.play().catch((err) => console.error("Audio playback failed:", err));
  }
  return (
    <div className="h-full w-full border-b-2 border-x-2 border-dashed  ">
      <div className="  flex flex-col justify-start md:justify-start lg:justify-start xl:justify-start">
        <div className="relative ">
          <img
            src="/dash.png"
            alt="profile"
            width={120}
            height={120}
            className="  z-40 absolute h-50 w-screen "
          />
          <div className="pt-28 pl-11">
          <button onClick={visibleProf}>
            {visible ? <div className="">
              <img
                src="/siddhant.png"
                alt="profile"
                width={120}
                height={120}
                className="rounded-full absolute   cursor-pointer z-50 shadow-2xl "
              />

            </div> : <img
              src="/logo1.png"
              alt="profile"
              width={120}
              height={120}
              className="rounded-full absolute cursor-pointer z-50 shadow-2xl "
            />}
          </button>


        </div>

        </div>
        






        <div className="pt-28 pl-2 font-serif">
          <div className="flex flex-col  font-serif text-xs ">Hi there, I'm</div>
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row ">
            <span className="inline-block  text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-serif">Siddhant Rathi </span>
            <div className="pb-3 flex ">


              <WordRotate
                className="pl-2   sm:text-2xl md:text-3xl font-serif tracking-tighter text-neutral-500 dark:text-blue-400 hover:text-blue-400 dark:hover:text-gray-500"
                words={["- AI Engineer", "- Full Stack web developer", " - Developer"]}
              />
            </div>




          </div>

        </div>





      </div>




    </div>

  );
}