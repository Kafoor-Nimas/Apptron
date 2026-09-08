import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "About", "Services", "Contact"];
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-md">
      <div className="max-w-7xl lg:max-w-[1500px] mx-auto px-6 py-4 flex justify-between items-center ">
        <a href="#" className="text-2xl font-bold font-serif text-orange-500">
          Apptron
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 ">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-base font-medium text-gray-700 hover:text-orange-500 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover-orange-500 focus-outline-none p-2"
        >
          {isOpen ? (
            <X className="w-7 h-7 transition-all" />
          ) : (
            <Menu className="w-7 h-7 transition-all" />
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 pt-2 pb-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-gray-700 hover:text-orange-500 transition-colors py-1"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
