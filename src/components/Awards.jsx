import bg1 from "../assets/Rectangle 48.png"
import bg2 from "../assets/Rectangle 49.png"
import bg3 from "../assets/Rectangle 50.png"
import bg4 from "../assets/Rectangle 51.png"
import bg5 from "../assets/Rectangle 52.png"
import bg6 from "../assets/Rectangle 53.png"

import award1 from "../assets/image 23.png"
import award2 from "../assets/image 26.png"
import award3 from "../assets/image 27.png"
import award4 from "../assets/image 31.png"
import award5 from "../assets/image 32.png"
import award6 from "../assets/Vector.png"

export default function Awards() {
  const cards = [
    {
      bg: bg1,
      icon: award1,
      text: (
        <>
          Market leader across
          <br />
          18 categories
        </>
      ),
    },
    {
      bg: bg2,
      icon: award2,
      text: (
        <>
          Most loved SaaS tool
          <br />
          in 2021
        </>
      ),
    },
    {
      bg: bg3,
      icon: award3,
      text: (
        <>
          Category leader in
          <br />
          2022
        </>
      ),
    },
    {
      bg: bg4,
      icon: award4,
      text: (
        <>
          Most recommended
          <br />
          tool in 2021
        </>
      ),
    },
    {
      bg: bg5,
      icon: award5,
      text: (
        <>
          Champion in survey
          <br />
          tool 2022
        </>
      ),
    },
    {
      bg: bg6,
      icon: award6,
      text: (
        <>
          Top performer spring
          <br />
          2021
        </>
      ),
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-cyan-500 uppercase">
          Awards
        </p>

        <h2 className="mt-3 text-2xl md:text-[32px] font-semibold text-gray-800">
          An <span className="font-bold">award winning</span> platform, loved by customers.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className="h-[260px] bg-center bg-cover bg-no-repeat rounded-md flex flex-col items-center justify-center px-6"
              style={{ backgroundImage: `url(${card.bg})` }}
            >
              <img
                src={card.icon}
                alt={`award-${index + 1}`}
                className="w-20 h-16 object-contain"
              />
              <p className="mt-5 text-sm leading-6 text-gray-800 font-medium">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}