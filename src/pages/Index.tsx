import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Certificates } from "@/components/portfolio/Certificates";
import { Experience } from "@/components/portfolio/Experience";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { MusicPlayer } from "@/components/portfolio/MusicPlayer";

const Index = () => {
  return (
    <main className="relative">
      <Navbar />
      <MusicPlayer />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Experience />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Index;
