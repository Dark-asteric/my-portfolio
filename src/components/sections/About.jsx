import profileImage from "../../assets/IMG_7926.jpg";

const About = () => {
    return (
        <section id="about" className="flex min-h-screen scroll-mt-5 pt-0 items-center">
            <div className="mx-auto w-full max-w-6xl px-5 py-12">

                <div className="flex items-center gap-4 pb-4">
                    <span className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
                        About
                    </span>
                    <span className="h-px max-w-xl flex-1 bg-white/30" />
                </div>
                <h1 className="pb-12 text-4xl font-bold text-white sm:text-5xl">
                    Hi <span className="text-amber-500">there!</span>
                </h1>

                <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
                    <div className="relative mx-auto w-full max-w-sm md:max-w-none">
                        <span
                            aria-hidden="true"
                            className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-amber-500/70"
                        />
                        <img
                            src={profileImage}
                            alt="Shafi"
                            className="relative aspect-[4/5] w-full rounded-3xl border-2 border-amber-300/80 object-cover shadow-lg"
                        />
                    </div>
                    <div>
                        <p className="pb-8 text-2xl font-medium leading-snug text-white sm:text-3xl">
                            I build clean, responsive web applications, from{" "}
                            <span className="text-amber-400">front-end</span> to{" "}
                            <span className="text-amber-400">back-end</span>, and anything
                            else I find interesting.
                        </p>

                        <div className="space-y-5 text-lg leading-relaxed text-white/70">
                            <p>
                                Computer Science student at IUT de Paris - Rives de Seine,
                                doing my BUT Informatique with a focus on application
                                development: design, coding, and validation.
                            </p>
                            <p>
                                I work mainly with React.js, Next.js, Tailwind CSS, and
                                DaisyUI on the front end, and Node.js, Express.js, and
                                Firebase on the back end. I'm also comfortable with C, C++,
                                Python, Java, JavaScript, and TypeScript, and I use Git and
                                Linux every day.
                            </p>
                            <p>
                                Outside of coding, I enjoy competitive programming on
                                Codeforces and CodeChef, and I play cricket, volleyball, and
                                badminton. I speak Bangla, English, and French, and I'm
                                looking for a two-month full-stack developer internship
                                starting in April 2027.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About