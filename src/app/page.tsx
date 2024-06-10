/**
 * The Home function returns a JSX element that renders a main container with multiple components
 * inside, including Intro, About, Projects, Skills, Experience, and Contact.
 * @returns The Home component is returning a main element with a className of "flex flex-col
 * items-center px-4". Inside the main element, it renders the following components in order: Intro,
 * SectionDivider, About, Projects, Skills, Experience, and Contact.
 */
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
