const Header = () => {
  const navItems = ["Home", "About", "Services", "Contact"];
  return (
    <header className="sticky top-0 z-50 bg-slate-50 w-full border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-[1600px] max-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl md:text-3xl font-bold font-serif text-orange-500 tracking-wide hover:opacity-90 transition-opacity ml-6"
        >
          Apptron
        </a>

        {/* Nav Links */}
        <nav>
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
      </div>
    </header>
  );
};

export default Header;
