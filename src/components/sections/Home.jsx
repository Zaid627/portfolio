import { RevealOnScoll } from "../RevealOnScoll"

export const  Home = () =>{
    return (
        <section
        id="home"
        className="min-h-screen flex items-center justify-center relative">
            <RevealOnScoll>
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold md-6 bg-gradient-to-r
                 from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                    Hi I'm Muhammad Zaid
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        A Next.js developer is someone who specializes in building 
                        web applications using the Next.js framework. Next.js is a 
                        popular React framework that enables server side rendering, 
                        static site generation, and other advanced features to help 
                        developers build fast and efficient web applications.

                    </p>   

                    <div className="flex justify-center space-x-4">
                        <a href="#project"
                         className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative 
                         overflow-scroll hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246. 0.4)]"
                         >View Projects</a>


                        <a href="#contact"
                         className="border border-blue-500/50 text-blue-50 py-3 px-6 rounded
                          font-medium transition-all duration-200 hover:-translate-y-0.5 
                          hover:shadow-[0_0_15px_rgba(59, 130, 246. 0.4)] hover:bg-blue-500/10"
                         >Contact</a>
                        </div> 
            </div>
            </RevealOnScoll>
        </section>
    )
}