import { gsap } from 'gsap'

const Services = () => {
  return (
    <>
      <div id='toolkit' className="main-container pb-8 lg:pb-12 bg-black">
        <h3 onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="uppercase">Toolkit</h3>
      </div>
      <div className="relative cursor-[url('/cursor-black.png'),pointer]">
        <div className="bg-gray-400 text-black pt-16 lg:pt-20 pb-160 sticky top-4">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="flex gap-6 lg:gap-8">
              <span onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="text-gray-800 text-lg lg:text-2xl font-heading tracking-wide block mb-4">01</span>
              <h2 onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="text-[8vw] md:text-6xl font-heading font-bold leading-none">Frontend <br />(UI / UX)</h2>
            </div>
            <div className="flex items-center">
              <p onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="text-lg lg:text-3xl leading-relaxed uppercase">HTML, CSS, Javascript, React JS / Angular, Redux / NgRX, GSAP / Motion, MUI / Material UI / Shadcn / Bootstrap, SASS, Tailwind CSS</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 text-black pt-16 lg:pt-20 pb-92 sticky top-1/3">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="flex gap-6 lg:gap-8">
              <span onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="text-gray-800 text-lg lg:text-2xl font-heading tracking-wide block mb-4">02</span>
              <h2 onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="text-[8vw] md:text-6xl font-heading font-bold leading-none">Backend</h2>
            </div>
            <div className="flex items-center">
              <p onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="text-lg lg:text-3xl leading-relaxed uppercase">Javascript, Node JS, Express, MongoDB / MySQL / Postgres, Socket IO, Rest APIs, Git</p>
            </div>
          </div>
        </div>
        <div className="bg-white text-black py-16 lg:py-20 sticky top-2/3">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="flex gap-6 lg:gap-8">
              <span onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="text-gray-800 text-lg lg:text-2xl font-heading tracking-wide block mb-4">03</span>
              <h2 onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="text-[8vw] md:text-6xl font-heading font-bold leading-none">Other Tools</h2>
            </div>
            <div className="flex items-center">
              <p onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="text-lg lg:text-3xl leading-relaxed uppercase">Python, Photoshop / GIMP, Premiere Pro / DaVinci Resolve, InDesign</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services