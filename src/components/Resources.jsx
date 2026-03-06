import img1 from "../assets/Rectangle 45.png"
import img2 from "../assets/Rectangle 46.png"
import img3 from "../assets/Rectangle 47.png"

export default function Resources() {
  const cards = [
    {
      image: img1,
      title: "Excepteur sint occaecat cupidatat non proident",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.",
    },
    {
      image: img2,
      title: "Quis nostrum exercitationem ullam corporis suscipit laboriosam",
      text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi.",
    },
    {
      image: img3,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      text: "Culpa tenetur accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.",
    },
  ]

  return (
    <section className="relative bg-white pt-16 pb-0 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <p className="text-[10px] font-semibold tracking-[0.22em] text-cyan-500 uppercase">
          Resources
        </p>

        <h2 className="mt-2 text-[30px] font-semibold text-slate-900">
          Stay in the know
        </h2>
      </div>

     <div className="absolute left-0 right-0 bottom-0 h-[260px] bg-[#EAF6F7] z-0"></div>

      <div className="max-w-5xl mx-auto px-6 mt-10 relative z-10">
        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden text-left shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
            >
              <img
                src={card.image}
                alt={`resource-${index + 1}`}
                className="w-full h-[138px] object-cover"
              />

              <div className="p-4">
                <h3 className="text-[14px] leading-6 font-semibold text-slate-900">
                  {card.title}
                </h3>

                <p className="mt-3 text-[11px] leading-5 text-slate-500">
                  {card.text}
                </p>

                <button className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white text-[11px] px-4 py-2 rounded-sm transition-all duration-300">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}