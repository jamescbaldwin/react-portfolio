import "./App.css";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import WebViewer from "@pdftron/webviewer";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
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
    <Footer />
    </Router>

  );
}

export default App;

 