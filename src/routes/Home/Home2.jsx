import About from "../../sections/About/About"
import Contact from "../../sections/Contact/Contact"
import Hero from "../../sections/Hero/Hero"
import ProjectsPreview from "../../sections/ProjectsPreview/ProjectsPreview"
import Marquee from "../../sections/Marquee/Marquee"
import Services from "../../sections/Services/Services"

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ProjectsPreview />
      <Marquee />
      <Contact />
    </>
  )
}

export default Home