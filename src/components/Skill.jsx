import React from 'react'
import Image from 'next/image'
import { javascript, semrush } from '@/assets/skills'
import { devSkills } from '@/Constants'

const Skill = () => {
  return (
    <>
    {devSkills.map((skill)=>(
        <div key={skill.href} className='group relative flex cursor-pointer'>
            <Image src={skill.href} className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32
            filter group-hover:grayscale transition duration-300 ease-in-out'/>

            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
            group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>{skill.percent}</p>
                </div>
            </div>
        </div>
    ))}
    </>
  )
}

export default Skill



// <div className='group relative flex cursor-pointer'>
//         <Image src={javascript} className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32
//         filter group-hover:grayscale transition duration-300 ease-in-out'/>

//         <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
//          group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
//             <div className='flex items-center justify-center h-full'>
//                 <p className='text-3xl font-bold text-black opacity-100'>100%</p>
//             </div>
//         </div>
//     </div>