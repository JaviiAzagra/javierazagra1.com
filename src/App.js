import { useState } from "react";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import CV from "./CV/CV";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <About />
      <Projects projects={CV.projects} />
      <Experience experience={CV.experience} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
