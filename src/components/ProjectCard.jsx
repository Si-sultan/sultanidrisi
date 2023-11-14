import React from 'react'
import Image from 'next/image'
import { netflix , nikestore } from '@/assets/projects'
import Link from 'next/link'
import { projects } from '@/Constants'

const ProjectCard = () => {
  return (
    <>
    {projects.map((project)=>(
        <div key={project.id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <Link href={project.href} target='blank' className=' filter grayscale hover:grayscale-0 border-[5px] border-[#F7AB0A]/50 duration-300'><Image src={project.image} width={700} height={700}/></Link>
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'>
                    <span className='underline decoration-[#F7AB0A]/50'>Project {project.id}:</span>{" "}   
                    {project.title}
                </h4>
                <p className='text-lg text-center md:text-left'>{project.caption}</p>
            </div>
        </div>
    ))}
    </>
  )
}

export default ProjectCard