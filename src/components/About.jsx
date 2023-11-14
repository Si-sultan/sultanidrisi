'use client'
import React from 'react'
import Image from 'next/image'
import { profile } from '@/assets/other assets'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="flex justify-wrap space-y-8 items-center max-xl:flex-col-reverse gap-10 max-container h-screen">
      <div className="flex-1">
      <motion.picture initial={{x: -200, opacity: 0,}} transition={{duration: 1.2,}} whileInView={{opacity: 1, x: 0,}} viewport={{once: true}}>
        <Image
          src={profile}
          width={200}
          height={200}
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />
      </motion.picture>
      </div>
      <div className="flex flex-1 flex-col">
      <h4 className='text-4xl font-semibold'>Here is a {" "}
         <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "} background
      </h4>
        <p className="mt-4 lg:max-w-lg">
        I am Sultan Idrisi, a passionate developer with a love for all things tech. Here, I embark on a digital journey, exploring the realms of coding and design. As a devoted explorer in the realm of development, I am constantly pushing boundaries, delving into new technologies and frameworks. Join me on this exhilarating journey as we venture together into the world of bits and bytes, where innovation and creativity intertwine. 
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
        Here, I'll share my insights, discoveries, and musings, offering a glimpse into the mind of a tech voyager.
        </p>
      </div>
    </div>
  )
}

export default About





{/* <motion.picture initial={{x: -200, opacity: 0,}} transition={{duration: 1.2,}} whileInView={{opacity: 1, x: 0,}} viewport={{once: true}}> */}