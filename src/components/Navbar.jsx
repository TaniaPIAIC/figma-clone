import logo from "../assets/logo.svg"

export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-8 text-[13px] text-gray-700">
          <a href="#" className="hover:text-cyan-500 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full">Features</a>
          <a href="#" className="hover:text-cyan-500 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full">Pricing</a>
          <a href="#" className="hover:text-cyan-500 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full">Testimonials</a>
          <a href="#" className="hover:text-cyan-500 transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full">Resources</a>
        </nav>

        <div className="flex items-center justify-center">
          <img src={logo} alt="circle logo" className="h-6 object-contain" />
        </div>

        <div className="hidden md:flex items-center gap-8 text-[13px] text-gray-700">
          <a href="#" className="hover:text-cyan-500 transition-colors duration-300">Company</a>
          <a href="#" className="hover:text-cyan-500 transition-colors duration-300">Contact</a>
          <button className="border border-cyan-400 text-cyan-500 px-8 py-2 text-[13px] rounded-sm hover:bg-cyan-50 transition-all duration-300 hover:scale-105">
            Login
          </button>
        </div>
      </div>
    </header>
  )
}