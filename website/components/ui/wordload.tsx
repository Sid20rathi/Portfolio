"use client";
import { useState } from "react";

export const ExperienceLoad = ({
  logo,
  name,
  duration,
  role,
  description,
}: {
  logo: string;
  name: string;
  duration: string;
  role: string;
  description: string[];
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      {/* Header */}
      <div
        className="flex flex-row pl-3 pt-3 pb-1  cursor-pointer select-none group"
        onClick={() => setOpen(!open)}
      >
        <img src={logo} alt="logo" className="size-12" />

        <div className="flex flex-row justify-between w-full pl-3">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 ">
              <h3 className="font-bold">{name}</h3>
              
              {/* Arrow */}
              <span 
                className="text-sm text-blue-300 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                {open ? "↓" : "→"}
              </span>
            </div>

            <p className="font-serif tracking-tighter text-sm">{role}</p>
          </div>

          <div className="font-serif tracking-tighter pr-4">{duration}</div>
        </div>
      </div>

      {/* Description */}
      {open && (
        <ul className="ml-20 pl-2 mb-4 list-disc text-sm font-serif tracking-tighter ">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
};