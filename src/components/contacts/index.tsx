import React from 'react';
import { Bungee } from "next/font/google";

const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"],
});


const ContactsPage = () => {
  return (
    <>
        <div className='text-[#FFF] my-auto'>
            <h1 className={`text-center font-[400] text-[72px] ${bungee.className}`}>
                Lets hear your suggestions and wishes!
            </h1>
        </div>
    </>
  )
}

export default ContactsPage
