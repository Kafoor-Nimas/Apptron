const Navbar = () => {
  const navItems = ["Home", "About", "Services", "Contact"];
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-md">
      <div className="max-w-7xl lg:max-w-[1500px] mx-auto px-6 py-4 flex justify-between items-center ">
        <a href="#" className="text-2xl font-bold font-serif text-orange-500">
          Apptron
        </a>

        <nav>
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
      </div>
    </header>
  );
};

export default Navbar;
