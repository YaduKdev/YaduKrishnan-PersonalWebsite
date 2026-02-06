import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation  } from "react-router-dom";

gsap.registerPlugin(useGSAP);

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navRef = useRef(null);
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState(location.pathname);

    useEffect(() => {
      setCurrentPath(location.pathname);
    }, [location]);
    
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 770 && currentPath === "/") {
          setIsScrolled(true);
        } else if (window.scrollY >=100 && currentPath !== "/") {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
    
      window.addEventListener('scroll', handleScroll);
    
      // Clean up function
      return () => {
        window.removeEventListener('scroll', handleScroll);
        document.body.style.overflowY = 'auto';
        document.body.style.overflowX = 'hidden';
      };
    });

    useEffect(() => {
      if (menuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflowY = 'auto';
        document.body.style.overflowX = 'hidden';
      }
      }, [menuOpen])

    useGSAP(() => {
        gsap.from(navRef.current, {
            opacity: 0,
            y: -100,
            duration: 0.1
        })
    })

  return (
    <>
        <nav ref={navRef} className="fixed top-0 w-full z-90 transition-all duration-200 ease-in-out">
            <div className="main-container py-6 flex justify-between items-center">
                <Link to="/" onMouseEnter={() =>gsap.to('#cursor', {scale: 0, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="cursor-[url('/pointer.png'),pointer]">
                    <h2 className={`font-logo text-6xl p-5 ${isScrolled ? 'bg-black/40 backdrop-blur-lg rounded-full' : 'bg-transparent'}`}>YK.</h2>
                </Link>
                <div onMouseEnter={() =>gsap.to('#cursor', {scale: 0, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className={`cursor-[url('/pointer.png'),pointer] flex flex-col w-24 h-24 justify-center items-center gap-1.5 ${isScrolled ? 'bg-black/40 backdrop-blur-lg rounded-full' : 'bg-transparent'}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <span className={`inline-block w-10 lg:w-12 h-0.5 bg-white ${menuOpen && "rotate-45 translate-y-1"} transition-all duration-300 origin-center`}></span>
                    <span className={`inline-block w-10 lg:w-12 h-0.5 bg-white ${menuOpen && "-rotate-45 -translate-y-1"} transition-all duration-300 origin-center`}></span>
                </div>
            </div>
        </nav>


        <div className={`fixed z-20 inset-0 bg-black text-white flex flex-col items-center justify-center gap-8 text-[10vw] lg:text-[6vw] font-heading font-medium uppercase transition-transform duration-500 ${menuOpen? "translate-y-0": "-translate-y-full"}`}>
            <Link to="/" onMouseEnter={() =>gsap.to('#cursor', {scale: 0, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="lg:opacity-60 hover:opacity-100 cursor-[url('/pointer-white-96.png'),pointer]" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/projects" onMouseEnter={() =>gsap.to('#cursor', {scale: 0, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="lg:opacity-60 hover:opacity-100 cursor-[url('/pointer-white-96.png'),pointer]" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link to="/#toolkit" onMouseEnter={() =>gsap.to('#cursor', {scale: 0, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="lg:opacity-60 hover:opacity-100 cursor-[url('/pointer-white-96.png'),pointer]" onClick={() => setMenuOpen(false)}>TOOLKIT</Link>
            <Link to="/#contact" onMouseEnter={() =>gsap.to('#cursor', {scale: 0, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="lg:opacity-60 hover:opacity-100 cursor-[url('/pointer-white-96.png'),pointer]" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
    </>
  )
}

export default Navigation