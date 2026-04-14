import map from "../assets/Mask group map.png"
import linkedin from "../assets/Mask(1).png"
import twitter from "../assets/Mask(2).png"

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-gray-400 pt-16 pb-10 mt-10">
      <div className="max-w-6xl mx-auto px-6">

        
        <div className="grid md:grid-cols-4 gap-12 items-start">

          
          <div>
            <img src={map} alt="map" className="w-40 mb-4" />

            <p className="text-xs text-gray-400">
              Made with lots of ❤️ in San Francisco
            </p>
          </div>

          
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Products</h4>

            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer hover:text-white transition-colors duration-300">Delta</li>
              <li className="cursor-pointer hover:text-white transition-colors duration-300">Sigma</li>
              <li className="cursor-pointer hover:text-white transition-colors duration-300">Zeta</li>
              <li className="cursor-pointer hover:text-white transition-colors duration-300">Alpha</li>
              <li className="cursor-pointer hover:text-white transition-colors duration-300">Acumen</li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Resources</h4>

            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer hover:text-white transition-colors duration-300">Help</li>
              <li className="cursor-pointer hover:text-white transition-colors duration-300">Training Videos</li>
              <li className="cursor-pointer hover:text-white transition-colors duration-300">Webinars</li>
              <li className="cursor-pointer hover:text-white transition-colors duration-300">Request a Demo</li>
              <li className="cursor-pointer hover:text-white transition-colors duration-300">Create Surveys</li>
              <li className="cursor-pointer hover:text-white transition-colors duration-300">Quiz Maker</li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Company</h4>

            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer hover:text-white transition-colors duration-300">About Us</li>
              <li className="cursor-pointer hover:text-white transition-colors duration-300">Careers</li>
              <li className="cursor-pointer hover:text-white transition-colors duration-300">Team</li>
              <li className="cursor-pointer hover:text-white transition-colors duration-300">Contact Us</li>
            </ul>
          </div>

        </div>

        
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-xs">
            Copyright 2022 Circle. All rights reserved.
          </p>

          <div className="flex items-center gap-6 mt-4 md:mt-0">

            <img src={linkedin} alt="linkedin" className="w-4 cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-300" />
            <img src={twitter} alt="twitter" className="w-4 cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-300" />

            <div className="text-xs flex gap-4">
              <span className="cursor-pointer hover:text-white transition-colors duration-300">Privacy Policy</span>
              <span className="cursor-pointer hover:text-white transition-colors duration-300">Data & Security</span>
              <span className="cursor-pointer hover:text-white transition-colors duration-300">Terms of Service</span>
            </div>

          </div>

        </div>

      </div>
    </footer>
  )
}