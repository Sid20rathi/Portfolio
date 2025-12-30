import { Navbarpage } from "@/components/page/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black">
      <div>
        <Navbarpage />
      </div>
      <div className="container mx-auto p-8 pt-24 text-white h-screen">
        hey
      </div>
      
    </div>
  
  );
}
