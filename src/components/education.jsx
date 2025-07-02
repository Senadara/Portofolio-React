import React, { useRef, useEffect, useState } from "react"

const educationData = [
  {
    school: "Institut Teknologi Sepuluh Nopember (ITS)",
    degree: "Bachelor of Computer Science",
    year: "2019 - 2023",
    desc: "Focused on software engineering, web development, and UI/UX design. Graduated with honors.",
  },
  {
    school: "SMA Negeri 1 Surabaya",
    degree: "Science Major",
    year: "2016 - 2019",
    desc: "Active in science club and IT extracurriculars. Graduated top 5% of class.",
  },
]

export default function Education() {
  const sectionRef = useRef(null)
  const [education, setEducation] = useState(educationData)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const offset = window.pageYOffset
        sectionRef.current.style.backgroundPositionY = `${offset * 0.25}px`
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    fetch("https://portfolio.senadara.my.id/api/education", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setEducation(data.data))
  }, [])

  return (
    <section
      ref={sectionRef}
      id="education"
      className="section container mx-auto max-w-[1200px] px-4 text-white flex flex-col items-center parallax-section"
      //   style={{ backgroundImage: "url('/images/mainbg.jpeg')" }}
    >
      <div className="parallax-overlay" />
      <div className="text-center mb-10" data-aos="fade-down">
        <h2 className="text-4xl font-bold mb-2 text-gold">Education</h2>
        <p className="text-gray-300 max-w-[600px] mx-auto">
          My academic background and learning journey.
        </p>
      </div>
      <div
        className="w-full flex flex-col md:flex-row gap-8 justify-center items-stretch"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="flex-1 border border-orange-500 rounded-xl p-6 shadow-lg backdrop-blur-md min-w-[260px] max-w-[400px] mx-auto mb-4 md:mb-0 bg-gradient-to-br from-orange-900/20 to-black/20"
            data-aos="zoom-in"
            data-aos-delay={400 + idx * 200}
          >
            <div className="flex justify-end mb-2">
              <span className="text-2xl animate-float">🎓</span>
            </div>
            <h3 className="text-2xl font-bold text-gold mb-1">{edu.school}</h3>
            <div className="text-lg font-semibold mb-1">{edu.degree}</div>
            <div className="text-sm text-gray-400 mb-2">{edu.year}</div>
            <p className="text-gray-200 text-sm">{edu.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
