// section components
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Stats from "@/components/sections/Stats";
import Projects from "@/components/sections/Projects";

function Home() {
  return (
      <>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Stats />
        <Projects />
      </>
  )
}

export default Home