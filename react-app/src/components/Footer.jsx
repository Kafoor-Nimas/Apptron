const Footer = () => {
  const QuickLinks = ["Home", "About", "Services", "Contact"];
  const Services = [
    "Web Development",
    "MERN Stack Solutions",
    "Next.js Applications",
    "UI/UX Design",
  ];
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-2 border-t border-gray-800">
      <div className="max-w-[1600px] mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Brand */}
        <div className="space-y-4 md:col-span-1">
          <a
            href="#"
            className="text-2xl font-bold font-serif text-orange-500 tracking-wide"
          >
            Apptron
          </a>
          <p className="text-sm text-gray-400 leading-relaxed mt-1 max-w-sm">
            Building modern, scalable, and high-performance <br /> web
            applications.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {QuickLinks.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-orange-500 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Column 3 */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            {Services.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-orange-500 cursor-pointer transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Column 4 */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Stay Connected
          </h3>
          <p className="text-sm text-gray-400 mb-3">
            Subscribe to our newsletter for updates
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-sm bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white  font-medium text-sm rounded-lg transition-colors cursor-pointer"
            >
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <p>&copy; 2026 Apptron. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-400 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            Terms of Services
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
