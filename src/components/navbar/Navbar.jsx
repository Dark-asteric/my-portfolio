import { Menu, X, Sun, Cloud, CloudRain, Snowflake } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'profiles', label: 'Profiles' },
  { id: 'contact', label: 'Contact' }
]

const CITY_NAME = "Paris"

const Navbar = () => {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const locked = useRef(false)
  const timer = useRef(null)
  const [time, setTime] = useState("")
  const [weather, setWeather] = useState({ temp: null, code: null })
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' , second: '2-digit'}))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=48.8566&longitude=2.3522&current_weather=true"
        )
        const data = await res.json()
        setWeather({
          temp: Math.round(data.current_weather.temperature),
          code: data.current_weather.weathercode,
        })
      } catch (err) {
        console.error("Failed to fetch weather data", err)
      }
    }

    fetchWeather()
    const weatherInterval = setInterval(fetchWeather, 600000) // Update every 10 min
    return () => clearInterval(weatherInterval)
  }, [])

  // Map WMO weather codes to Lucide icons
  const getWeatherIcon = (code) => {
    if (code === null) return <Sun size={16} className="text-amber-400" />
    if (code === 0) return <Sun size={16} className="text-amber-400" />
    if (code >= 1 && code <= 3) return <Cloud size={16} className="text-amber-200" />
    if (code >= 51 && code <= 82) return <CloudRain size={16} className="text-sky-300" />
    if (code >= 85 && code <= 86) return <Snowflake size={16} className="text-blue-200" />
    return <Cloud size={16} className="text-amber-200" />
  }

  useEffect(() => {
    const update = () => {
      const marker = window.innerHeight * 0.4
      let current = links[0].id
      let bestTop = -Infinity

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
    <header className="w-full sticky top-0 z-50 bg-white/30 backdrop-blur-lg border-b border-white/40 shadow-lg rounded-7xl">
      <div className="flex justify-between items-center mx-auto max-w-6xl px-5 py-3">
        <div className="flex items-center gap-4 text-xl">
          <a
            href="#home"
            onClick={() => handleClick('home')}
            className="flex items-center gap-3 cursor-pointer"
          >
            <h1 className="text-2xl font-bold text-white"><span className="text-amber-500">~/</span>Shafi</h1>
          </a>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-5 text-lg text-white">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => handleClick(id)} className={linkClass(id)}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Weather & Time Widget */}
        <div className="hidden lg:flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs text-white backdrop-blur-md">
          <span className="font-medium text-amber-400">{CITY_NAME}</span>
          <span className="text-white/40">•</span>
          {getWeatherIcon(weather.code)}
          <span>{weather.temp !== null ? `${weather.temp}°C` : "--°C"}</span>
          <span className="text-white/40">•</span>
          <span className="font-mono">{time}</span>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/40 transition text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-5 pb-5 text-xl border-t border-white/40">
          {/* Mobile Weather & Time display */}
          <li className="pt-3 flex items-center gap-2 text-sm text-amber-400">
            <span className="font-semibold">{CITY_NAME}</span>
            <span className="text-white/40">•</span>
            {getWeatherIcon(weather.code)}
            <span>{weather.temp !== null ? `${weather.temp}°C` : "--°C"}</span>
            <span className="text-white/40">•</span>
            <span className="font-mono text-white">{time}</span>
          </li>
          {links.map(({ id, label }) => (
            <li key={id}>
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
  )
}

export default Navbar