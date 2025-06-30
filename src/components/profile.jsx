import React from "react"

export default function Profile() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center container mx-auto max-w-[1200px] px-4 text-white relative">
      <div
        id="profile"
        className="flex flex-col lg:flex-row items-center justify-between w-full mt-12 relative gap-8"
      >
        {/* Kiri: Nama + Badge + Moto + Tombol */}
        <div
          className="flex flex-col items-center lg:items-start gap-4 max-w-[600px]"
          data-aos="fade-right"
        >
          {/* Nama elegan bertingkat */}
          <div className="text-center lg:text-left relative w-full mb-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-wide leading-tight">
              Septian
            </h1>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-wide leading-tight">
              <span className="text-gold">Nanda</span> Saputra
            </h2>
            <div className="absolute left-1/2 lg:left-28 top-10 w-[200px] h-[10px] bg-gold/30 blur-md -translate-x-1/2 lg:translate-x-0 rotate-2"></div>
          </div>

          {/* Badge dekat teks kiri */}
          <div
            className="backdrop-blur-md bg-white/10 border border-white/20 px-4 py-1 rounded-full text-sm font-semibold text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Available for project
          </div>

          {/* Moto */}
          <p
            className="text-lg sm:text-xl text-center lg:text-left font-light leading-relaxed max-w-[350px]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Building impactful digital experiences with passion and curiosity.
          </p>

          {/* Tombol */}
          <button
            className="bg-gold text-black px-6 py-2 rounded-full hover:bg-yellow-500 transition mt-2"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Let's Collaborate
          </button>
        </div>

        {/* Foto di tengah sempurna */}
        <div
          className="flex-1 flex justify-center items-center order-first lg:order-none"
          data-aos="zoom-in"
        >
          <div className="relative w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]">
            <img
              src="/images/profile2.png"
              alt="Profile"
              className="w-full h-full object-cover"
              style={{
                maskImage:
                  "radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 70%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 70%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Kalimat Pemisah */}
      <p
        className="mt-12 text-lg sm:text-xl text-center font-light max-w-[600px]"
        data-aos="fade-up"
      >
        I combine my skills to help turn your ideas into reality. 
      </p>

      {/* Skill Set Grid */}
      <div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 max-w-[700px] mx-auto mt-8"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {[
          {
            name: "React",
            icon: "/images/1.png",
            desc: "Building dynamic UIs",
          },
          { name: "Node.js", icon: "/images/2.png", desc: "Server-side logic" },
          {
            name: "Tailwind",
            icon: "/images/3.png",
            desc: "Modern CSS utilities",
          },
          { name: "Figma", icon: "/images/4.png", desc: "UI/UX Design" },
          { name: "Git", icon: "/images/5.png", desc: "Version control" },
          {
            name: "Express",
            icon: "/images/6.png",
            desc: "Fast backend framework",
          },
        ].map((skill, index) => (
          <div
            key={index}
            className="group relative w-[100px] h-[100px] flex flex-col items-center justify-center cursor-pointer overflow-hidden backdrop-blur-sm bg-white/5 border border-white/20 rounded-lg transition-all duration-500 hover:border-yellow-500 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={300 + index * 100}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-8 h-8 object-contain"
            />
            <p className="text-white text-sm mt-2">{skill.name}</p>
            {/* Hover Description */}
            <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex items-center justify-center text-xs text-white text-center px-2 transition-all duration-300">
              {skill.desc}
            </div>
            {/* Gradient Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 via-orange-500 to-yellow-400 opacity-0 group-hover:opacity-20 transition-all duration-500 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  )
}
