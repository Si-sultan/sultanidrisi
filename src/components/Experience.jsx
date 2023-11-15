import React from 'react'
import { ExperienceCard } from '.'

const Experience = () => {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center space-y-8 py-12'> 
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl xl:top-[35px]'>
            Experience
        </h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin min-[250px]:pb-2'>
          <ExperienceCard />

        </div>
    </div>
  )
}

export default Experience