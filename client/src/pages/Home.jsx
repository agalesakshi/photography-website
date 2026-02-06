import Hero from "../components/HeroSection";
import Intro from "../components/IntroSection";
import Services from "../components/ServiceSection";
import Gallery from "../components/GallerySection";
import Contact from "../components/Contact";
import Footer from "../components/FooterSection";

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
