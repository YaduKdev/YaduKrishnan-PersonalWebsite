import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import LaptopContainer from './LaptopContainer'
import Button from "../../components/Button/Button"

const Hero = () => {
  return (
    <>
        <div className="bg-[#9F3200]">
            <div className="main-container h-screen lg:py-16 flex flex-col lg:justify-center items-center max-lg:pt-40">
              <div className='flex flex-col justify-center items-center mt-30 lg:mt-0'>
                <h1 className="text-2xl md:text-3xl uppercase font-heading font-semibold">Yadu Krishnan</h1>
                <h2 className="text-2xl md:text-6xl font-heading font-bold leading-none tracking-tight">Full-stack Developer</h2>
              </div>
              <div className='w-full h-[35%] sm:h-1/2 md:h-2/3 lg:3/4'>
                <Canvas camera={{fov: 12, position: [0, -10, 220]}}>
                  <OrbitControls />
                  <Environment files={["/studio_small_09_4k.exr",]} />
                  <LaptopContainer />
                </Canvas>
              </div>
              <Button text="Download CV" className='border-[#4D1601] hover:border-[#691f01] bg-[#4D1601] hover:bg-[#691f01]' />
            </div>
        </div>
    </>
  )
}

export default Hero