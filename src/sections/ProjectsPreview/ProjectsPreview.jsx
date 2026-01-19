import {useRef} from "react"
import Button from "../../components/Button/Button"
import { projects } from "../../Data/ProjectsData"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProjectsPreview = () => {
  const projectsRef = useRef(null);
  const projectRef = useRef(null);

  useGSAP(() => {
    const projectWidth = projectRef.current.scrollWidth;
    const scrollWidth = projectWidth - window.innerWidth;

    gsap.to(projectRef.current, {
      x: -scrollWidth,
      ease: "linear",
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "center center",
        end: () => `+=${projectWidth}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    })
  })

  return (
    <div ref={projectsRef}  className="lg:h-screen py-24 lg:py-40 text-black bg-[#E9E9F0]">
      <div className="main-container pb-8 lg:pb-12 flex max-md:flex-col gap-6 justify-between items-start md:items-end">
        <div className="max-w-xl">
          <h3 className="mb-3">Projects</h3>
          <p className="text-lg lg:text-xl text-gray-800">Showcasing select projects - developed to inspire, engage and deliver real results.</p>
        </div>
        <Button text="View All" className="hidden md:flex bg-[#ffba08] text-black hover:bg-[#ffc124] border-[#ffba08] hover:border-[#ffc124]" />
      </div>
      <div ref={projectRef} className="hidden lg:block">
        <div className="hidden lg:flex gap-5 ms-[40%] mt-6">
          {
            projects.slice(4).map(({id, name, image, link}) => (
              <a href={link} key={id} className="relative rounded-2xl w-full min-w-xl h-96 block overflow-hidden group">
                <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <span className="absolute top-4 right-4 bg-white text-black uppercase leading-[1.4] font-heading px-5 py-1 rounded-full text-sm lg:text-lg">{name}</span>
              </a>
            ))
          }
        </div>
      </div>
      <div className="px-5 lg:hidden">
        <div className="flex flex-col md:flex-row flex-wrap gap-4 mt-6 justify-center items-center lg:hidden">
          {
            projects.slice(4).map(({id, name, image, link}) => (
              <a href={link} key={id} className="relative rounded-2xl w-85 h-64 sm:w-/12 sm:h-1/2 block overflow-hidden group">
                <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <span className="absolute top-4 right-4 bg-white text-black uppercase leading-[1.4] font-heading px-5 py-1 rounded-full text-sm lg:text-lg">{name}</span>
              </a>
            ))
          }
          <Button text="View All" className="md:hidden bg-[#ffba08] text-black hover:bg-[#ffc124] border-[#ffba08] hover:border-[#ffc124] mt-5" />
        </div>
      </div>
    </div>
  )
}

export default ProjectsPreview