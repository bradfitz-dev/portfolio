// meta data
export const metadata = {
  title: "Brad FitzGerald - Developer",
  description: "Brad FitzGerald is a developer with 14 years of experience.",
};

// import Image from "next/image";

// css imports
import "@/css/global.css"
import "@/css/general.css"
import "@/css/colors.css"
import "@/css/fonts.css"

import "@/css/tools/flex.css"
import "@/css/tools/grid.css"
import "@/css/tools/content.css"

import "@/css/ui/buttons.css"

// section components
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
