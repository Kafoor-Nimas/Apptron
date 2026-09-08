import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <header className="sticky top-0 z-50 bg-slate-50/90 backdrop-blur-md w-full border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-[1600px] mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl md:text-3xl font-bold font-serif text-orange-500 tracking-wide hover:opacity-90 transition-opacity"
        >
          Apptron
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 md:gap-10">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-base md:text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger Icon*/}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-orange-500 focus:outline-none p-1"
        >
          {isOpen ? (
            <X className="w-7 h-7 transition-all" />
          ) : (
            <Menu className="w-7 h-7 transition-all" />
          )}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-slate-50 border-b border-gray-200 px-6 pt-2 pb-4 shadow-inner">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors duration-200 py-1"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
