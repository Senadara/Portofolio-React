import React from "react"
import { BiHomeAlt, BiUser, BiCodeAlt } from "react-icons/bi"
import { BsMortarboard } from "react-icons/bs"
import { LiaAwardSolid } from "react-icons/lia"
import { Link } from "react-scroll"

export default function Navigation() {
  return (
    <div
      className="fixed bottom-6 left-0 right-0 flex justify-center z-50 
                    lg:top-1/2 lg:left-5 lg:right-auto lg:bottom-auto lg:translate-y-[-50%]"
    >
      <div
        className="flex justify-between items-center bg-[#1e1e1e] shadow-lg shadow-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-gray-700 max-w-[320px] w-full 
                      lg:flex-col lg:h-[320px] lg:w-[60px]"
      >
        {/* Home Button */}
        <Link
          to="home"
          activeClass="active"
          className="group flex flex-col justify-center items-center w-[50px] h-[50px] text-gray-300 cursor-pointer transition-all duration-300 hover:text-gold"
          offset={-100}
          smooth={true}
          spy={true}
        >
          <BiHomeAlt size={24} />
          <span className="text-[10px] mt-1 hidden group-hover:block">
            Home
          </span>
        </Link>

        {/* Profile Button */}
        <Link
          to="profile"
          activeClass="active"
          className="group flex flex-col justify-center items-center w-[50px] h-[50px] text-gray-300 cursor-pointer transition-all duration-300 hover:text-gold"
          offset={-100}
          smooth={true}
          spy={true}
        >
          <BiUser size={24} />
          <span className="text-[10px] mt-1 hidden group-hover:block">
            Profile
          </span>
        </Link>

        {/* Education Button */}
        <Link
          to="education"
          activeClass="active"
          className="group flex flex-col justify-center items-center w-[50px] h-[50px] text-gray-300 cursor-pointer transition-all duration-300 hover:text-gold"
          offset={-100}
          smooth={true}
          spy={true}
        >
          <BsMortarboard size={24} />
          <span className="text-[10px] mt-1 hidden group-hover:block">
            Education
          </span>
        </Link>

        {/* Portfolio Button */}
        <Link
          to="portfolio"
          activeClass="active"
          className="group flex flex-col justify-center items-center w-[50px] h-[50px] text-gray-300 cursor-pointer transition-all duration-300 hover:text-gold"
          offset={-100}
          smooth={true}
          spy={true}
        >
          <BiCodeAlt size={24} />
          <span className="text-[10px] mt-1 hidden group-hover:block">
            Portfolio
          </span>
        </Link>

        {/* Achievement Button */}
        <Link
          to="achievement"
          activeClass="active"
          className="group flex flex-col justify-center items-center w-[50px] h-[50px] text-gray-300 cursor-pointer transition-all duration-300 hover:text-gold"
          offset={-100}
          smooth={true}
          spy={true}
        >
          <LiaAwardSolid size={26} />
          <span className="text-[10px] mt-1 hidden group-hover:block">
            Achievement
          </span>
        </Link>
      </div>
    </div>
  )
}
