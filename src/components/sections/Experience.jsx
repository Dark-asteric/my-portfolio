import { Briefcase, CalendarDays, MapPin } from "lucide-react"

const experience = [
    {
        role: "Waiter",
        company: "Restaurant TajMahal",
        location: "Bergerac, Paris",
        date: "July 2024 – August 2025",
        points: [
            "Welcomed guests and set tables before service.",
            "Took orders, served dishes by tray, and cleared tables quickly.",
            "Handled payments and cleaned dishes at the end of each service.",
            "Advised guests on the menu, explaining spice levels and specialties (Tandoori, Biryani, Curry).",
        ],
    },
    {
        role: "IT Support Technician",
        company: "Info2000",
        location: "Périgueux, Paris",
        date: "June 2023 – August 2023",
        points: [
            "Developed and applied a structured troubleshooting methodology to identify, analyze, and resolve IT issues.",
            "Diagnosed hardware, software, and system-related problems to support reliable IT operations.",
            "Strengthened technical diagnostic skills, attention to detail, and the ability to resolve IT problems efficiently.",
            "Applied analytical and problem-solving skills to troubleshoot technical issues systematically.",
        ],
    },
]

const Experience = () => {
    return (
        <section id="experience" className="scroll-mt-24 py-12 my-10">
            <div className="mx-auto max-w-4xl px-5 py-10">
                <h1 className="text-4xl font-bold pb-8 text-center text-white">
                    My <span className="text-amber-500">Experience</span>
                </h1>

                <div className="relative space-y-12 border-l-2 border-amber-500/50 pl-8 md:pl-10">
                    {experience.map(({ role, company, location, date, points }) => (
                        <article
                            key={`${company}-${role}`}
                            className="relative rounded-4xl border border-white/40 bg-white/30 p-6 shadow-lg backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.35)]"
                        >
                            <span className="absolute top-8 -left-[2.6rem] h-4 w-4 rounded-full border-2 border-amber-500 bg-[var(--navy)] md:-left-[3.1rem]" />

                            <div className="flex items-center gap-3 pb-5">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white">
                                    <Briefcase size={22} />
                                </span>
                                <div>
                                    <h2 className="text-xl font-bold leading-snug text-white">
                                        {role}
                                    </h2>
                                    <p className="text-amber-400">{company}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-x-6 gap-y-2 pb-4 text-sm text-white/80">
                                <span className="inline-flex items-center gap-2">
                                    <CalendarDays size={16} className="text-amber-400" />
                                    {date}
                                </span>
                                <span className="inline-flex items-center gap-2">
                                    <MapPin size={16} className="text-amber-400" />
                                    {location}
                                </span>
                            </div>

                            <ul className="space-y-2 text-base leading-relaxed text-white">
                                {points.map((p) => (
                                    <li key={p} className="flex gap-2">
                                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                                        <span>{p}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience