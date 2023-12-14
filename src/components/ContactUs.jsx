'use client'
import React from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useForm } from 'react-hook-form'


const ContactUs = () => {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (formData) => {
    window.location.href =`mailto:isultanjaved@gmail?subject=${formData.subject}&body=Hii, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly
    mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl xl:top-0 md:top-0 sm:h-screen min-[250px]:top-0 min-[250px]:tracking-[15px]'>
            Contact
        </h3>

        <div className='flex flex-col space-y-10 min-[250px]:space-y-5'>
            <h4 className='text-4xl font-semibold text-center min-[250px]:text-2xl'>
                I have got just what you need.{" "}
                <span className=' decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>
            </h4>

            <div className='space-y-10 min-[250px]:space-y-3'>
                <div className='flex items-center space-x-5 justify-center min-[250px]:space-x-3'>
                    <PhoneIcon className=' text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl min-[250px]:text-xl'>+919372562296</p>
                </div>

                <div className='flex items-center space-x-5 justify-center min-[250px]:space-x-3'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl min-[250px]:text-xl'>isultanjaved@gmail.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center min-[250px]:space-x-0'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl min-[250px]:text-xl'>Mumbai - 400051, Maharashtra, India</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='space-x-2 min-[250px]:space-y-2 min-[250px]:space-x-0 xl:space-x-2'>
                    <input placeholder='Name' {...register("name")}  className='contactInput' type="text" />
                    <input placeholder='Email' {...register("email")}  className='contactInput' type="email" />
                </div>

                <input placeholder='Subject' {...register("subject")}  className='contactInput min-[250px]:self-center xl:w-[590px]' type="text" />

                <textarea placeholder='Message' {...register("message")}  className='contactInput min-[250px]:self-center xl:w-[590px]'/>
                <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>

            </form>
        </div>
    </div>
  )
}

export default ContactUs