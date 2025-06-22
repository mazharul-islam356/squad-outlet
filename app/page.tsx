import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ClientLogos from "./components/ClientLogos";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <ClientLogos />
      <CallToAction />
      <ContactForm />
      <Footer />
    </main>
  );
}
