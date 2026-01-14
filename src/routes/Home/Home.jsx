import About from "../../sections/About/About"
import Hero from "../../sections/Hero/Hero"
import Marquee from "../../sections/Marquee/Marquee"
import ProjectsPreview from "../../sections/ProjectsPreview/ProjectsPreview"
import Services from "../../sections/Services/Services"

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ProjectsPreview />
      <Marquee />
    </>
  )
}

export default Home