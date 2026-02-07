import { useState } from 'react';
import About from "../../sections/About/About"
import Contact from "../../sections/Contact/Contact"
import Hero from "../../sections/Hero/Hero"
import ProjectsPreview from "../../sections/ProjectsPreview/ProjectsPreview"
import Marquee from "../../sections/Marquee/Marquee"
import Services from "../../sections/Services/Services"
import Preloader from "../../components/Preloader/Preloader"

const Home = () => {
  // Check if we're coming from internal navigation
  const isInternalNav = sessionStorage.getItem('hasSeenPreloader') === 'true';
  
  // Show preloader unless coming from internal navigation
  const [showPreloader, setShowPreloader] = useState(!isInternalNav);
  const [startLaptopAnimation, setStartLaptopAnimation] = useState(isInternalNav);

  const handleCurtainReveal = () => {
    // Start laptop animation after curtain reveals
    setStartLaptopAnimation(true);
  };

  const handlePreloaderComplete = () => {
    // Mark that we've seen the preloader
    sessionStorage.setItem('hasSeenPreloader', 'true');
    setShowPreloader(false);
  };

  return (
    <>
      {showPreloader && (
        <Preloader 
          onComplete={handlePreloaderComplete}
          onCurtainReveal={handleCurtainReveal}
        />
      )}
      <Hero startLaptopAnimation={startLaptopAnimation} />
      <About />
      <Services />
      <ProjectsPreview />
      <Marquee />
      <Contact />
    </>
  )
}

export default Home