import image from "../assets/img.avif";

const Hero = () => {
  return (
    <section id="home" className="bg-slate-50 px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Building Digital
            <span className="text-orange-500"> Experiences</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            We specialize in crafting scalable MERN stack applications and
            high-performance Next.js solutions for modern businesses.
          </p>
          <button className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/25 transition-all cursor-pointer">
            Get Started
          </button>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={image}
            alt="Hero Image"
            className="w-full max-w-lg rounded-2xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
