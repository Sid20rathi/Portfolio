import { IconPointFilled } from "@tabler/icons-react";
import { PulsatingButton } from "./pulsating-button";

export default function Projectload({ name, description, status, image1, image2 }: any) {
  return (

    <div className=" border-b-1 border rounded-2xl border-x-2 pl-3 pt-4 pb-2 pr-3 group hover:shadow-2xl transition-all duration-500 hover:scale-105">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row justify-between ">
          <div>
            <div className="font-bold pl-2 ">{name}</div>
          </div>
          <div>
            <div className="flex flex-row pr-2">
              <div className={`${status === 'Live' ? 'text-green-500' : 'text-red-500'}  animate-pulse duration-800 transition-all flex justify-center items-center pr-1`}><IconPointFilled className="size-4" />
              </div>
              <div className="">{status}</div>
            </div>
          </div>
        </div>
        <div className="pb-2 pt-2">
          <div className="text-sm font-serif pl-2 ">{description}</div>
        </div>
      </div>
      <div className="p-2">
        <div className="border-2 p-1 rounded-xl dark:border-white">

          <div className="group relative overflow-hidden cursor-pointer bg-gray-200 px-2 pt-7 rounded-lg flex content-end z-20 transition-all duration-700 ">

            <div
              className="absolute  inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ backgroundImage: `url(${image2})` }}
            ></div>


            <div className="relative z-10 flex flex-col justify-end  pt-5 pr-5 pl-5 w-full ">
              <img
                src={image1}
                alt=""
                className="rounded-t-md transition-all duration-700 group-hover:scale-110 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}