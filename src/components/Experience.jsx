import React from 'react'
import { ExperienceCard } from '.'
import { digihelp } from '@/assets/other assets'
import Image from 'next/image'
import { googlesearch, linkbuilding, offpage, onpage, semrush, seoaudit } from '@/assets/skills'

const Experience = () => {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center space-y-8 py-12'> 
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl xl:top-[35px] min-[250px]:tracking-[15px]'>
            Experience
        </h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin min-[250px]:pb-2'>
          <ExperienceCard />

          <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center
    bg-[#292929] p-10 hover:opacity-100 opacity-40 transition-opacity cursor-pointer duration-200 overflow-hidden min-[250px]:w-[400px] min-[250px]:gap-8 min-[250px]:pt-[20px]'>
        <div className='w-32 h-32 rounded-full md:rounded-full xl:w-[150px] xl:h-[150px] bg-white justify-center items-center min-[250px]:w-[60%] min-[250px]:h-[60%] min-[250px]:rounded-full min-[250px]:p-2'>
            <Image src={digihelp} alt="fourty60" width={125}  height={125} className='relative xl:top-[0px] object-cover object-center min-[250px]:top-2'/>
        </div>
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light min-[250px]:text-2xl'>Founder</h4>
            <p className=' font-bold text-2xl mt-1 min-[250px]:text-xl'>
                <a href='https://digihelp.co.in'>DigiHelp India</a>
            </p>
            <div className='flex space-x-2 my-2'>
                <Image src={onpage} width={35} height={35} className='w-10 h-10 rounded-full'/>
                <Image src={offpage} width={35} height={35} className='w-10 h-10 rounded-full'/>
                <Image src={linkbuilding} width={35} height={35} className='w-10 h-10 rounded-full'/>
                <Image src={semrush} width={35} height={35} className='w-10 h-10 rounded-full'/>
                <Image src={seoaudit} width={35} height={35} className='w-10 h-10 rounded-full'/>
                <Image src={googlesearch} width={35} height={35} className='w-10 h-10 rounded-full'/>

            </div>
            <p className=' uppercase py-5 text-gray-300'>May 2023 - Nov 2023</p>
            <ul className=' list-disc space-y-4 ml-5 text-lg min-[250px]:text-sm min-[250px]:space-y-1'>
                <li>OnPage Activities.</li>
                <li>Off Page Activities.</li>
                <li>Link Building.</li>
                <li>Keyword Research.</li>
                <li>Content Writing.</li>
                <li>Google Search Console.</li>

            </ul>
        </div>

    </article>



        </div>
    </div>
  )
}

export default Experience