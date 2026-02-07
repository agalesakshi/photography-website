import Hero from "../components/HeroSection";
import Intro from "../components/IntroSection";
import Services from "../components/ServiceSection";
import Gallery from "../components/GallerySection";
import Contact from "../components/Contact";
import Footer from "../components/FooterSection";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";


const Home = () => {
  return (
    <>
      {/* <Hero />
      <Intro />
      <Services />
      <Gallery />
      <Contact />
      <Footer /> */}
      <>
  <Navbar />

  <div id="home">
    <Hero />
  </div>
  <div id="intro">
    <Intro/>

  </div>

  <div id="services">
    <Services />
  </div>

  <div id="gallery">
    <Gallery />
  </div>
  <div id="testimonals">
    <Testimonials/>
  </div>

  <div id="contact">
    <Contact />
  </div>

  <Footer />
</>

    </>
    
  );
};

export default Home;
