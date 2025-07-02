import React, { useEffect, useRef } from "react"
import { TypeAnimation } from "react-type-animation"

const codeSymbols = [
  "{ }",
  "< />",
  "()",
  ";",
  "const",
  "let",
  "=>",
  "[ ]",
  "if",
  "</>",
]

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function FloatingCodes() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const symbols = []
    for (let i = 0; i < 10; i++) {
      const el = document.createElement("div")
      el.innerText = codeSymbols[getRandomInt(0, codeSymbols.length - 1)]
      el.style.position = "absolute"
      el.style.left = `${getRandomInt(5, 90)}%`
      el.style.top = `${getRandomInt(10, 80)}%`
      el.style.fontSize = `${getRandomInt(18, 36)}px`
      el.style.color = "#bfa44d"
      el.style.opacity = 0.15 + Math.random() * 0.25
      el.style.pointerEvents = "none"
      el.style.animation = `floatBannerCode ${getRandomInt(
        6,
        12
      )}s ease-in-out infinite alternate`
      container.appendChild(el)
      symbols.push(el)
    }
    return () => {
      symbols.forEach((el) => container.removeChild(el))
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  )
}

export default function Banner() {
  return (
    <div
      id="home"
      className="section container mx-auto max-w-[1200px] px-3 items-center relative"
      data-aos="fade-up"
      data-aos-duration="1500"
      style={{ overflow: "hidden" }}
    >
      <FloatingCodes />
      <div className="w-full relative z-10">
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
            "Learning is not just a process, It's a lifestyle"
          </p>
        </div>
      </div>
    </div>
  )
}
