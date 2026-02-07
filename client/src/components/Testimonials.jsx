import { motion } from "framer-motion";

const reviews = [
  {
    name: "Anjali & Rahul",
    text: "They captured our wedding so beautifully. Every photo makes us smile again and again 🥹💗",
  },
  {
    name: "Neha Sharma",
    text: "Professional, friendly, and super creative. Best decision ever!",
  },
  {
    name: "Rohan & Priya",
    text: "Our pre-wedding shoot felt like a movie. Thank you Ritual Haus ✨",
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-[#2b1f1b] to-black text-white">

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">

        <p className="text-sm tracking-widest text-rose-300 mb-2">
          LOVE NOTES
        </p>

        <h2 className="text-5xl font-bold mb-4 font-heading">
          Words from <span className="text-rose-400">Our Couples</span>
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto">
          Because their happiness is our biggest achievement.
        </p>

      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/10"
          >

            <p className="text-gray-200 mb-6 italic leading-relaxed">
              “{review.text}”
            </p>

            <h4 className="text-rose-300 font-medium">
              — {review.name}
            </h4>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Testimonials;
