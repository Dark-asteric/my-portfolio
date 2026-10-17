import { useState } from "react"
import { Mail, MessageSquare, Send, User } from "lucide-react"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const EMAIL = "mishafi6969@gmail.com"

const fieldClass =
    "peer w-full border-b-2 border-white/30 bg-transparent py-4 pr-10 text-lg text-white placeholder:text-white/60 transition-colors focus:border-amber-500 focus:outline-none"

const iconClass =
    "pointer-events-none absolute right-1 top-5 text-white/60 transition-colors peer-focus:text-amber-500"

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" })

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    const handleSubmit = (e) => {
        e.preventDefault()
        const subject = `Portfolio message from ${form.name}`
        const body = `${form.message}\n\n— ${form.name} (${form.email})`
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }

    return (
        <section id="contact" className="flex pt-0 pb-12 items-center scroll-mt-18 items-center" data-aos="fade-left" data-aos-easing="linear"
            data-aos-duration="1100">
            <div className="mx-auto w-full max-w-3xl px-5 py-5">
                <h1 className="pb-6 text-center text-3xl font-bold text-white sm:text-5xl">
                    Get In Touch -{" "}
                    <span className="uppercase text-amber-500">Ask me anything!</span>
                </h1>

                <p className="pb-10 text-center text-lg leading-relaxed text-white/70">
                    Ready to collaborate or have a project in mind?
                    <br className="hidden sm:block" />{" "}
                    I'm always open to new opportunities and interesting conversations.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="rounded-4xl border border-white/40 bg-white/10 p-6 shadow-lg backdrop-blur-md sm:p-10"
                >
                    <div className="space-y-6">
                        <div className="relative">
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                autoComplete="name"
                                placeholder="Name"
                                value={form.name}
                                onChange={handleChange}
                                className={fieldClass}
                            />
                            <User size={20} className={iconClass} />
                        </div>

                        <div className="relative">
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                placeholder="Email"
                                value={form.email}
                                onChange={handleChange}
                                className={fieldClass}
                            />
                            <Mail size={20} className={iconClass} />
                        </div>

                        <div className="relative">
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                placeholder="Message"
                                value={form.message}
                                onChange={handleChange}
                                className={`${fieldClass} resize-none`}
                            />
                            <MessageSquare size={20} className={iconClass} />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="mt-10 flex w-full cursor-pointer items-center justify-center gap-3 rounded-full border-2 border-amber-500 py-4 text-base font-bold uppercase tracking-widest text-white shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all hover:bg-amber-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                    >
                        Send message
                        <Send size={20} />
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact