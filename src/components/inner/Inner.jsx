import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Inner = () => {
  return (
    <div className='w-full h-auto px-5 py-28 mt-20'>
      <div className='container mx-auto flex items-center gap-52 max-xl:justify-between max-xl:gap-20 max-md:flex-col-reverse max-sm:flex-col-reverse'>
        <div className='flex flex-col gap-10 max-md:items-center max-sm:items-center '>
          <p className='text-sm uppercase font-semibold text-black'>
            CAREER AT Ether
          </p>
          <h2 className='text-5xl text-black max-w-[600px] leading-snug font-bold max-lg:text-2xl max-sm:text-center'>
            Full Stack Developer
          </h2>
          <p className='text-lg text-gray-500 max-w-[450px] leading-relaxed mb-5 max-md:text-center'>
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages.
          </p>
          <button className='w-56 h-16 flex items-center justify-center gap-5 text-white duration-300 bg-[#444CFC] text-lg rounded-lg border border-[#444CFC] hover:bg-transparent hover:text-[#444CFC]'>
            Apply Now
            <FaLongArrowAltRight />
          </button>
        </div>
        <div className='flex flex-col gap-5 justify-center w-[515px] h-80 rounded-lg bg-[#FFE0C7] py-10 px-20 max-sm:w-full max-sm:px-5'>
          <p className='text-black text-2xl font-semibold max-lg:text-xl max-sm:text-center'>
            Job Description
          </p>
          <p className='text-black text-lg max-lg:text-sm max-sm:text-center '>
            Remote, India , 4 to 5 Years Of Experience
          </p>
          <p className='text-black text-lg max-lg:text-sm max-sm:text-center '>
            Department: Product Engineering
          </p>

          <p className='text-black text-lg max-lg:text-sm max-sm:text-center '>
            Full Time 5 Position Available.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Inner
