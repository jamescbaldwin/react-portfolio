import React from "react";
import burger from "../assets/burgerApp.png";
import directory from "../assets/employeeDirectory.png";
import garage from "../assets/garageSwap.png";
import wander from "../assets/wanderPlus.png"
// import passwordGen from "../assets/passwordGenerator.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

    const openPopupboxBurger = () => {
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={burger} alt="Burger Handlebars App" />
            <p>Sed consectetur massa sed metus elementum, blandit suscipit ante blandit. In venenatis tortor lorem, vitae placerat sapien lacinia vitae.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jamescbaldwin/eat-da-burger")}>https://github.com/jamescbaldwin/eat-da-burger</a>
        </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigBurger = {
        titleBar: {
            enable: true,
            text: "Eat Da Burger MVC App"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    ///////////
    const openPopupboxWander = () => {
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={wander} alt="WANDER + PLUS" />
            <p>Sed consectetur massa sed metus elementum, blandit suscipit ante blandit. In venenatis tortor lorem, vitae placerat sapien lacinia vitae.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jamescbaldwin/WANDER-PLUS")}>https://github.com/jamescbaldwin/WANDER-PLUS</a>
        </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigWander = {
        titleBar: {
            enable: true,
            text: "WANDER + PLUS Geo/Info APP"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    ////////////
    const openPopupboxGarage = () => {
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={garage} alt="Garage-Swap" />
            <p>Sed consectetur massa sed metus elementum, blandit suscipit ante blandit. In venenatis tortor lorem, vitae placerat sapien lacinia vitae.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jamescbaldwin/DEMO100")}>https://github.com/jamescbaldwin/DEMO100</a>
        </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigGarage = {
        titleBar: {
            enable: true,
            text: "GARAGE-SWAP with Passport.js"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    ////////////
    const openPopupboxDirectory = () => {
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={directory} alt="Employee Directory" />
            <p>Sed consectetur massa sed metus elementum, blandit suscipit ante blandit. In venenatis tortor lorem, vitae placerat sapien lacinia vitae.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jamescbaldwin/react-employee-directory")}>https://github.com/jamescbaldwin/react-employee-directory</a>
        </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigDirectory = {
        titleBar: {
            enable: true,
            text: "Employee Directory made with React"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    ////////////

    return (
       <div className="portfolio-wrapper"> 
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                <div className="portfolio-image-box" onClick={openPopupboxBurger}>
                    <img className="portfolio-image" src={burger} alt="portfolio-image..."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                <div className="portfolio-image-box" onClick={openPopupboxGarage}>
                    <img className="portfolio-image" src={garage} alt="portfolio-image..."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                <div className="portfolio-image-box" onClick={openPopupboxWander}>
                    <img className="portfolio-image" src={wander} alt="portfolio-image..."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                <div className="portfolio-image-box" onClick={openPopupboxDirectory}>
                    <img className="portfolio-image" src={directory} alt="portfolio-image..."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigBurger} />
            <PopupboxContainer {...popupboxConfigGarage} />
            <PopupboxContainer {...popupboxConfigWander} />
            <PopupboxContainer {...popupboxConfigDirectory} />
       </div>
    )
}

export default Portfolio;
