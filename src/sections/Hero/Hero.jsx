import { Center, Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import LaptopContainer from './LaptopContainer'
import * as THREE from 'three'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import cV from '/Yadu Krishnan - CV.pdf';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const Hero = ({ startLaptopAnimation = false }) => {
  const heroRef = useRef(null);

    useGSAP(() => {
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: 1
      })
    })

  return (
    <>
        <div className="bg-[#f35325]">
            <div ref={heroRef} className="main-container h-screen lg:py-16 flex flex-col xl:flex-row md:justify-center items-center max-lg:pt-40">
              <div className='flex flex-col justify-center items-center mt-30 lg:mt-0 xl:w-1/2 lg:gap-4'>
                <h1 onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="text-2xl md:text-3xl xl:text-6xl font-heading font-semibold">Yadu Krishnan</h1>
                <h2 onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="text-2xl md:text-6xl xl:text-6.5xl xl:text-center font-heading font-bold leading-none tracking-tight uppercase">Web Developer</h2>
                <a href={cV} download="Yadu Krishnan - CV.pdf">
                  <button onMouseEnter={() =>gsap.to('#cursor', {scale: 0, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="uppercase font-heading border-2 text-center min-w-51.25 px-8 lg:px-12 text-lg md:text-xl py-2 lg:py-3 rounded-full transition-colors ease-in-out duration-200 cursor-[url('/pointer.png'),pointer] border-[#4D1601] hover:border-[#691f01] bg-[#4D1601] hover:bg-[#691f01] hidden xl:flex xl:text-center">
                    Download CV
                  </button>
                </a>
              </div>
              <div className='w-full h-[35%] sm:h-1/2 lg:h-3/5 xl:w-3/5'>
                <Canvas camera={{fov: 15, position: [0, 0, 110]}}>
                  <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
                  <Environment preset="studio" environmentIntensity={0.7} />
                  <Center>
                    <LaptopContainer startAnimation={startLaptopAnimation} />
                  </Center>
                </Canvas>
              </div>
              <a href={cV} download="Yadu Krishnan - CV.pdf">
                <button onMouseEnter={() =>gsap.to('#cursor', {scale: 0, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="uppercase font-heading border-2 text-center min-w-51.25 px-8 lg:px-12 text-lg md:text-xl py-2 lg:py-3 rounded-full transition-colors ease-in-out duration-200 cursor-[url('/pointer.png'),pointer] border-[#4D1601] hover:border-[#691f01] bg-[#4D1601] hover:bg-[#691f01] mt-6 xl:hidden">
                  Download CV
                </button>
              </a>
            </div>
        </div>
    </>
  )
}

export default Hero