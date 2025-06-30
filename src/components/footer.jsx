export default function Footer() {
  return (
    <footer className="w-full bg-black py-10 text-white border-t border-white/10 mt-20">
      <div className="container mx-auto max-w-[1200px] px-4 flex flex-col items-center gap-6">
        
        {/* Teks besar */}
        <h2 className="text-4xl font-bold">Let&apos;s Work</h2>

        {/* Email button */}
        <a
          href="mailto:amni@gmail.com"
          className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          amni@gmail.com
        </a>

        {/* Navigasi */}
        <div className="flex gap-8 text-sm text-gray-400">
          <a href="#about" className="hover:text-orange-500 transition">About us</a>
          <a href="#collab" className="hover:text-orange-500 transition">Contact us</a>
          <a href="#portofolio" className="hover:text-orange-500 transition">Work</a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 mt-6 flex justify-between w-full max-w-[1200px]">
          <span>© 2024 Septian Nanda. All Rights Reserved.</span>
          <span>Designed by Septian Nanda</span>
        </div>
      </div>
    </footer>
  );
}
