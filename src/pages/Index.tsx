import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Education from "@/components/Education";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Education />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
