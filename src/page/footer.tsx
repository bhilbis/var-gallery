import React from 'react'
import Link from 'next/link';
import { Bungee } from "next/font/google";

const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"],
});

const Footer = () => {
  return (
    <>
        <div className='text-white'>
            <h1 className={`text-center text-[80px] font-[400] ${bungee.className}`}>Creating sleek, <br />functional interfaces <br />for your ideas.</h1>
            
            <div className='text-[16px] font-medium text-center mt-20'>
                <a href="https://github.com/var-labs" title='Github' target='blank' className='mx-10'>Github</a>
                <a href="" title='Instagram' target='blank' className='mx-10'>Instagram</a>
                <a href="" title='Dribbble' target='blank' className='mx-10'>Dribbble</a>
                <a href="" title='Behance' target='blank' className='mx-10'>Behance</a>
                <a href="" title='Medium' target='blank' className='mx-10'>Medium</a>
            </div>
        </div>
    </>
  )
}

export default Footer
