import "./App.css";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contacts />
    </>
  );
}

export default App;
