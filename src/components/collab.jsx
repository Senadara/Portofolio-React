export default function Collab() {
  return (
    <section
      id="collab"
      className="min-h-[60vh] flex flex-col items-center justify-center container mx-auto max-w-[900px] px-4 text-white mt-20"
    >
      <div className="w-full p-6 sm:p-10 rounded-xl border border-orange-500 bg-gradient-to-br from-orange-900/20 to-black/20 backdrop-blur-md">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
          Let&apos;s work together!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="FULL NAME *"
              className="bg-transparent border-b border-white/30 focus:border-orange-500 outline-none py-2 text-white placeholder:text-gray-400"
            />
            <input
              type="text"
              placeholder="PHONE (OPTIONAL)"
              className="bg-transparent border-b border-white/30 focus:border-orange-500 outline-none py-2 text-white placeholder:text-gray-400"
            />
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="FULL NAME *"
              className="bg-transparent border-b border-white/30 focus:border-orange-500 outline-none py-2 text-white placeholder:text-gray-400"
            />
            <input
              type="text"
              placeholder="SUBJECT *"
              className="bg-transparent border-b border-white/30 focus:border-orange-500 outline-none py-2 text-white placeholder:text-gray-400"
            />
          </div>
        </div>

        <input
          type="text"
          placeholder="PHONE (OPTIONAL)"
          className="w-full bg-transparent border-b border-white/30 focus:border-orange-500 outline-none py-2 mt-6 text-white placeholder:text-gray-400"
        />

        <p className="text-sm text-center mt-4 text-gray-400">
          Please fill in the information first
        </p>
      </div>
    </section>
  );
}
