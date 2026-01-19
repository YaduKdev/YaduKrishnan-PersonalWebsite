const Services = () => {
  return (
    <>
      <div className="main-container pb-8 lg:pb-12">
        <h3>Skills</h3>
      </div>
      <div className="relative">
        <div className="bg-black text-white pt-16 lg:pt-20 pb-160 sticky top-4">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">01</span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-none">Frontend <br />(UI / UX)</h2>
            </div>
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">HTML, CSS, Javascript, React JS / Angular, Redux / NgRX, GSAP / Motion, MUI / Material UI / Shadcn / Bootstrap, SASS, Tailwind CSS</p>
            </div>
          </div>
        </div>
        <div className="bg-[#d8d8e0] text-black pt-16 lg:pt-20 pb-92 sticky top-1/3">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">02</span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-none">Backend</h2>
            </div>
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">Javascript, Node JS, Express, MongoDB / MySQL / Postgres, Socket IO, Rest APIs, Git</p>
            </div>
          </div>
        </div>
        <div className="bg-[#E9E9F0] text-black py-16 lg:py-20 sticky top-2/3">
          <div className="main-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="flex gap-6 lg:gap-8">
              <span className="text-gray-400 text-lg lg:text-2xl font-heading tracking-wide block mb-4">03</span>
              <h2 className="text-[8vw] md:text-6xl font-heading font-bold leading-none">Other Skills</h2>
            </div>
            <div className="flex items-center">
              <p className="text-lg lg:text-xl leading-relaxed">Python, Photoshop / GIMP, Premiere Pro / DaVinci Resolve, InDesign</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services