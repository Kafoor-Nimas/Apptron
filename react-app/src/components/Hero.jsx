const Hero = () => {
  return (
    <section className="text-center px-6 py-20 md:py-32 bg-[#dfe0df]">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
          Welcome to Our <span className="text-orange-500">Platform</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed">
          We build modern, scalable, and high-performance web applications using
          the latest technologies.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button className="w-full sm:w-auto px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
            Get Started
          </button>
          <button className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl border border-gray-200 shadow-sm hover:border-gray-300 transition-all duration-200 cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
