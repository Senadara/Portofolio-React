import React, { useState, useEffect, useRef } from "react"
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa"
import { BsBoxArrowInUpRight } from "react-icons/bs"

export default function Portofolio() {
  const [projects, setProjects] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [fade, setFade] = useState(true)
  const sectionRef = useRef(null)

  useEffect(() => {
    fetch("https://portfolio.senadara.my.id/api/portfolios", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setProjects(data.data))
  }, [])

  const handlePrev = () => {
    setFade(false)
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
      setFade(true)
    }, 200)
  }

  const handleNext = () => {
    setFade(false)
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length)
      setFade(true)
    }, 200)
  }

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [activeIndex])

  if (!projects.length) return null

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="section container mx-auto max-w-[1200px] px-4 text-white flex flex-col items-center parallax-section"
    >
      <div className="parallax-overlay" />
      <div className="text-center mb-10" data-aos="fade-down">
        <h2 className="text-4xl font-bold mb-2">Portfolio Showcase</h2>
        <p className="text-gray-300 max-w-[600px] mx-auto">
          Select or navigate to explore my projects.
        </p>
      </div>
      <div
        className="relative w-full max-w-[800px] h-[400px] mx-auto overflow-hidden rounded-lg border border-white/20 backdrop-blur-sm bg-white/5 flex flex-col justify-center items-center text-center p-6 transition-all duration-500 mb-6"
        data-aos="fade-up"
      >
        <img
          src={projects[activeIndex]?.image}
          alt={projects[activeIndex]?.title}
          className={`w-full h-full object-cover absolute inset-0 opacity-40 transition-all duration-500 ${
            fade ? "scale-100 opacity-40" : "scale-95 opacity-0"
          }`}
        />
        <div
          className={`relative z-10 transition-all duration-500 ${
            fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <h3 className="text-2xl font-bold text-gold mb-2">
            {projects[activeIndex]?.title}
          </h3>
          <p className="text-gray-200 max-w-[500px] mx-auto">
            {projects[activeIndex]?.desc}
          </p>
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
        >
          <FaRegArrowAltCircleLeft
            size={30}
            className="text-gold hover:text-yellow-500 transition"
          />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
        >
          <FaRegArrowAltCircleRight
            size={30}
            className="text-gold hover:text-yellow-500 transition"
          />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
          <a
            href="/portfolio"
            className="bg-gold text-black px-6 py-1 rounded-full hover:bg-yellow-500 transition font-medium flex items-center gap-2"
          >
            See Further
            <BsBoxArrowInUpRight size={18} />
          </a>
        </div>
      </div>
      <div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 max-w-[800px] mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => {
              setFade(false)
              setTimeout(() => {
                setActiveIndex(index)
                setFade(true)
              }, 200)
            }}
            className={`overflow-hidden rounded-lg border cursor-pointer transition-all duration-300 ${
              activeIndex === index
                ? "border-yellow-500 scale-105"
                : "border-white/20"
            } hover:scale-110 hover:rotate-2 hover:shadow-2xl`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[80px] object-cover opacity-70 hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
