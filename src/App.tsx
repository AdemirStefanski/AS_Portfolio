import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types";

import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import About from "@/scenes/about"
import Projects from "@/scenes/projects";
import Certifications from "@/scenes/certifications";
import Footer from "@/scenes/footer";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <Projects setSelectedPage={setSelectedPage} />
      <Certifications setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  )
}

export default App
