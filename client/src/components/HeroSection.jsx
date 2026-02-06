const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519741497674-611481863552')",
      }}
    >
      <div className="bg-black/50 p-10 rounded-xl text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Ritual Haus
        </h1>

        <p className="text-lg mb-6">
          Creative Wedding Studios
        </p>

        <button className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition">
          Book Your Shoot
        </button>
      </div>
    </section>
  );
};

export default Hero;
