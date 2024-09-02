import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import WavyDiv from "./components/WavyDiv";
import WavyDivGreen from "./components/WavyDivGreen";
import WaviDivOndeado from "./components/WaviDivOndeado";
import WhatsappButton from "./components/WhatsappButton";
import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init({
  duration: 1000,
  once: true,
});

function App() {
  const [showContact, setShowContact] = useState(false);
  return (
    <>
      <Header />
      <Hero />
      <WavyDiv />
      <section id="services">
        <Services />
      </section>
      <WaviDivOndeado />
      <section id="about" className="">
        <About />
      </section>
      <WavyDivGreen />
      <sectionc className="pt-80" id="contact">
        <ContactForm />
      </sectionc>
      <Footer />
      <WhatsappButton setShowContact={setShowContact} />
      {showContact && <Contact setShowContact={setShowContact} />}
    </>
  );
}

export default App;
