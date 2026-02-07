import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 4, ease: "easeOut" }}
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519741497674-611481863552')",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-black/50 p-10 rounded-xl text-center text-white"
      >

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Ritual Haus
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg mb-6"
        >
          Creative Wedding Studios
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 hover:scale-105 transition"
        >
          Book Your Shoot
        </motion.button>

      </motion.div>
    </motion.section>
  );
};

export default Hero;
