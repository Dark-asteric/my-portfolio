import { Menu, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"


const links = [
  { id: 'home', label: 'Home'},
  { id: 'about', label: 'About' },
  {id: 'experience', label : 'Experience'},
  {id: 'skills', label: 'Skills'},
  { id: 'projects', label: 'Projects'},
  {id:'education', label: 'Education'},
  
  { id: 'profiles', label: 'Profiles'},
  { id: 'contact', label: 'Contact'}
]

const Navbar = () => {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const locked = useRef(false)
  const timer = useRef(null)

  useEffect(() => {
    const update = () => {
      const marker = window.innerHeight * 0.4
      let current = links[0].id
      let bestTop = -Infinity

      // pick the section whose top is closest to (but not past) the marker
      for (const { id } of links) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.getBoundingClientRect().top
        if (top <= marker && top > bestTop) {
          bestTop = top
          current = id
        }
      }
      setActive(current)
    }

    const onScroll = () => {
      if (locked.current) {
        // still scrolling from a click: wait until it settles, then sync
        clearTimeout(timer.current)
        timer.current = setTimeout(() => {
          locked.current = false
          update()
        }, 120)
        return
      }
      update()
    }

    update()
    window.addEventListener('scroll', onScroll, true)
    window.addEventListener('resize', update)
    return () => {
      clearTimeout(timer.current)
      window.removeEventListener('scroll', onScroll, true)
      window.removeEventListener('resize', update)
    }
  }, [])

  const handleClick = (id) => {
    setActive(id)
    setOpen(false)
    locked.current = true
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      locked.current = false
    }, 800)
  }

  const linkClass = (id) =>
    `pb-1 border-b-2 transition-colors ${active === id
      ? 'text-amber-500 border-amber-500'
      : 'text-white border-transparent hover:text-amber-500'
    }`
  return (
    <>
      <header className="w-full sticky top-0 z-50 bg-white/30 backdrop-blur-lg border-b border-white/40 shadow-lg rounded-7xl">
        <div className="flex justify-between items-center mx-auto max-w-6xl px-5 py-3">
          <div className="flex items-center gap-3 text-xl">
            <a
              href="#home"
              onClick={() => handleClick('home')}
              className="flex items-center gap-3 text-xl cursor-pointer"
            >
              <h1 className="text-2xl font-bold text-white"><span className="text-amber-500">~/</span>Shafi</h1>
            </a>
          </div>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-5 text-xl text-white">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => handleClick(id)} className={linkClass(id)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/40 transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
        {open && (
          <ul className="md:hidden flex flex-col gap-4 px-5 pb-5 text-xl border-t border-white/40">
            {links.map(({ id, label }) => (
              <li key={id} className="pt-4">
                <a
                  href={`#${id}`}
                  onClick={() => handleClick(id)}
                  className={`block ${active === id ? 'text-amber-500 font-semibold' : 'text-white'}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>
    </>
  )
}

export default Navbar
