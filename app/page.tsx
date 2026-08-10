import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import BeyondTheCode from "@/components/BeyondTheCode";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <BeyondTheCode />
      </main>
      <Footer />
    </>
  );
}
