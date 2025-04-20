import React from 'react';

const TalkToUs = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white px-4 sm:px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">Talk to Us</h1>
        <p className="text-center text-gray-300 text-base sm:text-lg mb-8">
          Got a question or feedback? We'd love to hear from you!
        </p>

        <form className="space-y-6 bg-gray-800/80 backdrop-blur-md shadow-lg rounded-2xl p-6 sm:p-10">
          {[
            { label: 'Name', type: 'text', placeholder: 'Your Name' },
            { label: 'Email', type: 'email', placeholder: 'you@example.com' },
            { label: 'Subject', type: 'text', placeholder: "What's this about?" },
          ].map((field, idx) => (
            <div key={idx} className="relative">
              <input
                type={field.type}
                placeholder=" "
                className="peer w-full px-4 pt-5 pb-2 bg-gray-700/40 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 placeholder-transparent text-sm"
              />
              <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-400">
                {field.label}
              </label>
            </div>
          ))}

          <div className="relative">
            <textarea
              placeholder=" "
              className="peer w-full px-4 pt-5 pb-2 bg-gray-700/40 text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 h-32 resize-none placeholder-transparent text-sm"
            ></textarea>
            <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-400">
              Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-xl transition-all font-semibold text-sm shadow-lg"
          >
            🚀 Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>
          <ul className="text-gray-300 text-sm sm:text-base space-y-2">
            <li><strong>Email:</strong> support@mycleverbook.com</li>
            <li>
              <strong>Instagram:</strong>{' '}
              <a href="https://instagram.com/mycleverbook" target="_blank" rel="noreferrer" className="text-blue-400 underline">
                @mycleverbook
              </a>
            </li>
            <li><strong>Phone:</strong> +1 (234) 567-8901</li>
            <li><strong>Address:</strong> 123 Clever Lane, Storyville, BK 56789</li>
          </ul>
        </div>

        {/* FAQs */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
          <div className="space-y-5 text-sm sm:text-base text-gray-300">
            <div>
              <p className="font-medium text-white">Q: How long does it take to get a reply?</p>
              <p>A: We usually respond within 24–48 hours, excluding weekends.</p>
            </div>
            <div>
              <p className="font-medium text-white">Q: Can I collaborate or publish with you?</p>
              <p>A: Yes! Send us your ideas — we love clever creators.</p>
            </div>
            <div>
              <p className="font-medium text-white">Q: Where can I buy My Clever Book products?</p>
              <p>
                A: Visit our <a href="#" className="text-blue-400 underline">Shop</a> for all editions and bundles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkToUs;
