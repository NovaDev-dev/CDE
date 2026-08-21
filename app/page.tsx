import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Program from "@/components/Program";
import Schedule from "@/components/Schedule";
import Instructors from "@/components/Instructors";
import Events from "@/components/Events";
import Tickets from "@/components/Tickets";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />
      <Program />
      <Gallery />
      <Schedule />
      <Instructors />
      <Tickets />
      <Events />
      <Footer />
    </main>
  );
}
