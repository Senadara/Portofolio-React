import React, { useState } from "react"

export default function Collab() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSend = (e) => {
    e.preventDefault()
    const mailto = `mailto:amni@gmail.com?subject=${encodeURIComponent(
      form.subject || "Collaboration Request"
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`
    )}`
    window.open(mailto, "_blank")
  }

  return (
    <section
      id="collab"
      className="min-h-[60vh] flex flex-col items-center justify-center container mx-auto max-w-[900px] px-4 text-white mt-20"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div
        className="w-full p-6 sm:p-10 rounded-xl border border-orange-500 bg-gradient-to-br from-orange-900/20 to-black/20 backdrop-blur-md"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <h2
          className="text-3xl sm:text-4xl font-bold text-center mb-8"
          data-aos="fade-down"
          data-aos-delay="600"
        >
          Let&apos;s work together!
        </h2>

        <form onSubmit={handleSend}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="flex flex-col gap-4"
              data-aos="fade-right"
              data-aos-delay="800"
            >
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="FULL NAME *"
                className="bg-transparent border-b border-white/30 focus:border-orange-500 outline-none py-2 text-white placeholder:text-gray-400 animated-underline"
                required
              />
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="PHONE (OPTIONAL)"
                className="bg-transparent border-b border-white/30 focus:border-orange-500 outline-none py-2 text-white placeholder:text-gray-400 animated-underline"
              />
            </div>
            <div
              className="flex flex-col gap-4"
              data-aos="fade-left"
              data-aos-delay="800"
            >
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="EMAIL *"
                className="bg-transparent border-b border-white/30 focus:border-orange-500 outline-none py-2 text-white placeholder:text-gray-400 animated-underline"
                required
              />
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="SUBJECT *"
                className="bg-transparent border-b border-white/30 focus:border-orange-500 outline-none py-2 text-white placeholder:text-gray-400 animated-underline"
                required
              />
            </div>
          </div>

          <input
            type="text"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="MESSAGE *"
            className="w-full bg-transparent border-b border-white/30 focus:border-orange-500 outline-none py-2 mt-6 text-white placeholder:text-gray-400 animated-underline"
            data-aos="fade-up"
            data-aos-delay="1000"
            required
          />

          <button
            type="submit"
            className="w-full mt-8 py-3 bg-gold text-black font-bold rounded-full hover:bg-yellow-500 transition text-lg shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="1200"
          >
            Send Email
          </button>
        </form>

        <p
          className="text-sm text-center mt-4 text-gray-400"
          data-aos="fade-in"
          data-aos-delay="1400"
        >
          Please fill in the information first
        </p>
      </div>
    </section>
  )
}
