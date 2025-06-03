import { RevealOnScoll } from "../RevealOnScoll"

export const Project = () =>{
    return(
        <section id="project" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScoll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r
                from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                   Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 
                    hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Food Odering App</h3>
                        <p className="text-gray-400 md-4">This is food ordering nextJS MERN STACK project
                            user place order after login and do payment by card and admin add food
                            delete food and manage food prices. The project Tools mention blow. 
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Next.JS ,","Node.JS ,","MongoDB ,","Next auth ,",
                                "Google cloud ,","Framer motion ,","Stripe ,",
                                "Formidable ,","Tailwindcss ,"].map((tech, key)=>(
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 
                                    px-1 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}

                                    </span>
                                ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://food-ordering-nine-neon.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project </a>
                        </div>
                    </div>

                   {/* 2nd Pizza Wizza */}
                   <div className="p-6 rounded-xl border border-white/10 
                    hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Pizza Wizza</h3>
                        <p className="text-gray-400 md-4">This is pizza ordering nextJS MERN STACK project
                            user place order after login and do payment by cash on dalivery and admin add food
                            delete food and manage food prices. The project Tools mention blow. 
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Next.JS ,","Node.JS ,","MongoDB ,"
                                ,"Tailwindcss ,"].map((tech, key)=>(
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 
                                    px-1 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}

                                    </span>
                                ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://next-pizza-sable-five.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project </a>
                        </div>
                    </div>

                    {/* 3rd todo app */}

                    <div className="p-6 rounded-xl border border-white/10 
                    hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Todo App</h3>
                        <p className="text-gray-400 md-4">This is Todo app nextJS project
                            user write his daily tasks on it and delete done tasks. The project Tools mention blow. 
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Next.JS ,","Tailwindcss ,"].map((tech, key)=>(
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 
                                    px-1 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}

                                    </span>
                                ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://next-js-todo-app-eosin-seven.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project </a>
                        </div>
                    </div>

                    {/* 4th pokemon-next-js-reduct */}

                    <div className="p-6 rounded-xl border border-white/10 
                    hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Pokemon NextJS app</h3>
                        <p className="text-gray-400 md-4">This is pokemon app fetch data using pokemon api. 
                            The project Tools mention blow. 
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Next.JS ,","Tailwindcss ,", "Reduct Toolkit"].map((tech, key)=>(
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 
                                    px-1 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}

                                    </span>
                                ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://pokemon-next-js-reduct.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project </a>
                        </div>
                    </div>
                    {/* 5th */}

                     <div className="p-6 rounded-xl border border-white/10 
                    hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Ecommerce App</h3>
                        <p className="text-gray-400 md-4">This is ecommerce nextJS MERN STACK project
                            user place order and do payment by card and we get payment through stripe. 
                            The project Tools mention blow. 
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Next.JS ,","Node.JS ,","MongoDB ,","Stripe ,"
                                ,"Tailwindcss ,"].map((tech, key)=>(
                                    <span 
                                    key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 
                                    px-1 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                        {tech}

                                    </span>
                                ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://ecommerce-mini-xi.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project </a>
                        </div>
                    </div>


                    


                </div>
            </div>
            </RevealOnScoll>
        </section>
    )
} 