import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";



function App() {
  return (
    <>
    <Particles 
      params={{
        particles: {
          number: {
            value: 40,
            density: {
              enable: true, 
              value_area: 900
          }
         },
         shape: {
           type: "hexagon",
           stroke: {
             width: 6,
             color: "#f9ab00"
           }
         }
        } 
      }}
    />
    <Navbar />
    <Header />
    <About />
    <Services />
    <Experience />
    <Portfolio />
    <Contact />
    </>
  );
}

export default App;

 