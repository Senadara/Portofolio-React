import React, { useRef, useEffect } from "react"
import { LiaAwardSolid } from "react-icons/lia"

const achievementData = [
  {
    title: "UI/UX Design Competition Winner",
    event: "National IT Expo 2022",
    desc: "Won 1st place for innovative mobile app design.",
    year: "2022",
  },
  {
    title: "Best Graduate Project",
    event: "ITS Computer Science",
    desc: "Recognized for outstanding final year project in web development.",
    year: "2023",
  },
  {
    title: "Hackathon Finalist",
    event: "CodeFest Indonesia",
    desc: "Reached finals for building a real-time collaboration tool.",
    year: "2021",
  },
]

export default function Achievement() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const offset = window.pageYOffset
        sectionRef.current.style.backgroundPositionY = `${offset * 0.2}px`
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="achievement"
      className="section container mx-auto max-w-[1200px] px-4 text-white flex flex-col items-center parallax-section"
      //   style={{ backgroundImage: "url('/images/mainbg.jpeg')" }}
    >
      <div className="parallax-overlay" />
      <div className="text-center mb-10" data-aos="fade-down">
        <h2 className="text-4xl font-bold mb-2 text-gold flex items-center justify-center gap-2">
          <LiaAwardSolid />
          Achievement
        </h2>
        <p className="text-gray-300 max-w-[600px] mx-auto">
          Awards and recognitions from my journey so far.
        </p>
      </div>
      <div
        className="w-full flex flex-col md:flex-row gap-8 justify-center items-stretch"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {achievementData.map((ach, idx) => (
          <div
            key={idx}
            className="flex-1 border border-orange-500 rounded-xl p-6 shadow-lg backdrop-blur-md min-w-[260px] max-w-[400px] mx-auto mb-4 md:mb-0 bg-gradient-to-br from-orange-900/20 to-black/20"
            data-aos="zoom-in"
            data-aos-delay={400 + idx * 200}
          >
            <div className="flex items-center gap-2 mb-2">
              <LiaAwardSolid className="text-gold" size={24} />
              <h3 className="text-xl font-bold text-gold">{ach.title}</h3>
            </div>
            <div className="text-md font-semibold mb-1">{ach.event}</div>
            <div className="text-sm text-gray-400 mb-2">{ach.year}</div>
            <p className="text-gray-200 text-sm">{ach.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
