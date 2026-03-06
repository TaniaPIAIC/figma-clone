import logo from "../assets/logo.svg"

export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-8 text-[13px] text-gray-700">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Testimonials</a>
          <a href="#">Resources</a>
        </nav>

        <div className="flex items-center justify-center">
          <img src={logo} alt="circle logo" className="h-6 object-contain" />
        </div>

        <div className="hidden md:flex items-center gap-8 text-[13px] text-gray-700">
          <a href="#">Company</a>
          <a href="#">Contact</a>
          <button className="border border-cyan-400 text-cyan-500 px-8 py-2 text-[13px] rounded-sm hover:bg-cyan-50 ">
            Login
          </button>
        </div>
      </div>
    </header>
  )
}