import AboutImage from "../assets/aboutImage.avif";
const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 flex justify-center">
          <img
            src={AboutImage}
            alt="About image"
            className="w-full max-w-lg rounded-2xl shadow-lg object-cover"
          />
        </div>
        <div className="order-1 lg:order-2 space-y-6 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            About Our <span className="text-orange-500">Company</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Apptron is a leading software engineering firm dedicated to
            transforming ideas into cutting-edge web applications. With
            expertise in the MERN stack and Next.js, we empower startups and
            companies to scale globally.
          </p>
          <button className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/25 transition-all cursor-pointer">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
