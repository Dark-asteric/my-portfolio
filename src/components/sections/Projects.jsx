import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const projects = [
    {
        title: "SwapLine - Online Marketplace",
        tag: "Personal project",
        tech: ["React.js", "React Router", "Tailwind CSS", "DaisyUI"],
        demo: "https://swapline.mishafi6969.workers.dev",
        github: "https://github.com/Dark-asteric/swapline",
        points: [
            "Built a web application that lets users sell and buy products.",
            "Implemented messaging so buyers can contact sellers directly.",
            "Added a wishlist feature so users can save products and come back to them later.",
            "Designed a responsive interface (mobile, tablet, desktop) with light and dark mode.",
            "Implemented page navigation (home, shop, contact, login) and category-based search.",
            "Developed reusable components (navigation bar, home page sections, product cards) and fetched data from an API.",
        ],
    },
    {
        title: "Chicken Mood",
        tag: "Personal project",
        tech: ["React.js", "React Router", "Tailwind CSS", "DaisyUI", "Lucide-Icon"],
        demo: "https://chicken-mood.vercel.app",
        github: "https://github.com/Dark-asteric/Chicken-Mood",
        points: [
            "Developed a responsive restaurant website showcasing a variety of chicken-based meals with an interactive menu and an appealing user interface.",
            "Designed an online ordering form allowing customers to select dishes, specify quantities, and choose pickup or delivery.",
            "Created reusable React components and implemented responsive layouts for desktop and mobile devices.",
            "Focused on user-friendly navigation, accessibility, and an intuitive customer experience.",
        ],
    },
    {
        title: "Interactive Virtual Machine Guide",
        tag: "University project",
        tech: ["HTML", "Tailwind CSS"],
        demo: "https://dark-asteric.github.io/SAE-system-exploitation/",
        github: "https://github.com/Dark-asteric/SAE-system-exploitation",
        points: [
            "Developed the front end of a web page using HTML5 and Tailwind CSS.",
            "Created an interactive guide explaining how to install and run Linux on a virtual machine.",
        ],
    },
    {
        title: "Student Records Management Application",
        tag: "University project",
        tech: ["C"],
        github: "https://github.com/Dark-asteric/Student-academic-management-for-BUT-programs-with-C",
        points: [
            "Built an application that manipulates complex data structures (linked lists, dynamic arrays).",
            "Implemented a grade calculation algorithm and a jury simulation (handling failures, withdrawals, and graduations).",
            "Applied procedural programming principles.",
        ],
    },
    
]

const GithubIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
)

const ExternalLinkIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
)

const Projects = () => {
    return (
        <section id="projects" className="scroll-mt-24 pt-20 mt-10 py-12" data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <div className="mx-auto max-w-6xl px-5 py-10">
                <h1 className="text-4xl font-bold pb-8 text-center text-white">
                    My <span className="text-amber-500">Projects</span>
                </h1>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map(({ title, tag, tech, demo, github, points }) => (
                        <article
                            key={title}
                            className="flex h-full flex-col rounded-4xl border border-white/30 bg-white/10 p-6 shadow-lg backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.35)]"
                        >
                            <p className="pb-1 text-sm text-amber-300">{tag}</p>
                            <h2 className="pb-4 text-xl font-bold leading-snug text-white">
                                {title}
                            </h2>

                            {/* Tech tags */}
                            <div className="flex flex-wrap gap-2 pb-5">
                                {tech.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full border border-amber-500/60 bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-300"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Description */}
                            <ul className="space-y-2 pb-6 text-base leading-relaxed text-white">
                                {points.map((p) => (
                                    <li key={p} className="flex gap-2">
                                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                                        <span>{p}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Links */}
                            <div className="mt-auto flex flex-wrap gap-3">
                                {demo && (
                                    <a
                                        href={demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-2 font-medium text-white transition-colors hover:bg-amber-600"
                                    >
                                        <ExternalLinkIcon size={18} />
                                        Live Demo
                                    </a>
                                )}
                                <a
                                    href={github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 font-medium text-white transition-colors hover:bg-white/20"
                                >
                                    <GithubIcon size={18} />
                                    GitHub
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects