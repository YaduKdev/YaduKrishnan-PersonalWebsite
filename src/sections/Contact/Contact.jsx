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
      backgroundColor: "#ffffff",
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
        <div className="main-container py-20 lg:py-28 h-full flex flex-col gap-8 justify-center items-center">
          <h4 onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="max-w-6xl text-2xl lg:text-5xl text-center leading-tight">Freelance, Collaborations & Full-time opportunities. Let's Work Together!</h4>
          <Button text="Contact Me" className="bg-[#81bc06] hover:bg-[#abf707] text-black hover:text-zinc-900 border-[#81bc06] hover:border-[#abf707]" />
        </div>
      </div>
    </>
  )
}

export default Contact