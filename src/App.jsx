import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import WavyDivGreen from "./components/WavyDivGreen";
import WaviDivOndeado from "./components/WaviDivOndeado";
import WhatsappButton from "./components/WhatsappButton";
import MissionVisionSection from "./components/MissionVisionSection";
import WavyDiv from "./components/WavyDiv";
import Customer from "./components/Customer";
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
      <section id="missionVision" className="">
        <MissionVisionSection />
      </section>
      <WavyDivGreen />
      <section id="about" className="">
        <About />
      </section>
      <WaviDivOndeado />
      <section id="services">
        <Services />
      </section>
      <WavyDiv />
      <section id="customer">
        <Customer />
      </section>

      <Footer />
      <WhatsappButton setShowContact={setShowContact} />
      {showContact && <ContactForm setShowContact={setShowContact} />}
    </>
  );
}

export default App;
