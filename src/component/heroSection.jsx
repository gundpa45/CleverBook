import letter from "../assets/letter.svg"
import heroSection from "../assets/herosection.svg"
import checkList from "../assets/checklist.svg"
import bag from "../assets/bag.svg"
import house from "../assets/house.svg"
import stock from "../assets/stock.svg"

function Body() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#151218] py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          
          {/* Left side */}
          <div className="text-white md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
              Every order <br />
              fulfilled<span className="font-serif">, </span>
              <span className="text-emerald-300">on time.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-300">
              Eliminate overstocking and under-stocking with Crest. Built by supply-chain experts.
              <br /> It brings the same technology used by large global brands to power fast-growing startups.
              <br /> In short, we make supply meet demand, and then help you grow both.
            </p>

            <div className="flex justify-center md:justify-start gap-4 mt-8">
              <button className="hover:bg-purple-800 transition duration-300 rounded-full bg-green-300 px-6 py-2 text-black font-bold">
                Get started with Crest
              </button>
              <img src={letter} alt="letter" className="h-30 mt-1" />
            </div>
          </div>

          {/* Right image */}
          <div className="md:w-1/2 w-full">
            <img src={heroSection} alt="hero" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>

      {/* Four key questions */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-12">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-12">
          Four key questions answered by Crest
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            {
              icon: checkList,
              title: "What to order",
              desc: "Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.",
            },
            {
              icon: bag,
              title: "When to order",
              desc: "Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.",
            },
            {
              icon: stock,
              title: "How much to stock",
              desc: "Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.",
            },
            {
              icon: house,
              title: "Where to place",
              desc: "Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.",
            },
          ].map((card, idx) => (
            <div key={idx} className="bg-[#f1e9fc] rounded-xl p-6 text-black shadow hover:shadow-md transition">
              <img src={card.icon} alt="" className="h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-800">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Body;
