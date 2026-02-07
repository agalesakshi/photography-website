import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const services = [
  {
    title: "Wedding Photography",
    image: "/Portfolio1.jpg",
    desc: "Cinematic wedding stories filled with love and emotion.",
    link: "/services/wedding",
  },

  {
    title: "Pre-Wedding Shoots",
    image: "/Portfolio2.jpg",
    desc: "Romantic portraits that celebrate your journey together.",
    link: "/services/prewedding",
  },

  {
    title: "Portrait Sessions",
    image: "/Portfolio3.jpg",
    desc: "Timeless personal and family portraits with elegance.",
    link: "/services/portrait",
  },

  {
    title: "Event Coverage",
    image: "/Portfolio4.jpg",
    desc: "Professional storytelling for every special occasion.",
    link: "/services/event",
  },
];

const Services = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-[#241919] to-black text-white">

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <p className="text-sm tracking-widest text-gray-400 mb-2">
          OUR SERVICES
        </p>

        <h2 className="text-5xl font-bold mb-4">
          What We <span className="text-pink-400">Offer</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Every shoot is crafted with creativity, emotion,
          and attention to detail.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {services.map((service, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.15 }}
    viewport={{ once: true }}
  >
    

          <Link
            to={service.link}
            key={index}
            className="group relative h-[420px] rounded-2xl overflow-hidden shadow-xl cursor-pointer block"
          >

            {/* Background Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">

              <h3 className="text-2xl font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition duration-500">
                {service.desc}
              </p>

            </div>

          </Link>
            
</motion.div>

        ))}

      </div>
    </section>
  );
};

export default Services;
