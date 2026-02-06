const Gallery = () => {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Gallery</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto px-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div
            key={item}
            className="h-40 bg-gray-300 rounded-lg"
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
