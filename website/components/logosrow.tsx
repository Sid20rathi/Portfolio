"use client";

export type LogoItem =
  | {
    node: React.ReactNode;
    href?: string;
    title?: string;
    ariaLabel?: string;
  }
  | {
    src: string;
    alt?: string;
    href?: string;
    title?: string;
    srcSet?: string;
    sizes?: string;
    width?: number;
    height?: number;
  };

  type LogosRowProps = {
  name: LogoItem[];
};



export const LogosRow = ({ name }: LogosRowProps) => {
  return (
    <div className="flex flex-wrap gap-1 p-1 ">
      {name.map((item) => (
        <span
          key={item.title}
          className="
            rounded-full
            bg-black
            px-2
            py-1
            
            text-sm
            font-serif
            text-white
            shadow-2xl
            transition
            hover:scale-105
            hover:bg-zinc-500
            dark:bg-white
            dark:text-black
            dark:hover:bg-zinc-200
            
          "
        >
          {item.title}
        </span>
      ))}
    </div>
  );
};
