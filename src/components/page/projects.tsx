import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <>
    <div className='pt-20 justify-center items-center text-white pb-96'>
      <p className='text-center font-[600] text-[46px] mb-[100px]'>Innovation and Creativity at Its Best.</p>

      <div className='relative flex flex-col items-center'>
        <div className='w-870 h-496 relative'>
        <Image
          src={"/assets/test.png"}
          alt='smkpurwosari'
          width={870}
          height={496}
          className='object-cover'
        />
        </div>

        <div className='w-full max-w-7xl mt-8 px-4'>
            <div className='flex justify-between items-center'>
              <div className='flex flex-col text-left ml-30'>
                <h1 className='font-semibold text-3xl mb-8'>SMK Negeri 1 Purwosari</h1>
                <p className='font-medium text-lg mb-4'>Website | School</p>
              </div>

              <div className='mr-30'>
                <button type='button' className='border px-6 py-3 rounded hover:bg-gray-400'>
                  Details
                </button>
              </div>
            </div>
          </div>

      </div>
    </div>
    </>
  )
}

export default Projects
