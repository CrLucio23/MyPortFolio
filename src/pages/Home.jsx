import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import FeaturedProject from "../components/sections/FeaturedProject";
import ContactCTA from "../components/sections/ContactCTA";

export default function Home() {
  return <><Hero /><FeaturedProject /><About compact /><Skills /><ContactCTA /></>;
}
