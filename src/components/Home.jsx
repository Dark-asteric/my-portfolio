import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
import About from './sections/About'
import Contact from './sections/Contact'
import Education from './sections/Education'
import Experience from './sections/Experience'
import HeroSection from './sections/HeroSection'
import Profiles from './sections/Profiles'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Experience/>
      <Skills />
      <Projects />
      <Education />
      <Profiles />
      <Contact />
      <Footer />
    </>
  )
}

export default Home