const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Have a project in mind? Contact us today!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-gray-100">
            <span className="text-3xl block mb-2">✉️</span>
            <h4 className="font-semibold text-gray-800">Email</h4>
            <p className="text-sm text-gray-600 mt-1">contact@apptron.dev</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-100">
            <span className="text-3xl block mb-2">📞</span>
            <h4 className="font-semibold text-gray-800">Phone</h4>
            <p className="text-sm text-gray-600 mt-1">+94 77 123 4567</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-100">
            <span className="text-3xl block mb-2">📍</span>
            <h4 className="font-semibold text-gray-800">Location</h4>
            <p className="text-sm text-gray-600 mt-1">Jaffna, Sri Lanka</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
