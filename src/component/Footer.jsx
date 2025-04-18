import upArrow from "../assets/up-arrow.png";
import clever_book from "../assets/CleverBook_transparent.png";

function Footer() {
  return (
    <footer className="bg-[#151218] text-white pt-10 pb-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Logo and Description */}
        <div className="md:w-1/3">
          <img
            src={clever_book}
            alt="CleverBook"
            className="h-32 w-auto mb-4 object-contain"
          />
          <p className="text-sm leading-6">
            Crest is an AI-powered supply chain software that provides companies tools for demand forecasting, inventory planning and more. This helps them have the right amount of stock, optimise space and fulfil every order.
          </p>
        </div>

        {/* Explore Links */}
        <div className="md:w-1/6">
          <h3 className="font-bold mb-2 text-lg">Explore</h3>
          <ul className="space-y-1 text-sm">
            <li>Pricing</li>
            <li>Product</li>
            <li>Customer Service</li>
            <li>Career</li>
          </ul>
        </div>

        {/* Learn Links */}
        <div className="md:w-1/6">
          <h3 className="font-bold mb-2 text-lg">Learn</h3>
          <ul className="space-y-1 text-sm">
            <li>About</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="md:w-1/3 text-sm">
          <h3 className="font-bold mb-2 text-lg">Contact Us</h3>
          <p>sales@CleverBook.ai</p>
          <p className="mt-4">
            <span className="font-semibold">Registered Office:</span><br />
            1507, Incubex, 11th cross road,<br />
            19th Main Road,<br />
            Bengaluru, India. 560102
          </p>
          <p className="mt-4">
            <span className="font-semibold">Corporate Office:</span><br />
            291, All Time Space, 4th Floor,<br />
            15th A Cross, Sector - 6,<br />
            HSR Layout, Bengaluru,<br />
            India. 560102
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="flex justify-center mt-10">
        <a href="#vishnu" className="transition-transform hover:-translate-y-1 duration-300">
          <img
            src={upArrow}
            alt="Back to Top"
            className="h-10 w-10 rounded-full border border-gray-400 p-2"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
