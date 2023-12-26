'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight} from '@/utils/motion'
import Image from 'next/image'

const HeroContent = () => {
  return (
    <motion.div
    initial='hidden'
    animate='visible'
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >

    <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
       

        <motion.div
        variants={slideInFromLeft(0.5)}
        className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
        >
          <span>
        BEST
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>{' '} AMERICAN{' '}</span>
        PIZZAS
        </span>
        </motion.div>

       
      <div className='lg:bt-2'></div>
        <motion.a
        onClick={() => alert("I like pizza!")}
        variants={slideInFromLeft(1)}
        className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
        >
          I like it!

        </motion.a>
    </div>

    <motion.div
    variants={slideInFromRight(1.4)}
    className='w-full h-full flex justify-center items-center'
    >
      <Image
      src='/pizza5.png'
      alt='pizza'
      height={650}
      width={650}
      />
    </motion.div>
    </motion.div>

    
  )
}

export default HeroContent