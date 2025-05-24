import { RevealOnScoll } from "../RevealOnScoll"

export const About = () =>{
    const frontendSkills =[
        "Next.js", "TailwindCSS", "TypeScripte", "JavaScript", "Git | Githup", "Material UI", "Redux Toolkit", "Vercel | Netlify"
        
    ]
    // const backendSkills = [
    //     "Node.js", "MongoDB", "Express.js"
    // ]
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScoll>
            <div className="max-w-3xl mx-auto px-4">
               <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r
                from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About me</h2>

                <div className="rounded-xl p-8 border-white/10 border
                 hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Hello my self Muhammad Zaid. I done software engeering at
                        Indus University clifton campus.I done two intership at "Insoft IT" and
                        "Maleyant Group" and done many projects in NestJS you can view my Projects
                        as well and I am interesting in coding, video games, chess, Explore Tech.
                    

</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech,key) => (
                                        <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 
                                        px-1 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {tech}

                                        </span>
                                    ))}
                                </div>

                            </div>
                        </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border 
                    hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Eduacation</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>B.S Softwear Engineeing</strong> -Indus University cliton campus (2017-2021)
                            </li>
                            
                        </ul>

                    </div>

                    <div className="p-6 rounded-xl border-white/10 border 
                    hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                        <div>
                            <h4 className="font-semibold">
                                Next.JS frontend developer (March 2024 to May 2024)
                                </h4>
                            <p></p>
                        </div>

                        <div className="font-semibold">
                            <h4>Next.JS frontend developer (September 2024 to December 2024)</h4>
                            <p></p>
                        </div>

                    </div>

                </div>
            </div>
            </RevealOnScoll>
        </section>
    )
}