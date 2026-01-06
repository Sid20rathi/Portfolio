import Logos from "../logo";
import { LogosRow } from "../logosrow";

export default function Skills(){
    return(
        <div className="">
            <div className="border-x-2 border-dashed border-b-2 font-serif text-lg p-3 uppercase tracking-[0.01em]"> Stack I use </div>
            <div className=" border-x-2 border-dashed border-b-2">
                <div className="font-serif  p-3 pt-5  tracking-[0.01em] text-sm text-gray-500 ">
                    Technologies I work with to build products that solve real problems
                </div>

                <div className="p-3 pt-5 pl-7 pr-7">
                 <Logos/>
             </div>
           

            </div>
            
           
            
        </div>
    )
}