import { ExperienceLoad } from "../ui/wordload"

export default function Experience() {
    const workdone = [{
        name:"The Latest Buzz",
        logo:'/logo1.png',
        duration:'August 2025 - September 2025',
        role:'Artificial Intelligence Intern',
        description:["Intern","developer"],
    }]






    return (
        <div>
            <div className="h-full w-full border-b-2 border-x-2 border-dashed">
            <div className="font-serif text-xl p-3 uppercase tracking-[0.01em]">
                <h1>Experience</h1>
            </div>
            <div>
            </div>
            
        </div>
        <div className="h-full w-full border-b-2 border-x-2 border-dashed">
            <div>
                
                 {workdone.map((workdone,index)=>{
                    return(
                        <ExperienceLoad key={index} name={workdone.name} logo={workdone.logo} duration={workdone.duration} role={workdone.role} description={workdone.description}/>
                    )
                 })}
                 
            </div>
           
           
        </div>
        </div>
    )
}