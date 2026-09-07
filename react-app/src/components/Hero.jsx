import HeroImage from "../assets/images/hero1.jfif";

const Hero = () => {
  return (
    <section className="bg-slate-50 px-6 py-12 md:py-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Content */}
        <div className="text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
            Welcome to Our <span className="text-orange-500">Platform</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
            We build modern, scalable, and high-performance web applications
            using the latest technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
              Get Started
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl border border-gray-200 shadow-sm hover:border-gray-300 transition-all duration-200 cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={HeroImage}
            alt="Team working on web development"
            className="w-full max-w-xl h-auto rounded-2xl shadow-2xl border border-gray-100 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
