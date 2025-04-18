import manufacturing from "../assets/manufacturing.png";
import ecommerce from "../assets/ecommerce.png";
import pharma from "../assets/pharma.png";
import grocery from "../assets/grocery.png";
import fashion from "../assets/fashion.png";
import distribution from "../assets/distribution.png";

function Industry() {
  const industries = [
    {
      name: "E-Commerce",
      description: "Optimize inventory for online businesses with real-time demand forecasting and order tracking.",
      icon: ecommerce,
    },
    {
      name: "Manufacturing",
      description: "Manage raw materials and finished goods with precision to avoid production delays.",
      icon: manufacturing,
    },
    {
      name: "Pharmaceutical",
      description: "Ensure regulatory compliance, batch tracking, and expiry management with smart planning.",
      icon: pharma,
    },
    {
      name: "FMCG & Grocery",
      description: "Maintain freshness and optimize shelf availability with efficient stock movement.",
      icon: grocery,
    },
    {
      name: "Fashion & Apparel",
      description: "Forecast seasonal trends and manage SKUs effectively across your supply chain.",
      icon: fashion,
    },
    {
      name: "Distribution & Retail",
      description: "Sync demand across multi-location retail outlets and warehouses seamlessly.",
      icon: distribution,
    },
  ];

  return (
    <div className="bg-[#151218] text-white min-h-screen pt-16 px-4 md:px-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Industries We Serve</h1>
        <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
          CleverBook is built to empower supply chains across industries — helping you stay lean, smart, and ahead of the curve.
        </p>
      </div>

      {/* Industry Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="bg-[#1F1B24] rounded-2xl p-6 shadow-md hover:shadow-purple-500/20 transition-all duration-300"
          >
            <img src={industry.icon} alt={industry.name} className="h-16 w-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
            <p className="text-sm text-gray-300">{industry.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20 mb-10">
        <h2 className="text-3xl font-bold">Not sure where to begin?</h2>
        <p className="text-gray-400 mt-3">
          Let’s find the best supply chain solution for your business.
        </p>
        <button className="mt-6 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 text-black font-semibold px-6 py-2 rounded-full hover:scale-105 transition duration-300">
          Talk to Us
        </button>
      </div>
    </div>
  );
}

export default Industry;
