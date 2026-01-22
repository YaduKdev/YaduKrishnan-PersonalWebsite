import { gsap } from "gsap";
import { useEffect } from "react";

const Cursor = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            gsap.to('#cursor', {
                x: e.clientX-20/2,
                y: e.clientY-20/2,
                ease: "power4.out",
                duration: 1,
                delay: 0
            })
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

  return (
    <div id="cursor" className="hidden lg:flex fixed top-0 left-0 h-5 w-5 bg-white rounded-full z-150 pointer-events-none mix-blend-difference" />
  )
}

export default Cursor