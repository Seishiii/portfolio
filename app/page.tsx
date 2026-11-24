import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import TechStack from "@/components/home/TechStack";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <FeaturedProjects />
      <ContactCTA />
    </>
  );
}
