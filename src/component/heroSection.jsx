import letter from "../assets/letter.svg";
import heroSection from "../assets/herosection.svg";
import checkList from "../assets/checklist.svg";
import bag from "../assets/bag.svg";
import house from "../assets/house.svg";
import stock from "../assets/stock.svg";

function Body() {
  const cardData = [
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
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#0b0b12] text-white py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Left */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
              Every order <br />
              fulfilled<span className="font-serif">, </span>
              <span className="text-emerald-400">on time.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-400">
              Eliminate overstocking and under-stocking with Crest.
              <br />
              Built by supply-chain experts using tech used by global brands.
              <br />
              In short, we make supply meet demand and help you grow both.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-8">
              <button className="bg-gradient-to-r from-green-300 via-emerald-400 to-green-300 text-black font-bold px-6 py-2 rounded-full hover:scale-105 transition">
                Get started with Crest
              </button>
              <img src={letter} alt="letter" className="h-10 mt-1" />
            </div>
          </div>

          {/* Right */}
          <div className="md:w-1/2 w-full">
            <img
              src={heroSection}
              alt="hero"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Key Questions */}
      <div className="bg-[#151218] py-20 px-4 sm:px-6 lg:px-12 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          🚀 Four Key Questions Answered by Crest
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {cardData.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#1e1d2e]/70 backdrop-blur-md border border-purple-500/20 shadow-[0_0_25px_#7c3aed33] hover:shadow-[0_0_35px_#7c3aed88] rounded-2xl p-6 transition-all duration-300"
            >
              <img src={card.icon} alt="" className="h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-purple-200">
                {card.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Body;
