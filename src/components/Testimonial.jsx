import play from "../assets/Group 16.png"
import paypal from "../assets/image 22.png"
import girl from "../assets/Rectangle 43.png"
import cardBg from "../assets/Rectangle 44.png"
import next1 from "../assets/icon-arrow-slider-next 1.png"
import next2 from "../assets/icon-arrow-slider-next 2.png"

export default function Testimonial() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        
        <div>
          <p className="text-xs text-cyan-500 font-semibold tracking-[0.25em] uppercase">
            Testimonials
          </p>

          <h2 className="mt-4 text-[32px] font-medium text-gray-900 leading-tight">
            See how customers <br /> drive impact
          </h2>

          <button className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-md text-sm transition-all duration-300">
            See case studies
          </button>
        </div>

        <div className="relative flex justify-center">
          
          <div className="absolute -top-8 right-2 flex gap-3 z-20">
            <img src={next1} className="w-8 h-8 opacity-40" />
            <img src={next2} className="w-8 h-8" />
          </div>

          <div className="relative w-[330px] md:w-[370px]">
            <img
              src={girl}
              alt="customer video"
              className="w-full rounded-xl shadow-md"
            />

            <img
              src={play}
              alt="play"
              className="absolute top-1/2 left-1/2 w-14 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            />

            <div
              className="absolute bottom-6 left-[58%] w-[250px] md:w-[270px] rounded-xl p-5 shadow-md bg-cover bg-center"
              style={{ backgroundImage: `url(${cardBg})` }}
            >
              <img
                src={paypal}
                alt="PayPal"
                className="w-20 mb-3"
              />

              <p className="text-gray-600 text-[13px] leading-6">
                "I used to have a bunch of different tools I had to pay for, with Circle you get everything in one bundle."
              </p>

              <p className="mt-4 font-semibold text-gray-800 text-sm">
                Michel Dedrick
              </p>

              <p className="text-xs text-gray-500">
                Senior Conversion Optimizer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}