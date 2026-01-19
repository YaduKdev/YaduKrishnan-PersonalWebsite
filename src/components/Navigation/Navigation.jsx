import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP);

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navRef = useRef(null);

    useGSAP(() => {
        gsap.from(navRef.current, {
            opacity: 0,
            y: -100,
            duration: 0.1
        })
    })

  return (
    <>
        <nav ref={navRef} className="fixed top-0 w-full z-90">
            <div className="main-container py-6 flex justify-between items-center">
                <h2 className="font-logo text-6xl">YK.</h2>
                <div className="cursor-pointer flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className={`inline-block w-10 lg:w-12 h-0.5 bg-white ${menuOpen && "rotate-45 translate-y-1"} transition-all duration-300 origin-center`}></span>
                    <span className={`inline-block w-10 lg:w-12 h-0.5 bg-white ${menuOpen && "-rotate-45 -translate-y-1"} transition-all duration-300 origin-center`}></span>
                </div>
            </div>
        </nav>


        <div className={`fixed z-20 inset-0 bg-black text-white flex flex-col items-center justify-center gap-8 text-[10vw] lg:text-[6vw] font-heading font-medium uppercase transition-transform duration-500 ${menuOpen? "translate-y-0": "-translate-y-full"}`}>
            <Link to="/" className="lg:opacity-60 hover:opacity-100" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/projects" className="lg:opacity-60 hover:opacity-100" onClick={() => setMenuOpen(false)}>Projects</Link>
            <a href="" className="lg:opacity-60 hover:opacity-100" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="" className="lg:opacity-60 hover:opacity-100" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
    </>
  )
}

export default Navigation