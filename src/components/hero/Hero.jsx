import Image from 'next/image'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import hero from '@/assets/images/hero.png'
const Hero = () => {
  return (
    <main className='w-full h-auto bg-[#232536] p-5 mt-20'>
      <div className='container mx-auto flex justify-between items-center gap-20 py-32 max-lg:flex-col max-lg:py-5'>
        <div className='flex flex-col gap-5 max-lg:items-center'>
          <h2 className='text-white text-6xl max-w-[600px] leading-tight font-semibold max-xl:text-xl max-xl:w-full max-lg:text-center'>
            Transform Your Idea Into Reality with Finsweet
          </h2>
          <p className='text-lg text-gray-500 max-w-[520px] max-xl:text-sm max-xl:w-full max-lg:text-center'>
            The entire Finsweet team knows what's good with Webflow and you can
            too with 1 week and a good attitude.
          </p>
          <button className='w-56 h-16 flex items-center justify-center gap-5 text-white duration-300 bg-[#444CFC] text-xl rounded-lg border border-[#444CFC] hover:bg-transparent hover:text-[#444CFC]'>
            Request Quote
            <FaLongArrowAltRight />
          </button>
        </div>
        <Image
          className='w-[663px] h-full rounded-xl max-xl:w-[500px] max-lg:w-[80%] max-sm:w-full max-lg:h-[80%] max-sm:h-full'
          src={hero}
          alt='image'
        />
      </div>
    </main>
  )
}

export default Hero
