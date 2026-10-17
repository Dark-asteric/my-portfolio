import { CalendarDays, GraduationCap, MapPin } from "lucide-react"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const education = [
    {
        degree: "BUT Informatique",
        school: "IUT de Paris - Rives de Seine",
        location: "Paris, 75016, France",
        date: "September 2025 - Present",
        label: "Pathway",
        detail: "Application development: design, development, validation.",
        current: true,
    },
    {
        degree: "Baccalauréat Général",
        school: "Lycée Maine de Biran",
        location: "Bergerac, 24100, France",
        date: "September 2022 - June 2025",
        label: "Specialization",
        detail: "NSI (Computer Science) and Mathematics (Advanced Mathematics option)",
    },
]

const Education = () => {
    return (
        <section id="education" className="scroll-mt-24 pt-20" data-aos="fade-left" data-aos-easing="linear"
            data-aos-duration="1200">
            <div className="mx-auto max-w-4xl px-5 py-10">
                <h1 className="text-4xl font-bold pb-8 text-center text-white">
                    My <span className="text-amber-500">Education</span>
                </h1>

                <div className="relative space-y-6 border-l-2 border-amber-500/50 pl-8 md:pl-10">
                    {education.map(
                        ({ degree, school, location, date, label, detail, current }) => (
                            <article
                                key={degree}
                                className="relative rounded-4xl border border-white/40 bg-white/30 p-6 shadow-lg backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.35)]"
                            >
                                {/* Timeline dot */}
                                <span
                                    className={`absolute top-8 -left-[2.6rem] h-4 w-4 rounded-full border-2 border-amber-500 md:-left-[3.1rem] ${current ? "bg-amber-500 shadow-[0_0_0_4px_rgba(245,158,11,0.3)] animate-shadowBlink" : "bg-[var(--navy)]"
                                        }`}
                                />

                                <div className="flex flex-wrap items-start justify-between gap-3 pb-3">
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white">
                                            <GraduationCap size={22} />
                                        </span>
                                        <div>
                                            <h2 className="text-xl font-bold leading-snug text-white">
                                                {degree}
                                            </h2>
                                            <p className="text-amber-300">{school}</p>
                                        </div>
                                    </div>

                                    {current && (
                                        <span className="rounded-full border border-amber-500/60 bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-300">
                                            En cours
                                        </span>
                                    )}
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

                                <p className="text-base leading-relaxed text-white">
                                    <span className="font-semibold text-amber-300">{label} : </span>
                                    {detail}
                                </p>
                            </article>
                        )
                    )}
                </div>
            </div>
        </section>
    )
}

export default Education