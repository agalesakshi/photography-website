import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black to-[#1a1210] text-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-sm tracking-widest text-rose-300 mb-3">
            LET’S CONNECT
          </p>

          <h2 className="text-5xl font-bold mb-6 font-heading">
            Let’s Create <span className="text-rose-400">Magic</span> Together
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed max-w-lg">
            Have a story to tell? A moment to freeze forever?
            We’d love to hear from you and turn your memories
            into timeless art.
          </p>

          {/* Contact Info */}
         {/* Contact Info & Socials */}
<div className="space-y-5 text-gray-300">

  {/* WhatsApp */}
  <a
    href="https://wa.me/919876543210"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-3 hover:text-green-400 transition"
  >
    💬 <span>Chat on WhatsApp</span>
  </a>

  {/* Email */}
  <a
    href="mailto:contact@ritualhaus.com"
    className="flex items-center gap-3 hover:text-rose-400 transition"
  >
    📧 <span>contact@ritualhaus.com</span>
  </a>

  {/* Instagram */}
  <a
    href="https://instagram.com/yourusername"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-3 hover:text-pink-400 transition"
  >
    📸 <span>@ritualhaus</span>
  </a>

  {/* YouTube */}
  <a
    href="https://youtube.com/@yourchannel"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-3 hover:text-red-400 transition"
  >
    ▶️ <span>Ritual Haus Studio</span>
  </a>

</div>


        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl"
        >

          <form className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3
                           focus:outline-none focus:border-rose-400 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3
                           focus:outline-none focus:border-rose-400 transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your number"
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3
                           focus:outline-none focus:border-rose-400 transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Your Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell us about your event..."
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3
                           focus:outline-none focus:border-rose-400 transition resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-full
                         bg-gradient-to-r from-rose-400 to-pink-500
                         text-black font-medium
                         hover:scale-105 transition shadow-lg"
            >
              Send Inquiry 💌
            </button>

          </form>

        </motion.div>

      </div>

    </section>
  );
};

export default Contact;
