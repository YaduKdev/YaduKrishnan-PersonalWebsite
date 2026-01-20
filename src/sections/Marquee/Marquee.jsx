import star from '/star-black.svg';
import {gsap} from 'gsap';

const Marquee = () => {
  return (
    <>
      <div className="py-28 lg:py-44 overflow-hidden text-black bg-white">
        {/* Marquee 1 */}
        <div className="whitespace-nowrap marquee-animation text-6xl lg:text-[7vw] font-heading font-semibold leading-none tracking-tight">
          <span onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="flex gap-4 lg:gap-8 mx-8">
            DEVELOP <img src={star} alt='spinning-asterisk' className='marquee-star w-[4.5vw]' />
            DEPLOY <img src={star} alt='spinning-asterisk' className='marquee-star w-[4.5vw]' />
            MAINTAIN <img src={star} alt='spinning-asterisk' className='marquee-star w-[4.5vw]' /> 
            DEVELOP <img src={star} alt='spinning-asterisk' className='marquee-star w-[4.5vw]' />
            DEPLOY <img src={star} alt='spinning-asterisk' className='marquee-star w-[4.5vw]' />
            MAINTAIN <img src={star} alt='spinning-asterisk' className='marquee-star w-[4.5vw]' />
          </span>
        </div>

        {/* Marquee 2 */}
        <div className="whitespace-nowrap marquee-animation-reverse text-6xl lg:text-[7vw] font-heading font-semibold leading-none tracking-tight">
          <span onMouseEnter={() =>gsap.to('#cursor', {scale: 8, duration: 0.3})} onMouseLeave={() =>gsap.to('#cursor', {scale: 1, duration: 0.3})} className="flex gap-4 lg:gap-8 mx-8">
            DEVELOP <img src={star} alt='spinning-asterisk' className='marquee-star-reverse w-[4.5vw]' />
            DEPLOY <img src={star} alt='spinning-asterisk' className='marquee-star-reverse w-[4.5vw]' />
            MAINTAIN <img src={star} alt='spinning-asterisk' className='marquee-star-reverse w-[4.5vw]' /> 
            DEVELOP <img src={star} alt='spinning-asterisk' className='marquee-star-reverse w-[4.5vw]' />
            DEPLOY <img src={star} alt='spinning-asterisk' className='marquee-star-reverse w-[4.5vw]' />
            MAINTAIN <img src={star} alt='spinning-asterisk' className='marquee-star-reverse w-[4.5vw]' />
          </span>
        </div>
      </div>
    </>
  )
}

export default Marquee