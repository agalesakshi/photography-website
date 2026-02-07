import { motion } from "framer-motion";

const Intro = () => {
  return (
    <motion.section
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="relative py-32 px-6 bg-gradient-to-b from-black/90 via-[#1a1414] to-[#241919] text-white overflow-hidden"
>

      {/* Soft Light Effects */}
      <div className="absolute top-10 left-20 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-200/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Content */}
        <div>
          <p className="text-sm tracking-widest text-gray-300 mb-3">
            OUR LOVE STORIES
          </p>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            Capturing Love <br />
            With <span className="text-pink-300">Heart & Soul</span>
          </h2>

          <p className="text-gray-200 mb-5 leading-relaxed text-lg">
            From stolen glances to forever promises,
            we frame emotions into timeless art.
          </p>

          <p className="text-gray-300 mb-8 leading-relaxed">
            Every photograph is a memory you’ll relive
            for the rest of your life.
          </p>

          <button className="px-8 py-3 bg-white text-black rounded-full hover:scale-105 transition-all duration-300 shadow-lg font-medium">
            View Stories
          </button>
        </div>

        {/* Right Image */}
        <div className="relative">

          {/* Soft Frame */}
          <div className="absolute -top-6 -left-6 w-full h-full border border-white/20 rounded-3xl"></div>

          <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc"




            alt="Romantic Couple"
            className="relative rounded-3xl shadow-2xl z-10 object-cover"
          />

          {/* Hero-style Overlay */}
          <div className="absolute inset-0 bg-black/30 rounded-3xl z-20"></div>

        </div>

      </div>
    </motion.section>

  );
};

export default Intro;
