import Projectload from "../ui/projectload"
import { PulsatingButton } from "../ui/pulsating-button"
import { TweetCard } from "../ui/tweet-card"

export default function Project(){
    const projectlist =[{
        name:"ResuMail",
        description:"It helps you  write a personalized email for job positing on your uploaded resume.",
        status:'Live',
        image1:'/resumail.png',
        image2:'/bg1.jpeg',
        },{
        name:"ResuMail",
        description:"It helps you  write a personalized email for job positing on your uploaded resume.",
        status:'Live',
        image1:'/resumail.png',
        image2:'/bg2.jpeg',
        },{
        name:"ResuMail",
        description:"It helps you  write a personalized email for job positing on your uploaded resume.",
        status:'Building',
        image1:'/resumail.png',
        image2:'/bg3.jpeg',
        },{
        name:"ResuMail",
        description:"It helps you  write a personalized email for job positing on your uploaded resume.",
        status:'Live',
        image1:'/resumail.png',
        image2:'/bg4.jpeg',
        }]
    return(
        <div className="">
            <div className="h-full w-full border-b-2  border-x-2 border-dashed font-serif text-lg p-3 uppercase tracking-[0.01em]">
                Projects

            </div>
            <div className=" grid grid-cols-2  ">
                {projectlist.map((project)=>(
                    <Projectload key={project.name} name={project.name} description={project.description} status={project.status} image1={project.image1} image2={project.image2}/>
                ))}
                
            </div>
            <div className="border-x-2 border-dashed border-b-2  w-full p-2 flex items-center justify-center pt-5 pb-4 animate-pulse">
                <PulsatingButton className="">View All ↗</PulsatingButton>
            </div>


        </div>
    )
}