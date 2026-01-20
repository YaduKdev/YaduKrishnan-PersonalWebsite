import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <>
        <div className="max-w-375 m-auto h-px bg-white opacity-10" />
        <footer className="main-container grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-20">
            <Link to="/" onMouseEnter={() =>gsap.to('#cursor', {scale: 0, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="font-logo text-5xl cursor-[url('/pointer.png'),pointer]">YK.</Link>
            <div>
                <h5 onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="font-bold mb-5">Primary Services</h5>
                <ul className="flex flex-col gap-2 text-base lg:text-lg">
                    <li onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})}>MERN STACK</li>
                    <li onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})}>MEAN STACK</li>
                    <li onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})}>REST APIs</li>
                    <li onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})}>SQL DBs</li>
                </ul>
            </div>
            <div>
                <h5 onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="font-bold mb-5">Availability</h5>
                <ul className="flex flex-col gap-2 text-base lg:text-lg">
                    <li onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})}>Mon-Fri 9am-7pm</li>
                    <li onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})}>Whatsapp & Email 24/7</li>
                </ul>
            </div>
            <div>
                <h5 onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="font-bold mb-5">Contact</h5>
                <ul className="flex flex-col gap-2 text-base lg:text-lg">
                    <li onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})}>yaduk.developer@gmail.com</li>
                    <li onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})}>+91 9137832949</li>
                </ul>
            </div>
        </footer>
        <div className="max-w-375 m-auto h-px bg-white opacity-10" />
        <div className="main-container grid md:grid-cols-2 gap-3 py-6 lg:py-8 max-md:text-center">
            <div onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="text-base lg:text-lg">Yadu Krishnan © {currentYear} | All Rights Reserved</div>
            <div className="flex text-xl lg:text-2xl gap-3 justify-center lg:justify-end items-center">
                <a onMouseEnter={() =>gsap.to('#cursor', {scale: 0, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} href="https://www.linkedin.com/in/yadu-krishnan-web-developer" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 cursor-[url('/pointer-24.png'),pointer]"><FaLinkedin /></a>
                <a onMouseEnter={() =>gsap.to('#cursor', {scale: 0, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} href="https://github.com/YaduKdev" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 cursor-[url('/pointer-24.png'),pointer]"><FaGithub /></a>
            </div>
        </div>
    </>
  )
}

export default Footer