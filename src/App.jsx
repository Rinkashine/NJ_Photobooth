import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
