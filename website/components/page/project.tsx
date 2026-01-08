import { NoiseBackground } from "../ui/noise-background"
import Projectload from "../ui/projectload"
import { PulsatingButton } from "../ui/pulsating-button"
import { TweetCard } from "../ui/tweet-card"

export default function Project() {
    const projectlist = [{
        name: "ResuMail",
        description: "It helps you  write a personalized email for job positing on your uploaded resume.",
        status: 'Live',
        image1: '/resumail.png',
        image2: '/bg1.jpeg',
    }, {
        name: "ResuMail",
        description: "It helps you  write a personalized email for job positing on your uploaded resume.",
        status: 'Live',
        image1: '/resumail.png',
        image2: '/bg2.jpeg',
    }, {
        name: "ResuMail",
        description: "It helps you  write a personalized email for job positing on your uploaded resume.",
        status: 'Building',
        image1: '/resumail.png',
        image2: '/bg3.jpeg',
    }, {
        name: "ResuMail",
        description: "It helps you  write a personalized email for job positing on your uploaded resume.",
        status: 'Live',
        image1: '/resumail.png',
        image2: '/bg4.jpeg',
    }]
    return (
        <div className="">
            <div className="h-full w-full border-b-2   border-none font-bold text-xl pt-10 pl-3   uppercase tracking-[0.01em]">
                Projects

            </div>
            <div className="pl-3 text-sm text-gray-400 pb-3">Here are a few of my favorites</div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 ">

                {projectlist.map((project) => (
                    <Projectload key={project.name} name={project.name} description={project.description} status={project.status} image1={project.image1} image2={project.image2} />
                ))}

            </div>
            <div className="border-x-2 border-none border-b-2  w-full flex items-center justify-center pt-4 pb-2 ">

                <div className=" border-2 p-1 pt- rounded-4xl w-24  flex items-center justify-center dark:border-white animate-pulse hover:shadow-xl transition-all duration-500">
                    <div className="bg-gray-300 p-1 rounded-4xl w-20 h-8 flex items-center justify-center hover:bg-black hover:text-white dark:bg-gray-800 dark:hover:bg-white dark:hover:text-black font-extralight text-sm cursor-pointer animate-pulse text-shadow-md transition-all duration-500">
                        View all ↗
                    </div>

                </div>

            </div>


        </div>
    )
}   