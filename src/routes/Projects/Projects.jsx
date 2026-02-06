import { projects } from "../../Data/ProjectsData";
import { gsap } from "gsap";

const Projects = () => {
  return (
    <>
      <div>
        <div className="main-container py-28">
          <h2 onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="text-5xl md:text-6xl lg:text-[8vw] font-heading font-bold uppercase leading-none tracking-tight text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8 lg:mt-16">
            {
              projects.map(({id, name, image, link, description, toolkit}) => (
                <a target="_blank" rel="noopener noreferrer" href={link} onMouseEnter={() =>gsap.to('#cursor', {scale: 0, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} key={id} className="overflow-hidden flex flex-col group cursor-[url('/pointer-white-96.png'),pointer]">
                  <div className="overflow-hidden rounded-2xl h-full">
                    <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <span className="uppercase leading-[1.4] lg:text-2xl font-heading mt-4 group-hover:text-zinc-400">{name}&nbsp;-&nbsp;<span className="font-body capitalize">{description}</span><br /><span className="text-zinc-400 text-lg font-extrabold uppercase">{toolkit}</span></span>
                </a>
              ))
            }
          </div>
          <div className="flex justify-center items-center mt-28 p-28">
            <p className="text-3xl font-heading font-light">
              <span onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})}>
                To View All Source Codes and My other Projects, Please Visit My&nbsp;
              </span>
              <a className="text-blue-500 font-extrabold hover:text-blue-700 cursor-[url('/pointer.png'),pointer]" href="https://github.com/YaduKdev" onMouseEnter={() =>gsap.to('#cursor', {scale: 0, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} target="_blank" rel="noopener noreferrer">
                Github
              </a> 
              <span onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})}>
                &nbsp;Profile
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects