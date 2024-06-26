import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <>
        <div className="container items-center flex justify-center">
          <Link href="/library" className="block text-md font-[800] uppercase text-[15px] text-gray-500 hover:text-white md:px-3 xl:px-5 xl:text-center">MY LIBRARY</Link>
          <Link href="/topics" className="block text-md font-[800] uppercase text-[15px] text-gray-500 hover:text-white md:px-3 xl:px-5 xl:text-center">Topics</Link>
          <Link href="/series" className="block text-md font-[800] uppercase text-[15px] text-gray-500 hover:text-white md:px-3 xl:px-5 xl:text-center">Series</Link>
          <Link href="/path" className="block text-md font-[800] uppercase text-[15px] text-gray-500 hover:text-white md:px-3 xl:px-5 xl:text-center">Path</Link>
          <Link href="/larabits" className="block text-md font-[800] uppercase text-[15px] text-gray-500 hover:text-white md:px-3 xl:px-5 xl:text-center">Larabits</Link>
          <Link href="/forum" className={`block text-md font-[800] uppercase text-[15px] text-white underline underline-offset-[13px] decoration-4 decoration-[#1B55AC]' : 'text-gray-500 hover:text-white'} md:px-3 xl:px-5 xl:text-center`}>Forum</Link>
        </div>
        </>
    )
}

export default Navbar