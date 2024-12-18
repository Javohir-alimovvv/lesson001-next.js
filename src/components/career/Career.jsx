import Image from 'next/image'
import React from 'react'
import career from '@/assets/images/career.png'
const Career = () => {
  return (
    <div className='w-full h-auto px-5 py-24 mt-20'>
      <div className='container mx-auto flex flex-col items-center justify-center gap-5'>
        <p className='text-black uppercase text-sm font-light'>
          CAREER AT FINSWEET
        </p>
        <h3 className='text-5xl font-semibold text-center text-black w-[660px] leading-snug max-md:text-2xl max-md:w-full max-sm:text-lg'>
          We hired people who are Always Passionate about what they do
        </h3>
        <p className='text-lg w-[600px] text-center max-md:w-full max-sm:text-[14px]'>
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire we up ecstatic unsatiable saw.
        </p>
        <Image
          className='rounded-xl h-auto w-[80%] object-cover max-md:h-auto max-sm:rounded-lg'
          src={career}
          alt='img'
        />
        <p className='text-black uppercase text-sm font-semibold mt-20'>
          See Our open positions 👇
        </p>
      </div>
    </div>
  )
}

export default Career
