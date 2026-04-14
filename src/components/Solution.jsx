import laptopImg from "../assets/image 34.png"


export default function Solution() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        
        <div className="animate-slide-in-left">
          <h2 className="text-3xl font-semibold text-gray-800 leading-snug">
            Looking for a <span className="font-bold">solution</span> 
            <br /> for your business?
          </h2>

          <p className="mt-4 text-gray-500 text-sm leading-relaxed max-w-sm">
            Check out Sogolytics enterprise feedback and experience management platform.
          </p>

          <div className="mt-6 flex gap-5">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-md text-sm transition-all duration-300 hover:scale-105">
              Learn more
            </button>

            <button className="border border-cyan-500 text-cyan-500 px-5 py-2 rounded-md text-sm hover:bg-cyan-50 transition-all duration-300 hover:scale-105">
              Schedule a consultation
            </button>
          </div>
        </div>

        
        <div className="flex justify-center md:justify-end animate-slide-in-right">
          <img
            src={laptopImg}
            alt="solution"
            className="w-[380px] rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
          />
        </div>

      </div>
    </section>
  )
}