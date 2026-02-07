import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-6 left-0 w-full z-50 flex justify-center">

      {/* Floating Container */}
      <div className="bg-black/50 backdrop-blur-xl border border-white/10
                      rounded-full px-8 py-3 shadow-2xl flex items-center gap-10">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-wider text-white hover:text-pink-400 transition"
        >
          RitualHaus
        </Link>

        {/* Menu */}
        {isHome && (
          <div className="hidden md:flex items-center gap-8 text-sm">

            {["home", "services", "gallery", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="relative text-gray-300 hover:text-white transition group"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}

                {/* Hover Line */}
                <span
                  className="absolute left-0 -bottom-1 w-0 h-[1px] bg-pink-400
                             transition-all duration-300 group-hover:w-full"
                ></span>
              </a>
            ))}

          </div>
        )}

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block px-5 py-2 rounded-full
                     bg-gradient-to-r from-pink-400 to-rose-500
                     text-black text-sm font-medium
                     hover:scale-105 transition"
        >
          Book Now
        </a>

      </div>

    </nav>
  );
};

export default Navbar;
