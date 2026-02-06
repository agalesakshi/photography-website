const Services = () => {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        <div className="p-6 bg-white rounded-xl shadow">
          Wedding Photography
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          Pre-Wedding Shoots
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          Event Coverage
        </div>
      </div>
    </section>
  );
};

export default Services;
