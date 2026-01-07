import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { LogosRow } from './logosrow';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];
const names=['React','Next.js','TypeScript','Tailwind CSS','Machine Learning','Deep Learning','PyTorch','Agentic AI','Multi-agent Workflows','Langchain','LangGraph','Pydantic AI','LangSmith','Giskard','RAGs','Memory Systems','FastAPI','SQLAlchemy','Pydantic','Streamlit']


const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

export default function Logos({display}: {display: boolean}) {
  return (
    <div>
        <div>
                <div style={{ height: '100px', position: 'relative', overflow: 'hidden'}} className=''>
      
      {!display?<LogoLoop
        logos={techLogos}
        speed={50}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor=""
        ariaLabel=""
      />: <div>
           <div className='w-fit'>
            <LogosRow name={techLogos}/>
           </div>

        </div> }
      
      

    </div>
        </div>
         
    </div>

  );
}

