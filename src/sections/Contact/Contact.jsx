import Button from "../../components/Button/Button"
import { useRef } from "react"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);

  useGSAP(() => {
    gsap.from(contactRef.current, {
      backgroundColor: "#E9E9F0",
      scrollTrigger: {
        trigger: contactRef.current,
        start: "center bottom",
        end: "60% bottom",
        scrub: 1
      }
    })
  })

  return (
    <>
      <div ref={contactRef}>
        <div className="main-container py-20 lg:py-28 h-full flex flex-col gap-8 justify-center items-center text-[#E9E9F0]">
          <h4 className="max-w-6xl text-2xl lg:text-5xl text-center leading-tight">Freelance, Collaborations & Full-time opportunities. Let's Work Together!</h4>
          <Button text="Contact Me" className="bg-green-800 text-zinc-200 hover:bg-green-700 border-green-800 hover:border-green-700" />
        </div>
      </div>
    </>
  )
}

export default Contact