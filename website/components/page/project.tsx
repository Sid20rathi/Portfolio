import { NoiseBackground } from "../ui/noise-background"
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
            <div className=" grid grid-cols-1 md:grid-cols-2  ">
                
                {projectlist.map((project)=>(
                    <Projectload key={project.name} name={project.name} description={project.description} status={project.status} image1={project.image1} image2={project.image2}/>
                ))}
                
            </div>
            <div className="border-x-2 border-dashed border-b-2  w-full flex items-center justify-center pt-2 pb-2 ">
    
                <div className=" border-2 p-1 rounded-4xl w-24  flex items-center justify-center dark:border-white animate-pulse hover:shadow-xl transition-all duration-400">
                    <div className="bg-gray-300 p-1 rounded-4xl w-20 h-8 flex items-center justify-center hover:bg-black hover:text-white dark:bg-gray-800 dark:hover:bg-white dark:hover:text-black font-extralight text-sm cursor-pointer animate-pulse">
                        View all ↗
                    </div>  

                </div>
                
            </div>


        </div>
    )
}   