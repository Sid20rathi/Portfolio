import React, { ReactNode } from 'react';

interface GridLayoutProps {
  children: ReactNode;
}

export default function GridLayout({ children }: GridLayoutProps) {
  return (
    // 1. Outer container: Full screen, centers the inner content
    <div className="min-h-screen w-full  flex justify-center text-gray-800">


      <div className="w-full max-w-3xl border-x border-none border-gray-300 min-h-screen ">




        <main className="">
          {children}


          <div className="my-8 border-t border-none border-gray-300" />



        </main>

      </div>
    </div>
  );
}