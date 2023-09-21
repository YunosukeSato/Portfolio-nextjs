import About from "./components/About";
import Contact from "./components/Contact/Contact";
import Main from "./components/Main";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <>
      <NavBar />
      <Main />
      <About />
      <Skills />
      <Projects />
      {/* <Contact /> */}
    </>
  );
}
