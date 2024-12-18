import Image from 'next/image'
import React from 'react'
import link1 from '@/assets/images/img1.png'
import link2 from '@/assets/images/img2.png'
import link3 from '@/assets/images/img3.png'
import link4 from '@/assets/images/img4.png'
import link5 from '@/assets/images/img5.png'
const Logo = () => {
  return (
    <section className='w-full h-auto py-9 px-5 bg-[#232536]'>
      <div className='container mx-auto flex items-center justify-between gap-2 max-sm:flex-wrap'>
        <div className='flex flex-col text-xl text-white max-xl:hidden'>
          <span className='text-sm text-gray-500'>Our Clients</span>
          We've Worked with
        </div>
        <Image className='w-52' src={link1} alt='image' />
        <Image className='w-52' src={link2} alt='image' />
        <Image className='w-52' src={link3} alt='image' />
        <Image className='w-52' src={link4} alt='image' />
        <Image className='w-52' src={link5} alt='image' />
      </div>
    </section>
  )
}

export default Logo
