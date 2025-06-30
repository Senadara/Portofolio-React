import React from "react"
import { TypeAnimation } from "react-type-animation"

export default function Banner() {
  return (
    <div
      id="home"
      className="section container mx-auto max-w-[1200px] px-3 items-center"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="w-full">
        {/* Header teks */}
        <div
          className="block text-center font-secondary font-black text-[30px]"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          Hello, I am
          <div>
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                3000,
                "Backend Developer",
                3000,
                "Designer",
                3000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="ml-3 text-secondary"
            />
          </div>
        </div>

        {/* Deskripsi */}
        <div
          className="text-center max-w-[700px] mx-auto text-gray-300 text-[16px] leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <p className="mb-4">
            A passionate Software Engineer driven by curiosity and an
            unstoppable desire to grow. I craft impactful, high-quality
            solutions with precision and creativity, always striving to push
            boundaries and deliver excellence.
          </p>
          <p
            className="font-bold text-gold text-center"
            data-aos="fade-in"
            data-aos-delay="900"
          >
            "Learning is not just a process, It’s a lifestyle"
          </p>
        </div>
      </div>
    </div>
  )
}
