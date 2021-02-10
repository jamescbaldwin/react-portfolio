import React from "react";
import profile from "../profile1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
          <div className="container">

        <a className="navbar-brand" href="#"><img className="profile" src={profile} alt="JAMES" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "whitesmoke"}} />
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">SERVICES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">CHRONOLOGY</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">PORTFOLIO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">CONTACT</a>
            </li>
          </ul>
        </div>
          </div>
      </nav>
    )
}

export default Navbar
