import { useState } from "react"
import { Code2 } from "lucide-react"

const icon = (name, file = `${name}-original`) =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${file}.svg`

const skills = [
    // Languages
    { name: "C", category: "Languages", src: icon("c") },
    { name: "C++", category: "Languages", src: icon("cplusplus") },
    { name: "Python", category: "Languages", src: icon("python") },
    { name: "Java", category: "Languages", src: icon("java") },
    { name: "JavaScript", category: "Languages", src: icon("javascript") },
    { name: "TypeScript", category: "Languages", src: icon("typescript") },

    // Frontend
    { name: "HTML", category: "Frontend", src: icon("html5") },
    { name: "CSS", category: "Frontend", src: icon("css3") },
    { name: "React.js", category: "Frontend", src: icon("react") },
    { name: "Next.js", category: "Frontend", src: icon("nextjs", "nextjs-plain"), invert: true },
    { name: "Tailwind CSS", category: "Frontend", src: icon("tailwindcss") },
    { name: "DaisyUI", category: "Frontend", src: null },

    // Backend
    { name: "Node.js", category: "Backend", src: icon("nodejs") },
    { name: "Express.js", category: "Backend", src: icon("express"), invert: true },

    // Databases
    { name: "PostgreSQL", category: "Databases", src: icon("postgresql") },
    { name: "MySQL", category: "Databases", src: icon("mysql") , invert : true},
    { name: "Firebase", category: "Databases", src: icon("firebase", "firebase-plain") },

    // Tools
    { name: "Git", category: "Tools", src: icon("git") },
    { name: "GitHub", category: "Tools", src: icon("github"), invert: true },
    { name: "Postman", category: "Tools", src: icon("postman") },
    { name: "Vercel", category: "Tools", src: icon("vercel"), invert: true },
    { name: "Linux", category: "Tools", src: icon("linux") },
]

const categories = ["All", "Languages", "Frontend", "Backend", "Databases", "Tools"]

const Skills = () => {
    const [filter, setFilter] = useState("All")

    const visible =
        filter === "All" ? skills : skills.filter((s) => s.category === filter)

    return (
        <section id="skills" className="scroll-mt-24 pt-20">
            <div className="mx-auto max-w-6xl px-5 py-10">
                <h1 className="text-4xl text-center font-bold pb-6 text-white">
                    Technical <span className="text-amber-500">Skills</span>
                </h1>
                <div
                    className="flex justify-center flex-wrap gap-3 pb-8"
                    role="tablist"
                    aria-label="Skill categories"
                >
                    {categories.map((cat) => {
                        const isActive = filter === cat
                        return (
                            <button
                                key={cat}
                                role="tab"
                                aria-selected={isActive}
                                onClick={() => setFilter(cat)}
                                className={`cursor-pointer rounded-full border px-5 py-2 text-sm font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 ${isActive
                                    ? "border-amber-500 bg-amber-500 text-white shadow-[0_0_20px_rgba(245,158,11,0.45)]"
                                    : "border-white/30 bg-white/10 text-white hover:border-amber-500 hover:text-amber-400"
                                    }`}
                            >
                                {cat}
                            </button>
                        )
                    })}
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 hover:cursor-pointer">
                    {visible.map(({ name, src, invert }) => (
                        <div
                            key={name}
                            className="group flex h-36 flex-col items-center justify-center gap-3 rounded-3xl border-2 border-amber-500/50 bg-white/10 backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.35)]"
                        >
                            {src ? (
                                <img
                                    src={src}
                                    alt=""
                                    loading="lazy"
                                    className={`h-10 w-10 object-contain ${invert ? "brightness-0 invert" : ""}`}
                                />
                            ) : (
                                <Code2 size={40} className="text-amber-400" />
                            )}
                            <span className="text-sm text-white">{name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills