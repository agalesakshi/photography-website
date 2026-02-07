import { Instagram, Mail, Youtube, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#1a1210] to-black text-gray-300 pt-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 pb-12 border-b border-white/10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4 font-heading">
            Ritual Haus
          </h2>

          <p className="text-sm leading-relaxed text-gray-400">
            Capturing love, emotions, and timeless memories.
            Turning moments into stories you’ll cherish forever.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">

            <li>
              <a href="#home" className="hover:text-rose-400 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-rose-400 transition">
                Services
              </a>
            </li>

            <li>
              <a href="#gallery" className="hover:text-rose-400 transition">
                Gallery
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-rose-400 transition">
                Contact
              </a>
            </li>

          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Connect With Us
          </h3>

          <div className="space-y-3 text-sm">

            <p className="flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </p>

            <p className="flex items-center gap-2">
              <Mail size={16} /> contact@ritualhaus.com
            </p>

            <div className="flex gap-4 mt-4">

              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="hover:text-pink-400 transition"
              >
                <Instagram />
              </a>

              <a
                href="https://youtube.com/@yourchannel"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-400 transition"
              >
                <Youtube />
              </a>

            </div>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 py-6">

        © {new Date().getFullYear()} Ritual Haus.  
        All Rights Reserved. Crafted with ❤️

      </div>

    </footer>
  );
};

export default Footer;
