import React from 'react'
import { Skill, SeoSkill } from '.'

const Skills = () => {
  return (
    <>
    <div className='flex flex-col xl:flex-row space-y-10'>
            <div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0
            mx-auto items-center'>
                <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl min-[250px]:text-xl min-[250px]:tracking-[15px]'>
                    SEO Skills
                </h3>
                <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm xl:left-12'>
                    Hover over a skill for currency proficiency
                </h3>
                <div className='grid grid-cols-4 gap-5'>
                    <SeoSkill />
                </div>

            </div>


            <div className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0
            mx-auto items-center xl:bottom-[50px]'>
                <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl min-[250px]:text-xl min-[250px]:tracking-[15px] '>
                    development
                </h3>
                <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm xl:left-12'>
                    Hover over a skill for currency proficiency
                </h3>
                <div className='grid grid-cols-4 gap-5'>
                    <Skill />
                </div>

            </div>
    </div>
    </>
  )
}

export default Skills