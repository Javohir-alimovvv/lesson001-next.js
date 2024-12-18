import Image from 'next/image'
import React from 'react'
import kv from '@/assets/images/kv.png'
import card1 from '@/assets/images/card1.png'
import card2 from '@/assets/images/card2.png'
import card3 from '@/assets/images/card3.png'
const Compane = () => {
  return (
    <div className='w-full h-auto px-5 py-24 mt-20'>
      <div className='container mx-auto flex flex-col gap-5'>
        <div className='w-full flex justify-between items-center'>
          <div className='w-7 h-7 bg-[#FFD3AF]'></div>
          <Image src={kv} alt='kv' />
        </div>
        <p className='text-black uppercase text-sm font-light'>Company</p>
        <h3 className='text-5xl font-semibold text-black w-[660px] leading-snug max-md:text-2xl max-md:w-full max-sm:text-lg'>
          Award-winning Company seen and used by millions around the world.
        </h3>
        <p className='text-lg w-[720px] max-md:w-full max-sm:text-[14px]'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The Maker is a
          decentralized.
        </p>
        <div className='w-full grid grid-cols-3 mt-10'>
          <Image
            className='rounded-xl h-[446px] w-[95%] object-cover max-md:h-auto max-sm:rounded-lg'
            src={card1}
            alt='img'
          />
          <Image
            className='rounded-xl h-[446px] w-[95%] object-cover max-md:h-auto max-sm:rounded-lg'
            src={card2}
            alt='img'
          />
          <Image
            className='rounded-xl h-[446px] w-[95%] object-cover max-md:h-auto max-sm:rounded-lg'
            src={card3}
            alt='img'
          />
        </div>
      </div>
    </div>
  )
}

export default Compane
