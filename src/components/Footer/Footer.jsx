import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <>
        <div className="max-w-375 m-auto h-px bg-white opacity-10" />
        <footer className="main-container grid md:grid-cols-2 lg:grid-cols-4 gap-10 py-20">
            <h2 className="font-logo text-5xl">YK.</h2>
            <div>
                <h5 className="font-bold mb-5">Primary Services</h5>
                <ul className="flex flex-col gap-2 text-base lg:text-lg">
                    <li>MERN STACK</li>
                    <li>MEAN STACK</li>
                    <li>REST APIs</li>
                    <li>SQL DBs</li>
                </ul>
            </div>
            <div>
                <h5 className="font-bold mb-5">Availability</h5>
                <ul className="flex flex-col gap-2 text-base lg:text-lg">
                    <li>Mon-Fri 9am-7pm</li>
                    <li>Whatsapp & Email 24/7</li>
                </ul>
            </div>
            <div>
                <h5 className="font-bold mb-5">Contact</h5>
                <ul className="flex flex-col gap-2 text-base lg:text-lg">
                    <li>yaduk.developer@gmail.com</li>
                    <li>+91 9137832949</li>
                </ul>
            </div>
        </footer>
        <div className="max-w-375 m-auto h-px bg-white opacity-10" />
        <div className="main-container grid md:grid-cols-2 gap-3 py-6 lg:py-8 max-md:text-center">
            <div className="text-base lg:text-lg">Yadu Krishnan © {currentYear} | All Rights Reserved</div>
            <div className="flex text-xl lg:text-2xl gap-3 justify-center lg:justify-end items-center">
                <a href="https://www.linkedin.com/in/yadu-krishnan-web-developer" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><FaLinkedin /></a>
                <a href="https://github.com/YaduKdev" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400"><FaGithub /></a>
            </div>
        </div>
    </>
  )
}

export default Footer