import Approch from "@/components/Approch";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      {/* Header */}
      <div className="max-w-7xl w-full relative px-5 sm:px-10">
        <Hero />
        <Grid />
      </div>
      <div className="w-full">
        {/* Services */}
        <Services />
        {/* Approch */}
        <Approch />
        {/* Projects */}
        <Projects />
        {/* Contact */}
        <Contact />
        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
