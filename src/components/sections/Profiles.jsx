import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const GithubIcon = ({ size = 32 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
)

const LinkedinIcon = ({ size = 32 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
)

const CdnIcon = ({ slug, name }) => {
    const [failed, setFailed] = useState(false)
    if (failed) {
        return (
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-500 text-sm font-bold text-amber-400">
                {name[0]}
            </span>
        )
    }
    return (
        <img
            src={`https://cdn.simpleicons.org/${slug}/f59e0b`}
            alt=""
            className="h-8 w-8 object-contain"
            onError={() => setFailed(true)}
        />
    )
}
const profiles = [
    { name: "Codeforces", handle: "Competitive programming", href: "https://codeforces.com/profile/MI_Shafi", icon: <CdnIcon slug="codeforces" name="Codeforces" /> },
    { name: "CodeChef", handle: "Competitive programming", href: "https://www.codechef.com/users/dark_asteric", icon: <CdnIcon slug="codechef" name="CodeChef" /> },
    { name: "LeetCode", handle: "Problem solving", href: "https://leetcode.com/u/Dark_Sploit/", icon: <CdnIcon slug="leetcode" name="LeetCode" /> },
    { name: "LinkedIn", handle: "Professional network", href: "https://www.linkedin.com/in/muhammad-mi-shafi-4b2832172", icon: <LinkedinIcon size={32} /> },
    { name: "GitHub", handle: "Code and projects", href: "https://github.com/Dark-asteric", icon: <GithubIcon size={32} /> },
]

const stats = [
    { value: "1K+", label: "Problems solved" },
    { value: "100+", label: "Live contests" },
    { value: "1077", label: "Max rating on Codeforces" },
    { value: "3★", label: "CodeChef rating" },
]

const Profile = () => {
    return (
        <section id="profiles" className="scroll-mt-24 mt-10 pt-29 min-h-screen" data-aos="fade-down" data-aos-easing="linear"
            data-aos-duration="1500">
            <div className="mx-auto max-w-6xl px-5 py-10">
                <h1 className="pb-8 text-center text-4xl font-bold text-white">
                    Coding <span className="text-amber-500">Profiles</span>
                </h1>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pb-8 lg:grid-cols-4">
                    {stats.map(({ value, label }) => (
                        <div
                            key={label}
                            className="rounded-4xl border border-white/40 bg-white/10 p-6 text-center shadow-lg backdrop-blur-md"
                        >
                            <p className="text-4xl font-bold text-amber-500 sm:text-5xl">{value}</p>
                            <p className="pt-2 text-sm text-white/80 sm:text-base">{label}</p>
                        </div>
                    ))}
                </div>

                {/* Profile links */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {profiles.map(({ name, handle, href, icon }) => (
                        <a
                            key={name}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center gap-4 rounded-3xl border-2 border-amber-500/50 bg-white/10 p-5 backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                        >
                            <span className="shrink-0 text-amber-400">{icon}</span>
                            <span className="min-w-0 flex-1">
                                <span className="block text-lg font-semibold text-white">{name}</span>
                                <span className="block text-sm text-white/70">{handle}</span>
                            </span>
                            <ArrowUpRight
                                size={22}
                                className="shrink-0 text-amber-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Profile