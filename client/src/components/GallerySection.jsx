import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1519741497674-611481863552",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1520857014576-2c4f4c972b57",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
  "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
  "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
  "https://images.unsplash.com/photo-1530023367847-a683933f4172",
];

const Gallery = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-[#1c1412] via-[#241a17] to-[#2b1f1b] text-white">

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-20">

        <p className="text-sm tracking-widest text-rose-300 mb-2">
          OUR LOVE DIARY
        </p>

        <h2 className="text-5xl font-bold mb-5 font-heading">
          A Little <span className="text-rose-400">Forever</span> in Every Frame
        </h2>

        <p className="text-rose-200/80 max-w-2xl mx-auto mb-6">
          Soft moments, warm hearts, and memories wrapped in love.
        </p>

        <p className="italic text-rose-300 text-lg">
          “We don’t just click photos… we freeze butterflies in your stomach 🥹💗”
        </p>

      </div>

      {/* Album Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 auto-rows-[180px] grid-flow-dense">

        {images.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            className={`
              relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer group
              ${index % 3 === 0 ? "row-span-2" : ""}
              ${index % 5 === 0 ? "col-span-2" : ""}
            `}
          >

            {/* Image */}
            <img
              src={img}
              alt="Love Memory"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Soft Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#2b1f1b]/70 to-transparent
                         opacity-0 group-hover:opacity-100 transition"
            ></div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Gallery;
