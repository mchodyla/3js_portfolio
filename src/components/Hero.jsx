import { motion } from 'framer-motion';

import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute
      inset-0 top-[120px] max-w-7xl mx-auto flex flex-row
      items-start gap-5`}>

        <div className='flex flex-col justify-center items-center mt-5'>
          <div className={`w-5 h-5 rounded-full bg-[#f94c10]`} />
          <div className={`w-1 sm:h-80 h-40 bg-gradient-to-b from-[#f94c10]`} />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} drop-shadow-xl font-thin`}>
            Hi, I am <span className={`text-[#f94c10] font-extralight`}>Matthew Going</span>
          </h1>
          <div className='py-5 flex flex-row justify-center'>
            <p className={`${styles.heroSubText} mt-2 text-white-100 font-thin text-7xl`}>I am&nbsp;
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'a Developer',
                  2000, // wait 1s before replacing "Mice" with "Hamsters"
                  'a Musician',
                  2000,
                  'a Producer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', paddingLeft: '5px' }}
                repeat={Infinity}
                className='font-thin mt-2 drop-shadow-lg'
              />
            </p>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center
      items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary
          flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero