import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Trusted from "./components/Trusted"
import Tool from "./components/Tool"
import Awards from "./components/Awards"
import Features from "./components/Features"
import Testimonial from "./components/Testimonial"
import Solution from "./components/Solution"
import Resources from "./components/Resources"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Trusted />
      <Tool />
      <Awards />
      <Features />
      <Testimonial />
      <Solution />
      <Resources />
      <Footer />
    </div>
  )
}