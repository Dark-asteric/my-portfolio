import { FileDown, MailPen } from "lucide-react";
import TypeWriter from "../typewriter/TypeWriter";

const HeroSection = () => {
    return (
        <section id="home" className="w-full min-h-screen pt-20 overflow-hidden mt-10">
            <div className="relative mx-auto max-w-6xl px-5 overflow-hidden bg-[var(--navy)] text-white">
                <div className="relative z-[1] mx-auto grid min-h-[670px] w-full max-w-[1200px] grid-cols-1 items-center gap-10 px-5 py-12 sm:px-8 md:px-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10 lg:px-8 xl:gap-[58px] xl:px-0">
                    <div className="min-w-0">
                        <div className="mb-5 px-4">
                            <p className="inline-flex max-w-full items-center gap-3 rounded-full border border-amber-300 bg-amber-200 px-3 py-2 text-xs font-[650] leading-relaxed text-amber-600 sm:px-5">
                                <span className="h-2 w-2 shrink-0 rounded-full bg-amber-600 shadow-[0_0_0_4px_rgba(251,191,36,0.8)] animate-shadowBlink" />
                                <span>
                                    Looking for a two-month internship starting in April 2027.
                                </span>
                            </p>
                        </div>
                        <div className="flex gap-5 items-center text-3xl font-bold px-6 mb-5">
                            I am <TypeWriter/>
                        </div>

                        <div className="rounded-3xl border border-white/30 bg-white/10 p-5 shadow-lg backdrop-blur-md sm:rounded-4xl sm:p-7 lg:p-8">
                            <h1 className="pb-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                                I build meaningful{" "}
                                <span className="text-amber-300">
                                    web experiences.
                                </span>
                            </h1>

                            <p className="pb-6 text-base leading-relaxed text-white/70 sm:text-lg">
                                Full-stack developer and Computer Science student at IUT de
                                Paris - Rives de Seine. I enjoy turning ideas into intuitive
                                interfaces and reliable applications, from front-end to
                                back-end.
                            </p>
                            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                                <a
                                    href="mailto:mishafi6969@gmail.com"
                                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-3 font-medium text-white transition-colors hover:bg-amber-600"
                                >
                                    <MailPen size={18} />
                                    Get in Touch
                                </a>

                                <a
                                    href="/CV_Shafi.pdf"
                                    download="CV_Shafi.pdf"
                                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 font-medium text-white transition-colors hover:bg-white/20"
                                >
                                    <FileDown size={18} />
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Code card */}
                    <div className="relative flex min-h-[390px] min-w-0 items-center justify-center px-2 py-8 sm:min-h-[480px] sm:px-8 lg:min-h-[520px] lg:px-0 [perspective:1100px]">

                        <div className="relative w-full max-w-[450px] min-w-0 rotate-[-2deg] overflow-hidden rounded-2xl border border-amber-500/20 bg-[var(--navy)] shadow-[0_38px_90px_rgba(0,0,0,0.4)] backdrop-blur-[15px] sm:rotate-[-4deg]">

                            {/* Card header */}
                            <div className="flex items-center justify-between gap-2 border-b border-amber-500/10 px-3 py-4 text-[10px] text-amber-200/60 sm:px-5 sm:text-[11px]">
                                <span className="flex shrink-0 gap-[5px]">
                                    <i className="h-2 w-2 rounded-full bg-[#ef6f6a]" />
                                    <i className="h-2 w-2 rounded-full bg-[#e0b358]" />
                                    <i className="h-2 w-2 rounded-full bg-[#72d869]" />
                                </span>
                                <span className="truncate">shafi / portfolio.jsx</span>
                                <span className="shrink-0">↗</span>
                            </div>

                            {/* Code */}
                            <div className="overflow-x-auto px-3 py-5 font-mono text-[10px] leading-[2.1] text-amber-50/90 sm:px-5 sm:py-7 sm:text-[12px] lg:text-[13px]">
                                <div className="whitespace-nowrap">
                                    <span className="inline-block w-7 select-none text-amber-500/50 sm:w-[37px]">01</span>
                                    <span className="text-amber-400">const</span> developer = {"{"}
                                </div>

                                <div className="whitespace-nowrap">
                                    <span className="inline-block w-7 select-none text-amber-500/50 sm:w-[37px]">02</span>
                                    &nbsp; name: <span className="text-amber-300">"Shafi"</span>,
                                </div>

                                <div className="whitespace-nowrap">
                                    <span className="inline-block w-7 select-none text-amber-500/50 sm:w-[37px]">03</span>
                                    &nbsp; focus: <span className="text-amber-500">"Full Stack"</span>,
                                </div>

                                <div className="whitespace-nowrap">
                                    <span className="inline-block w-7 select-none text-amber-500/50 sm:w-[37px]">04</span>
                                    &nbsp; passion: [
                                </div>

                                <div className="whitespace-nowrap">
                                    <span className="inline-block w-7 select-none text-amber-500/50 sm:w-[37px]">05</span>
                                    &nbsp;&nbsp; <span className="text-orange-300">"Build"</span>, <span className="text-orange-300">"Learn"</span>,
                                </div>

                                <div className="whitespace-nowrap">
                                    <span className="inline-block w-7 select-none text-amber-500/50 sm:w-[37px]">06</span>
                                    &nbsp;&nbsp; <span className="text-orange-300">"Create"</span>
                                </div>

                                <div className="whitespace-nowrap">
                                    <span className="inline-block w-7 select-none text-amber-500/50 sm:w-[37px]">07</span>
                                    &nbsp; ],
                                </div>

                                <div className="whitespace-nowrap">
                                    <span className="inline-block w-7 select-none text-amber-500/50 sm:w-[37px]">08</span>
                                    &nbsp; available: <span className="text-amber-400">true</span>
                                </div>

                                <div className="whitespace-nowrap">
                                    <span className="inline-block w-7 select-none text-amber-500/50 sm:w-[37px]">09</span>
                                    {"}"};
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-2 border-t border-amber-500/10 bg-white/5 p-5 text-[10px] sm:px-5 sm:text-xs">
                                <span className="flex min-w-0 items-center gap-2 pt-5">
                                    <i className="h-[7px] w-[7px] shrink-0 rounded-full bg-amber-400" />
                                    <span className="truncate">All systems operational</span>
                                </span>
                                <span className="shrink-0 text-amber-300 pt-5">JavaScript</span>
                            </div>
                        </div>
                        <div className="absolute top-[40px] right-[-18px] rotate-[8deg] flex items-center gap-2 rounded-xl border border-amber-500/20 bg-slate-800 px-3 py-2 text-xs font-extrabold text-amber-50 shadow-xl sm:right-0 sm:top-10 sm:gap-[10px] sm:px-[17px] sm:py-[14px] sm:text-[13px]">
                            <span className="text-lg text-amber-400">*</span>
                            React.js
                        </div>

                        {/* Node badge */}
                        <div className="absolute bottom-[65px] left-[-22px] rotate-[-10deg] flex items-center gap-2 rounded-xl border border-amber-500/20 bg-slate-800 px-3 py-2 text-xs font-extrabold text-amber-50 shadow-xl sm:bottom-[75px] sm:left-0 sm:gap-[10px] sm:px-[17px] sm:py-[14px] sm:text-[13px]">
                            <span className="text-xl leading-none text-amber-400">⬡</span>
                            Node.js
                        </div>

                        {/* Bottom caption */}
                        <div className="absolute bottom-0 right-0 text-[8px] tracking-[0.14em] text-amber-200/70 sm:bottom-1 sm:text-[9px] sm:tracking-[0.18em]">
                            BUILD / CREATE / REPEAT
                            <span className="pl-2 text-amber-500">✦</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
