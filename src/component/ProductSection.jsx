import React from "react";

function ProductSection() {
  const products = [
    { title: "Real-time Collaboration", description: "Enable seamless team collaboration with live, real-time updates and communication.", buttonText: "Learn More" },
    { title: "Advanced Data Analytics", description: "Harness the power of AI-driven insights to accelerate growth.", buttonText: "Explore Features" },
    { title: "Custom Integrations", description: "Easily connect CleverBook with your existing tools for smooth workflows.", buttonText: "Get Started" },
    { title: "Streamlined Workflow", description: "Automate processes to save time and improve efficiency.", buttonText: "Discover More" },
    { title: "Smart Automation", description: "Implement automated workflows that boost productivity.", buttonText: "Get Started" },
    { title: "Cloud Storage", description: "Access your files anytime with secure cloud storage solutions.", buttonText: "Learn More" },
    { title: "Mobile Optimization", description: "Access all features from your mobile devices with ease.", buttonText: "Explore Features" },
    { title: "Custom Dashboards", description: "Create personalized dashboards for better insights and decision-making.", buttonText: "Try Now" },
    { title: "User-friendly Interface", description: "An intuitive interface designed for all skill levels.", buttonText: "Get Started" },
    { title: "24/7 Support", description: "Our support team is here to help, anytime, anywhere.", buttonText: "Contact Support" },
    { title: "AI-Powered Recommendations", description: "Get smart recommendations based on your data.", buttonText: "Learn More" },
    { title: "Real-time Notifications", description: "Stay updated with instant notifications on critical changes.", buttonText: "Explore Features" }
  ];

  return (
    <div className="bg-[#121212] py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto text-center text-white">
        {/* Page Heading */}
        <h2 className="text-4xl font-extrabold mb-8 tracking-wide">
          Elevate Your Business with CleverBook Solutions
        </h2>
        <p className="text-lg text-gray-300 mb-16 leading-relaxed max-w-2xl mx-auto">
          Explore our suite of products designed to accelerate your business and increase efficiency. Each solution is tailored to meet the demands of modern enterprises.
        </p>

        {/* Product Features */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative bg-[#1e1e1e] rounded-xl p-8 text-left shadow-xl overflow-hidden group transition-all transform hover:scale-105"
            >
              {/* Dark card background with a subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-20 group-hover:opacity-40 transition-all duration-300"></div>

              {/* Card Content */}
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500 mb-4">
                {product.title}
              </h3>
              <p className="text-gray-300 mb-6">{product.description}</p>
              <button className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-white rounded-full px-8 py-3 text-md group-hover:scale-110 transition-all duration-300 relative z-10">
                {product.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
