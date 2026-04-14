import createIcon from "../assets/Group 127.png"
import distributeIcon from "../assets/Group 128.png"
import collectIcon from "../assets/Group 129.png"
import analyzeIcon from "../assets/Group 130.png"
import screenshot from "../assets/Screenshot 2022-08-31 at 12.37 1.png"


import illustration from "../assets/Frame 77.png"

export default function Features() {
  return (
    <section className="py-16">

     
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-xs tracking-[0.25em] text-cyan-500 font-semibold uppercase">
          Built for people
        </p>

        <h2 className="mt-4 text-4xl font-semibold text-gray-800">
          Easy for beginners. <span className="font-bold">Powerful for experts.</span>
        </h2>

        
        <div className="flex justify-center gap-12 mt-10 text-sm text-gray-500">

          <div className="flex items-center gap-2 border-b-2 border-cyan-500 pb-2 cursor-pointer transition-all duration-300 hover:opacity-100">
            <img src={createIcon} className="w-4 transition-transform duration-300 hover:scale-110" />
            Create
          </div>

          <div className="flex items-center gap-2 opacity-60 cursor-pointer transition-all duration-300 hover:opacity-100 hover:border-b-2 hover:border-cyan-500 hover:pb-2">
            <img src={distributeIcon} className="w-4 transition-transform duration-300 hover:scale-110" />
            Distribute
          </div>

          <div className="flex items-center gap-2 opacity-60 cursor-pointer transition-all duration-300 hover:opacity-100 hover:border-b-2 hover:border-cyan-500 hover:pb-2">
            <img src={collectIcon} className="w-4 transition-transform duration-300 hover:scale-110" />
            Collect
          </div>

          <div className="flex items-center gap-2 opacity-60 cursor-pointer transition-all duration-300 hover:opacity-100 hover:border-b-2 hover:border-cyan-500 hover:pb-2">
            <img src={analyzeIcon} className="w-4 transition-transform duration-300 hover:scale-110" />
            Analyze
          </div>

        </div>

      </div>


      
      <div className="bg-[#EDF6F7] mt-12 py-20">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

         

          <div className="animate-slide-in-left">

  <h2 className="mt-2 text-2xl font-bold text-gray-900">
    Create
  </h2>

  <h3 className="text-xl font-semibold text-gray-900">
    Advanced research software
  </h3>

  <p className="mt-4 text-gray-500 text-sm leading-7 max-w-sm">
    Ask the right questions and get the answers you need with powerful
    surveys that help you collect feedback quickly and easily.
  </p>

  <button className="mt-6 bg-[#00C2D1] hover:bg-[#00AFBD] text-white px-5 py-2 text-sm rounded transition-all duration-300 hover:scale-105">
    Get started for free
  </button>

</div>

          <div className="animate-slide-in-right">
            <img
              src={screenshot}
              className="rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>

        </div>

      </div>

    </section>
  )
}