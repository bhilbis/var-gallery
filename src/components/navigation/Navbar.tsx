import React from 'react';
import Image from 'next/image';
import arrowUp from '../../../public/assets/arrow-up.svg';

const functionNav = [
{
  nameText : "Members",
  id : '#members'
},
{
  nameText: "Projects",
  id : '#projects'
},
{
  nameText: "Service",
  id : '#service'
},
{
  nameText: "Let's Talk",
  id : '#service'
}
]

const Navbar = () => {
  return (
    <div className='fixed z-20 text-center bottom-0 container flex'>
      <div className='mx-auto bg-[#101D1F]  my-10 text-white rounded-full max-w-full'>
      <nav className='inline-flex flex-wrap w-[450px] items-center py-2 px-2 justify-between'>
      <button className='bg-[#AAC8CD] max-w-full w-[10%] m-1 rounded-full'><Image
      src={arrowUp}
      width={50}
      alt='arrow-up'
      /></button>
       {
        functionNav.map((index, item) => (
              <ul className=' py-2 my-1 px-2 '  key={item}>
                <li className='text-[16px] font-[500]' >
                  <a href={index.id}>{index.nameText}</a>
                </li>
              </ul>

        ))
      }
      </nav>
      </div>
    </div>
    )
}

export default Navbar
