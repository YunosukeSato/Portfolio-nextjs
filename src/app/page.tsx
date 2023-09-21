import About from "./components/About";
import Contact from "./components/Contact/Contact";
import Main from "./components/Main";
import Navbar from "./components/NavBar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      {/* <Contact /> */}
    </>
  );
}
