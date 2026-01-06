"use client";

type LogosRowProps = {
  name: string[];
};

export const LogosRow = ({ name }: LogosRowProps) => {
  return (
    <div className="flex flex-wrap gap-1">
      {name.map((item) => (
        <span
          key={item}
          className="
            rounded-full
            bg-black
            px-2
            py-1
            
            text-sm
            font-serif
            text-white
            shadow-md
            transition
            hover:scale-105
            hover:bg-zinc-500
            dark:bg-white
            dark:text-black
            dark:hover:bg-zinc-200
            
          "
        >
          {item}
        </span>
      ))}
    </div>
  );
};
