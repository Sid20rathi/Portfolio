import { useState } from "react";
import Logos from "../logo";
import { LogosRow } from "../logosrow";

export default function Skills() {
    const [show, setshow] = useState(false)
    const display = () => setshow(!show)
    return (
        <div className="">
       
            <div className=" border-x-2 border-none border-b-1">
                <div className="flex flex-row justify-between w-full ">
                    <div className="font-serif pl-3 pr-3 pb-3  tracking-[0.01em] text-sm text-gray-500 ">
                        Technologies I work with to build products that solve real problems
                    </div>
                    <div className=" flex pr-8 cursor-pointer">
                        <div className=" hover:text-black text-neutral-400 text-sm cursor-pointer text-shadow-xs dark:text-neutral-500 dark:hover:text-white" onClick={display}>
                            View all ↗
                        </div>


                    </div>
                </div>

                <div className=" pt-5 pl-3 ">
                    <Logos display={show} />
                </div>



            </div>



        </div>
    )
}