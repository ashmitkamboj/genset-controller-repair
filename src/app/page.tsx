import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { RepairsSection } from "@/components/RepairsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <AboutSection />
        <RepairsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
