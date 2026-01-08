import { ExperienceLoad } from "../ui/wordload"

export default function Experience() {
    const workdone = [{
        name: "The Latest Buzz",
        logo: '/tlb_logo.png',
        duration: 'Decemeber 2025 - Present',
        role: 'Software Engineer Intern',
        description: ["Redesigned and implemented the company’s website with a focus on performance, responsiveness, and maintainability.",
            "Built custom AI agents for internal use, enabling automation of repetitive tasks and intelligent decision support.",
            "Actively working on a production-grade Influencer Marketing Agency product, contributing to architecture, backend logic, and frontend features."],
    }, {
        name: "GenIntel Technologies",
        logo: '/genintel.jpeg',
        duration: 'July 2025 - October 2025',
        role: 'Ai/Ml Intern',
        description: ["Built and contributed to production-ready Machine Learning and Generative AI applications, working across the full development lifecycle from idea to deployment.",
            "Designed and implemented backend and frontend components for AI-driven applications, ensuring scalability, performance, and clean architecture.",
            "Worked hands-on with Machine Learning model development, Generative AI, and Agentic AI workflows, integrating models into real-world applications."
        ],

    }]






    return (
        <div>
            <div className="h-full w-full border-b-2 border-x-2 border-none ">
                <div className="font-bold text-xl pt-10 pl-3 uppercase tracking-[0.01em]">
                    <h1>Experience</h1>
                </div>
                <div>
                </div>

            </div>
            <div className="h-full w-full border-b-2 border-x-2 border-none py-3 pb-6">
                <div>

                    {workdone.map((workdone, index) => {
                        return (
                            <ExperienceLoad key={index} name={workdone.name} logo={workdone.logo} duration={workdone.duration} role={workdone.role} description={workdone.description} />
                        )
                    })}

                </div>


            </div>
        </div>
    )
}