import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const About = () => {
  const aboutRef = useRef(null);

  // useGSAP(() => {
  //   SplitText.create(".about-text", {
  //     type: "lines, chars",
  //     onSplit(self) {
  //       gsap.set(self.chars, {
  //         opacity: 0.25
  //       });
  //       gsap.to(self.chars, {
  //         opacity: 1,
  //         stagger: 0.05,
  //         scrollTrigger: {
  //           trigger: aboutRef.current,
  //           start: "top 70%",
  //           end: "center center",
  //           scrub: 1
  //         }
  //       })
  //     }
  //   })
  // })

  return (
    <div className="w-full bg-[#f35325]">
      <div ref={aboutRef} className='h-screen bg-black rounded-t-[60px] relative z-10'>
        <div className='about-text main-container py-4 gap-5 md:gap-8 lg:py-12 h-full flex flex-col justify-center items-center font-heading text-xl md:text-2xl xl:text-4xl leading-tight'>
          <p onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="font-bold md:text-3xl xl:text-5xl">
            &nbsp;I'm Yadu Krishnan, a highly motivated and aspiring web developer located in Mumbai, India with a strong passion for creating innovative and user-friendly digital experiences.
          </p>
          <p onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})}>
            &nbsp;On the frontend, I excel with the React JS and utilize Angular, complemented by strong proficiency in design and styling using Sass and 
            Tailwind CSS. For the backend, I am adept at developing scalable server-side logic using the Node.js runtime environment, developing REST APIs, 
            and managing data efficiently across diverse database systems, including MongoDB, MySQL, and PostgreSQL. While I possess academic knowledge 
            in Python, I am focused on leveraging my extensive practical experience in full-stack JavaScript development to deliver high-quality, end-to-end 
            solutions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About