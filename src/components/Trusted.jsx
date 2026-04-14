import image14 from "../assets/image 14.svg"
import image15 from "../assets/image 15.svg"
import image16 from "../assets/image 16.svg"
import image17 from "../assets/image 17.svg"
import image18 from "../assets/image 18.svg"
import image19 from "../assets/image 19.svg"
import image1821 from "../assets/18281 signed up last month.svg"
import frame58 from "../assets/Frame 58.svg"
import frame59 from "../assets/Frame 59.svg"


export default function Trusted() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto text-center px-6">

        <p className="text-xs text-cyan-500 font-semibold tracking-widest">
          OUR CUSTOMERS
        </p>

        <h3 className="mt-3 text-xl text-gray-800">
          Trusted by <span className="font-bold">100,000+ customers</span> in 90+ countries
        </h3>


        <div className="mt-10 flex flex-wrap justify-center items-center gap-10">
          <img src={image14} className="h-6 transition-transform duration-300 hover:scale-110" />
          <img src={image15} className="h-6 transition-transform duration-300 hover:scale-110" />
          <img src={image16} className="h-6 transition-transform duration-300 hover:scale-110" />
          <img src={image17} className="h-6 transition-transform duration-300 hover:scale-110" />
          <img src={image18} className="h-6 transition-transform duration-300 hover:scale-110" />
          <img src={image19} className="h-6 transition-transform duration-300 hover:scale-110" />
        </div>

        <div className="mt-10 flex flex-wrap justify-center items-center gap-10">
          <img src={image1821} className="h-4" />
          <img src={frame58} className="h-5" />
          <img src={frame59} className="h-5" />
          
        </div>

      </div>
    </section>
  )
}