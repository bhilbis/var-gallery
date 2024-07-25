import React from 'react';
import { Bungee } from "next/font/google";

const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"],
});


const ContactsPage = () => {
  return (
    <>
        <div className='text-[#FFF] min-h-screen flex flex-col justify-center items-center'>
            <div className={`text-center font-[400] text-[72px] leading-none ${bungee.className}`}>
                <p className='mb-2'>Lets <span className='bg-[#548187] rounded-3xl'>hear</span> your</p>
                <p>suggestions and</p>  
                <p>wishes!</p>
            </div>
        </div>
    </>
  )
}

export default ContactsPage
