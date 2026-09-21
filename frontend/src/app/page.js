import Image from "next/image";

// section components
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

// css imports
import "@/css/global.css"
import "@/css/general.css"
import "@/css/colors.css"
import "@/css/fonts.css"

import "@/css/tools/flex.css"
import "@/css/tools/grid.css"
import "@/css/tools/buttons.css"
import "@/css/tools/popup.css"

function Home() {
  return (
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
  )
}

export default Home