import { About } from "./components/about";
import { Footer } from "./components/footer";
import { GetStartedFinalSection } from "./components/get-started-final-section";
import { Hero } from "./components/hero";
import { HowItWorks } from "./components/how-it-works";
import { Navbar } from "./components/navbar";
import { Pricing } from "./components/pricing";
import { Stats } from "./components/stats";
import { Testimonials } from "./components/testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <Pricing />
      <GetStartedFinalSection />
      <Footer />
    </div>
  );
}
