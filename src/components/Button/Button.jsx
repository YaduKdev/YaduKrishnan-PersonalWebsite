import {gsap} from "gsap";

const Button = ({ text, className="" }) => {
  return (
    <>
        <a onMouseEnter={() =>gsap.to('#cursor', {scale: 0, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} href="" className={`uppercase font-heading border-2 text-center min-w-51.25 px-8 lg:px-12 text-lg md:text-xl py-2 lg:py-3 rounded-full transition-colors ease-in-out duration-200 ${className} cursor-[url('/pointer.png'),pointer]`}>{text}</a>
    </>
  )
}

export default Button