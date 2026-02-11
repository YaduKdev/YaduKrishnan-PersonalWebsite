import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ onComplete, onCurtainReveal }) => {
  const preloaderRef = useRef(null);
  const textRef = useRef(null);
  const curtainRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const greetings = [
    'Hello',      // English
    'नमस्ते',      // Hindi
    'Bonjour',    // French
    'Hola',       // Spanish
    'Ciao',       // Italian
    '你好',        // Chinese
  ];

  useEffect(() => {
    const tl = gsap.timeline();

    // Faster greeting animations
    greetings.forEach((_, index) => {
      tl.to(textRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.1,
        ease: 'power2.out',
        onStart: () => setCurrentIndex(index)
      })
      .to(textRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.1,
        ease: 'power2.in',
        delay: 0.08
      });
    });

    // Transition to white curtain with image from top to bottom
    tl.to(curtainRef.current, {
      scaleY: 1,
      duration: 0.6,
      ease: 'power3.inOut'
    })
    // Hide orange background immediately when white curtain covers it
    .set(preloaderRef.current, { display: 'none' })
    // Reveal content from bottom to top (curtain moves UP)
    .to(curtainRef.current, {
      y: '-100%',
      duration: 0.8,
      ease: 'power3.inOut',
      onComplete: () => {
        onComplete();
        // Trigger laptop opening AFTER curtain is fully gone
        if (onCurtainReveal) onCurtainReveal();
      }
    });

    return () => tl.kill();
  }, [onComplete, onCurtainReveal]);

useEffect(() => {
    // 1. Add the lock class to both tags
    document.documentElement.classList.add('preloader-active');
    document.body.classList.add('preloader-active');

    return () => {
      // 2. Remove it when finished
      document.documentElement.classList.remove('preloader-active');
      document.body.classList.remove('preloader-active');
    };
  }, []);

  return (
    <>
      {/* Main preloader with greetings */}
      <div
        ref={preloaderRef}
        className="fixed inset-0 z-[99999] bg-[#f35325] flex items-center justify-center px-4"
      >
        <h1
          ref={textRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-bold text-white opacity-0 text-center"
        >
          {greetings[currentIndex]}
        </h1>
      </div>

      {/* White curtain overlay with centered image */}
      <div
        ref={curtainRef}
        className="fixed inset-0 z-[100000] bg-white origin-top scale-y-0 flex items-center justify-center"
      >
        <img 
          src="/opening.png" 
          alt="Opening" 
          className="w-[90%] h-[90%] object-contain hidden xl:flex"
        />
        <img 
          src="/opening-tab.png" 
          alt="Opening" 
          className="w-[90%] h-[90%] object-contain hidden md:flex xl:hidden"
        />
        <img 
          src="/opening-mob.png" 
          alt="Opening" 
          className="w-[90%] h-[90%] object-contain md:hidden"
        />
      </div>
    </>
  );
};

export default Preloader;