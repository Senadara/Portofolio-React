import React from "react"
import { BsGithub, BsLinkedin } from "react-icons/bs"

export default function Header() {
  return (
    <div className="container mx-auto max-w-[1200px] px-3 relative lg:absolute left-0 right-0">
      <div className="flex justify-between py-5 items-center">
        {/* Nama dan Title */}
        <div
          className="font-secondary"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <a href="/">
            <h1 className="text-[30px] leading-none font-bold bg-gradient-to-r from-[#bfa44d] to-[#8d6b20] text-transparent bg-clip-text">
              PORTOFOLIO
            </h1>
            <h4 className="font-normal leading-none text-gray-300 tracking-wide">
              SEPTIAN NANDA SAPUTRA
            </h4>
          </a>
        </div>

        {/* Social Media Icons */}
        <div
          className="flex items-center space-x-3"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="text-[20px] text-gold hover:text-gold/80 transition-colors duration-300" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="text-[20px] text-gold hover:text-gold/80 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </div>
  )
}
