import Image from 'next/image'
import React from 'react'
import Logo from '../../assets/images/Logo.svg'
import Link from 'next/link'
import { IoIosArrowRoundForward } from "react-icons/io";

const Header = () => {
  return (
    <>

      <header className="w-full h-20 bg-[#232536] flex items-center justify-center fixed top-0 left-0">
        <div className='container px-4 mx-auto '>
          <div className='flex items-center justify-center w-full h-full'>
            <nav className='flex items-center justify-between w-full h-full'>
              <Image src={Logo} alt="" />
              <ul className='flex items-center justify-center gap-8'>
                <li className='text-base font-medium text-[#FFFFFF] hover:text-[#FFD3AF]'>
                  <Link href={"/"}><span>Home</span></Link>
                </li>
                <li className='text-base font-medium text-[#FFFFFF] hover:text-[#FFD3AF]'>
                  <Link href={"/service"}><span>Service</span></Link>
                </li>
                <li className='text-base font-medium text-[#FFFFFF] hover:text-[#FFD3AF]'>
                  <Link href={"/compane"}><span>Company</span></Link>
                </li>
                <li className='text-base font-medium text-[#FFFFFF] hover:text-[#FFD3AF]'>
                  <Link href={"/career"}><span>Career</span></Link>
                </li>
                <li className='text-base font-medium text-[#FFFFFF] hover:text-[#FFD3AF]'>
                  <Link href={"/"}><span>Blog</span></Link>
                </li>
                <li className='text-base font-medium text-[#FFFFFF] hover:text-[#FFD3AF]'>
                  <Link href={"/"}><span>Contact us</span></Link>
                </li>
                <a href='/'>
                  <button className='bg-transparent text-[#FFFFFF] flex items-center justify-center gap-2 text-base font-medium hover:text-[#FFD3AF]'>Clone project <IoIosArrowRoundForward  className='text-2xl font-medium'/></button>
                </a>
              </ul>
            </nav>
          </div>
        </div>
      </header>

    </>
  )
}

export default Header