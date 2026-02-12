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
    // Entrance animation for text and buttons
    gsap.from(".hero-text-item", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      delay: 0.5,
      ease: "power3.out"
    });
    
    // Setup the ScrollTrigger for pinning only
    // (Animation trigger is now handled by the prop from Home.jsx)
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
      <div 
        ref={heroRef} 
        className="main-container h-screen lg:py-16 flex flex-col xl:flex-row md:justify-center items-center max-lg:pt-40"
      >
        
        {/* LEFT SIDE: Identity */}
        <div className='flex flex-col justify-center items-center mt-30 lg:mt-0 xl:w-1/2 lg:gap-4 z-10'>
          <h1 
            onMouseEnter={() => gsap.to('#cursor', { scale: 8, duration: 0.3 })} 
            onMouseLeave={() => gsap.to('#cursor', { scale: 1, duration: 0.3 })}
            className="hero-text-item text-2xl md:text-3xl xl:text-6xl font-heading font-semibold text-white"
          >
            Yadu Krishnan
          </h1>
          <h2 
            onMouseEnter={() => gsap.to('#cursor', { scale: 8, duration: 0.3 })} 
            onMouseLeave={() => gsap.to('#cursor', { scale: 1, duration: 0.3 })}
            className="hero-text-item text-2xl md:text-6xl xl:text-6.5xl xl:text-center font-heading font-bold leading-none tracking-tight uppercase text-white"
          >
            Web Developer
          </h2>
          
          <a href={cV} download="Yadu Krishnan - CV.pdf" className="hidden xl:block hero-text-item mt-4">
            <button 
              onMouseEnter={() => gsap.to('#cursor', { scale: 0, duration: 0.3 })} 
              onMouseLeave={() => gsap.to('#cursor', { scale: 1, duration: 0.3 })}
              className="uppercase font-heading border-2 px-12 py-3 rounded-full border-[#4D1601] bg-[#4D1601] text-white hover:bg-[#691f01] transition-all"
            >
              Download CV
            </button>
          </a>
        </div>

        {/* RIGHT SIDE: 3D Laptop */}
        <div className='w-full h-[50vh] xl:w-3/5 relative'>
          <Canvas 
            dpr={isMobile ? [1, 1.5] : [1, 2]} 
            camera={{ 
                fov: isMobile ? 25 : 15, 
                position: [0, 0, isMobile ? 85 : 110] 
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
              {/* environmentIntensity 0.25 helps prevent the white reflection patch */}
              <Environment preset="studio" environmentIntensity={0.25} />
              <Center>
                {/* startLaptopAnimation comes from Home.jsx props */}
                <LaptopContainer startAnimation={startLaptopAnimation} />
              </Center>
            </Suspense>
          </Canvas>
        </div>

        {/* Mobile Download Button */}
        <a href={cV} download="Yadu Krishnan - CV.pdf" className="xl:hidden mt-8 z-10 hero-text-item">
          <button className="uppercase font-heading border-2 px-10 py-3 rounded-full border-[#4D1601] bg-[#4D1601] text-white">
            Download CV
          </button>
        </a>
      </div>
    </div>
  )
}

export default Hero;