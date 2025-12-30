import dynamic from "next/dynamic";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Footer } from "./components/footer";

// Lazy load below-the-fold components
const About = dynamic(
  () => import("./components/about").then((mod) => mod.About),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
    ssr: true,
  },
);

const HowItWorks = dynamic(
  () => import("./components/how-it-works").then((mod) => mod.HowItWorks),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
    ssr: true,
  },
);

const Stats = dynamic(
  () => import("./components/stats").then((mod) => mod.Stats),
  {
    loading: () => <div className="h-64 animate-pulse bg-gray-100" />,
    ssr: true,
  },
);

const Testimonials = dynamic(
  () => import("./components/testimonials").then((mod) => mod.Testimonials),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
    ssr: true,
  },
);

const Pricing = dynamic(
  () => import("./components/pricing").then((mod) => mod.Pricing),
  {
    loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
    ssr: true,
  },
);

const GetStartedFinalSection = dynamic(
  () =>
    import("./components/get-started-final-section").then(
      (mod) => mod.GetStartedFinalSection,
    ),
  {
    loading: () => <div className="h-64 animate-pulse bg-gray-100" />,
    ssr: true,
  },
);

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Stats />
        <Testimonials />
        <Pricing />
        <GetStartedFinalSection />
      </main>
      <Footer />
    </div>
  );
}
