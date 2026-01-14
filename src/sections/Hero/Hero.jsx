import Button from "../../components/Button/Button"

const Hero = () => {
  return (
    <>
        <div>
            <div className="main-container h-screen lg:py-16 flex flex-col lg:justify-center items-start max-lg:pt-40">
                <h1 className="text-3xl lg:text-[3.2vw] uppercase font-heading font-semibold">Yadu Krishnan</h1>
                <h2 className="text-6xl lg:text-[8vw] font-heading font-bold leading-none tracking-tight mt-3 mb-6">Full-stack <br /><span className="text-stroke">Developer</span></h2>
                <Button text="Download CV" />
            </div>
        </div>
    </>
  )
}

export default Hero