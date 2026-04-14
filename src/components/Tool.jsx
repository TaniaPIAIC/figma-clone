import team from "../assets/Mask group.png"


export default function Tool() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        
        <div className="animate-slide-in-left">
          <p className="text-xs text-cyan-500 font-semibold tracking-widest">
            OUR PROMISE
          </p>

          <h2 className="mt-4 text-3xl font-bold text-gray-800">
            Tool built for people.
          </h2>

          <p className="mt-4 text-gray-500 text-sm leading-6 max-w-md">
            Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom.
            Circle has 100+ integrations with tools you already use and love.
          </p>

          <button className="mt-6 bg-[#00c2d1] hover:bg-[#00afbd] text-white px-6 py-3 text-sm rounded-sm transition-all duration-300 hover:scale-105">
            Get started free
          </button>
        </div>

        
        <div className="animate-slide-in-right">
          <img
  src={team}
  className="rounded-xl w-[420px] transition-transform duration-300 hover:scale-105"
  alt="team"
/>
        </div>

      </div>
    </section>
  )
}