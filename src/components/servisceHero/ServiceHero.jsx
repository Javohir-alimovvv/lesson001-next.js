import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

const ServiceHero = () => {
  return (
    <div className='w-full h-auto px-5 py-28 bg-[#FFE6D2] mt-20'>
      <div className='container mx-auto flex items-center gap-96 max-xl:justify-between max-xl:gap-20 max-sm:flex-col-reverse'>
        <div className='flex flex-col gap-5 max-sm:items-center'>
          <p className='text-sm uppercase font-semibold text-black'>
            Our Services
          </p>
          <h2 className='text-5xl text-black max-w-[600px] leading-snug font-bold max-lg:text-2xl max-sm:text-center'>
            We Build Software Solutionthat Solve Clients Business Challenges
          </h2>
          <p className='text-lg text-gray-500 max-w-[620px] leading-relaxed mb-10 mt-2 max-sm:text-center'>
            Through True Rich Attended does no end it his mother since
            favourable real had half every him case in packages enquire we up
            ecstatic.
          </p>
          <button className='w-56 h-16 flex items-center justify-center gap-5 text-white duration-300 bg-[#444CFC] text-lg rounded-lg border border-[#444CFC] hover:bg-transparent hover:text-[#444CFC]'>
            Request Quote
            <FaLongArrowAltRight />
          </button>
        </div>
        <div className='flex flex-col gap-5'>
        <p className='text-black text-2xl font-semibold max-lg:text-xl max-sm:text-center'>
            Technical support
          </p>
          <p className='text-black text-2xl font-semibold flex gap-5 items-center max-lg:text-xl max-sm:justify-center'>
            Development <FaLongArrowAltRight />
          </p>
          <p className='text-black text-2xl font-semibold max-lg:text-xl max-sm:text-center'>
            AWS/Azure{' '}
          </p>
          <p className='text-black text-2xl font-semibold max-lg:text-xl max-sm:text-center'>
            Consulting
          </p>
          <p className='text-black text-2xl font-semibold max-lg:text-xl max-sm:text-center'>
            Information Technology
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServiceHero
