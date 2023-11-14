import React from 'react'
import { fourty60 } from '@/assets/other assets'
import Image from 'next/image'
import { googlesearch, linkbuilding, offpage, onpage, semrush, seoaudit } from '@/assets/skills'
// import { Html } from 'next/document'
const ExperienceCard = () => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center
    bg-[#292929] p-10 hover:opacity-100 opacity-40 transition-opacity cursor-pointer duration-200 overflow-hidden'>
        <div className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] bg-white justify-center items-center'>
            <Image src={fourty60} alt="fourty60" width={200}  height={200} className='relative top-[48px]  object-cover object-center'/>
        </div>
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>SEO Executive</h4>
            <p className=' font-bold text-2xl mt-1'>
                Fourty60 Infotech
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
            <ul className=' list-disc space-y-4 ml-5 text-lg'>
                <li>OnPage Activities.</li>
                <li>Off Page Activities.</li>
                <li>Link Building.</li>
                <li>Keyword Research.</li>
                <li>Content Writing.</li>
                <li>Google Search Console.</li>

            </ul>
        </div>

    </article>
  )
}

export default ExperienceCard