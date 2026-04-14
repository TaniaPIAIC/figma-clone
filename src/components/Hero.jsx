import maskGroup from "../assets/Mask group 1.png"

export default function Hero() {
  return (
    <section className="bg-[#eef9f9]">
      <div className="max-w-6xl mx-auto px-6 pt-8 md:pt-10">

        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-[30px] md:text-[58px] leading-[1.08] font-bold text-[#1f1f1f] animate-fade-in-up">
            A powerful online engagement tool that’s intuitive and simple to use.
          </h1>

          <p className="mt-4 text-[13px] md:text-[14px] leading-6 text-gray-500 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            With stellar one-click reports and unmatched support, see how
            Circle will make a difference in your business.
          </p>

          <button className="mt-7 bg-[#00c2d1] hover:bg-[#00afbd] text-white text-[14px] font-medium px-6 py-3 rounded-sm animate-fade-in-up transition-all duration-300 hover:scale-105" style={{ animationDelay: '0.4s' }}>
            Get started free
          </button>
        </div>

        <div className="mt-16 flex justify-center">
          <img
            src={maskGroup}
            alt="team"
            className="w-full max-w-[900px] animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          />
        </div>

      </div>
    </section>
  )
}