import React from 'react'
import { BiHomeAlt, BiUser, BiCodeAlt } from "react-icons/bi";
import { Link } from "react-scroll";

export default function Navigation() {
  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 
                    lg:top-1/2 lg:left-5 lg:right-auto lg:bottom-auto lg:translate-y-[-50%]">
      <div className="flex justify-between items-center bg-[#1e1e1e] shadow-lg shadow-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-gray-700 max-w-[250px] w-full 
                      lg:flex-col lg:h-[200px] lg:w-[60px]">

        {/* Home Button */}
        <Link
          to="home"
          activeClass="active"
          className="flex flex-col justify-center items-center w-[50px] h-[50px] hover:text-cyan-400 text-gray-300 cursor-pointer transition-all duration-300"
          offset={-100}
          smooth={true}
          spy={true}
        >
          <BiHomeAlt size={24} />
          <span className="text-[10px] mt-1 hidden lg:block">Home</span>
        </Link>

        {/* Profile Button */}
        <Link
          to="profile"
          activeClass="active"
          className="flex flex-col justify-center items-center w-[50px] h-[50px] hover:text-cyan-400 text-gray-300 cursor-pointer transition-all duration-300"
          offset={-100}
          smooth={true}
          spy={true}
        >
          <BiUser size={24} />
          <span className="text-[10px] mt-1 hidden lg:block">Profile</span>
        </Link>

        {/* Portfolio Button */}
        <Link
          to="portfolio"
          activeClass="active"
          className="flex flex-col justify-center items-center w-[50px] h-[50px] hover:text-cyan-400 text-gray-300 cursor-pointer transition-all duration-300"
          offset={-100}
          smooth={true}
          spy={true}
        >
          <BiCodeAlt size={24} />
          <span className="text-[10px] mt-1 hidden lg:block">Portfolio</span>
        </Link>

      </div>
    </div>
  );
}
