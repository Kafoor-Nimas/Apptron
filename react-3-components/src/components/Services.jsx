const Services = () => {
  const serviceList = [
    {
      icon: "💻",
      name: "Web Development",
      desc: "Custom full-stack web applications tailored to your business needs.",
    },
    {
      icon: "⚡",
      name: "Next.js Solutions",
      desc: "Fast, SEO-friendly, and server-side rendered modern React applications.",
    },
    {
      icon: "🎨",
      name: "UI/UX Design",
      desc: "Intuitive, clean, and interactive user interfaces using Tailwind CSS.",
    },
    {
      icon: "🚀",
      name: "API Development",
      desc: "Secure and scalable REST & GraphQL backend API services.",
    },
  ];
  return (
    <section id="services" className="py-20 px-6 bg-slate-50">
      <div className="max-w-[1400px] mx-auto text-center space-y-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Comprehensive software solutions we offer
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceList.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-left space-y-4"
            >
              <div className="text-4xl p-3 bg-orange-50 w-fit rounded-xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                {service.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
