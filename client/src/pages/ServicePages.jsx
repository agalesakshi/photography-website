import { useParams, Link } from "react-router-dom";

const serviceData = {
  wedding: {
    title: "Wedding Photography",
    desc: "Beautiful stories of love and commitment.",
    images: [
      "/Portfolio1.jpg",
      "/Portfolio2.jpg",
      "/Portfolio3.jpg",
      "/Portfolio4.jpg",
    ],
  },

  prewedding: {
    title: "Pre-Wedding Shoots",
    desc: "Romantic moments before the big day.",
    images: [
      "/Portfolio2.jpg",
      "/Portfolio3.jpg",
      "/Portfolio4.jpg",
      "/Portfolio1.jpg",
    ],
  },

  portrait: {
    title: "Portrait Sessions",
    desc: "Timeless personal portraits.",
    images: [
      "/Portfolio3.jpg",
      "/Portfolio4.jpg",
      "/Portfolio1.jpg",
      "/Portfolio2.jpg",
    ],
  },

  event: {
    title: "Event Coverage",
    desc: "Professional event storytelling.",
    images: [
      "/Portfolio4.jpg",
      "/Portfolio1.jpg",
      "/Portfolio2.jpg",
      "/Portfolio3.jpg",
    ],
  },
};

const ServicePage = () => {
  const { type } = useParams();

  const service = serviceData[type];

  if (!service) {
    return (
      <div className="h-screen flex items-center justify-center text-white bg-black">
        Service Not Found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">

      {/* Back Button */}
      <Link
        to="/"
        className="inline-block mb-8 text-pink-400 hover:underline"
      >
        ← Back to Home
      </Link>

      {/* Title */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-5xl font-bold mb-4">
          {service.title}
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          {service.desc}
        </p>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">

        {service.images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-xl">

            <img
              src={img}
              alt=""
              className="w-full h-72 object-cover hover:scale-110 transition duration-700"
            />

          </div>
        ))}

      </div>

    </section>
  );
};

export default ServicePage;
