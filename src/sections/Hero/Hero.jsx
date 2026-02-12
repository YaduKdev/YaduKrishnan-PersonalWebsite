import { Center, Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import LaptopContainer from './LaptopContainer'
import * as THREE from 'three'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, Suspense } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cV from '/Yadu Krishnan - CV.pdf';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = ({ isMobile = false, startLaptopAnimation }) => {
  const heroRef = useRef(null);

  useGSAP(() => {
    gsap.from(".hero-text-item", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      delay: 0.5,
      ease: "power3.out"
    });
    
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
    });
  }, { scope: heroRef });

  return (
    <div className="bg-[#f35325] overflow-x-hidden">
      {/* 1. Removed fixed top padding (pt-24) 
          2. Used justify-center on the main container for perfect vertical alignment
      */}
      <div 
        ref={heroRef} 
        className="main-container h-screen flex flex-col xl:flex-row items-center justify-center lg:py-16 px-4"
      >
        
        {/* LEFT SIDE: Identity */}
        {/* Added w-full and text-center for horizontal centering on mobile */}
        <div className='flex flex-col justify-center items-center w-full xl:w-1/2 lg:gap-4 z-10 text-center'>
          <h1 
            onMouseEnter={() => gsap.to('#cursor', { scale: 8, duration: 0.3 })} 
            onMouseLeave={() => gsap.to('#cursor', { scale: 1, duration: 0.3 })}
            className="hero-text-item text-3xl md:text-3xl xl:text-6xl font-heading font-semibold text-white"
          >
            Yadu Krishnan
          </h1>
          <h2 
            onMouseEnter={() => gsap.to('#cursor', { scale: 8, duration: 0.3 })} 
            onMouseLeave={() => gsap.to('#cursor', { scale: 1, duration: 0.3 })}
            className="hero-text-item text-3xl md:text-6xl xl:text-6.5xl font-heading font-bold leading-none tracking-tight uppercase text-white"
          >
            Web Developer
          </h2>
          
          <a href={cV} download="Yadu Krishnan - CV.pdf" className="hidden xl:block hero-text-item mt-4">
            <button onMouseEnter={() =>gsap.to('#cursor', {scale: 0, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="uppercase font-heading border-2 text-center min-w-51.25 px-8 lg:px-12 text-lg md:text-xl py-2 lg:py-3 rounded-full transition-colors ease-in-out duration-200 cursor-[url('/pointer.png'),pointer] border-[#4D1601] hover:border-[#691f01] bg-[#4D1601] hover:bg-[#691f01] hidden xl:flex xl:text-center">
              Download CV
            </button>
          </a>
        </div>

        {/* RIGHT SIDE: 3D Laptop */}
        {/* Added my-4 to give breathing room between text and button */}
        <div className='w-full h-[35vh] sm:h-[45vh] xl:w-3/5 relative my-4 sm:my-0'>
          <Canvas 
            dpr={isMobile ? [1, 1] : [1, 2]} 
            camera={{ 
                fov: isMobile ? 35 : 15, 
                position: [0, 0, isMobile ? 100 : 110] 
            }}
            gl={{ 
              antialias: true, 
              powerPreference: "high-performance",
              precision: "mediump"
            }}
          >
            <Suspense fallback={null}>
              <OrbitControls 
                enableZoom={false} 
                enablePan={false} 
                minPolarAngle={Math.PI / 2} 
                maxPolarAngle={Math.PI / 2} 
              />
              <Environment preset="studio" environmentIntensity={0.25} />
              <Center>
                <LaptopContainer startAnimation={startLaptopAnimation} />
              </Center>
            </Suspense>
          </Canvas>
        </div>

        {/* Mobile Download Button */}
        {/* z-20 and text-center ensure it stays interactive and centered */}
        <div className="xl:hidden w-full flex justify-center z-20 hero-text-item">
          <a href={cV} download="Yadu Krishnan - CV.pdf">
            <button onMouseEnter={() =>gsap.to('#cursor', {scale: 0, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="uppercase font-heading border-2 text-center min-w-51.25 px-8 lg:px-12 text-lg md:text-xl py-2 lg:py-3 rounded-full transition-colors ease-in-out duration-200 cursor-[url('/pointer.png'),pointer] border-[#4D1601] hover:border-[#691f01] bg-[#4D1601] hover:bg-[#691f01] mt-6 xl:hidden">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;