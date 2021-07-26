import React from "react";
import profile from "../assets/profile1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";


const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">

        <a className="navbar-brand" href="#"><img className="profile" src={profile} alt="JAMES" 
        /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" 
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
        aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "whitesmoke"}} />
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link" href="#">Home <span 
              className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">about</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="services" offset={-110} className="nav-link" href="#">services</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="experience" offset={-160} className="nav-link" href="#">experience</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="portfolio" offset={-110} className="nav-link" href="#">portfolio</Link>
            </li>
            {/* <li className="nav-item">
              <Link smooth={true} to="contact" offset={-110} className="nav-link" href="#">contact</Link>
            </li> */}
            <li className="nav-item">
              <Link smooth={true} to="resume" offset={-110} className="nav-link" href="#">résumé</Link>
            </li>
          </ul>
        </div>
          </div>
      </nav>
    )
}

export default Navbar
