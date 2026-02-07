import Button from "../../components/Button/Button"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContactDialog from "./ContactDialog";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Contact = () => {
  const [open, setOpen] = useState(false);
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

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden';
    }

    return () => {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden';
    };
  }, [open]);

  return (
    <>
      <div id="contact" ref={contactRef}>
        <div className="main-container py-20 lg:py-28 h-full flex flex-col gap-8 justify-center items-center">
          <h4 onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="max-w-6xl text-2xl lg:text-5xl text-center leading-tight">Freelance, Collaborations & Full-time opportunities. Let's Work Together!</h4>
          <Button click={() => setOpen(true)} text="Contact Me" className="bg-[#81bc06] hover:bg-[#abf707] text-black hover:text-zinc-900 border-[#81bc06] hover:border-[#abf707]" />
        </div>
      </div>

      <ContactDialog open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export default Contact