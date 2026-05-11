import { CustomCursor } from "@/components/cde/primitives/CustomCursor";
import Nav         from "@/components/cde/Nav";
import Hero        from "@/components/cde/Hero";
import Marquee     from "@/components/cde/Marquee";
import Rhythms     from "@/components/cde/Rhythms";
import Instructors from "@/components/cde/Instructors";
import Gallery     from "@/components/cde/Gallery";
import Tickets     from "@/components/cde/Tickets";
import Footer      from "@/components/cde/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main>
        <Nav />
        <Hero />
        <Marquee />
        <Rhythms />
        <Instructors />
        <Gallery />
        <Tickets />
        <Footer />
      </main>
    </>
  );
}
