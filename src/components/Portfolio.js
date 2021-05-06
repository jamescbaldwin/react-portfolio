import React from "react";
import burger from "../assets/burgerApp.png";
import directory from "../assets/employeeDirectory.png";
import garage from "../assets/garageSwap.png";
import wander from "../assets/wanderPlus.png";
import crypto from "../assets/crypto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

        /// Crypto App
        const openPopupboxCrypto = () => {
            const popupboxConfigCrypto = {
                titleBar: {
                    enable: true,
                    text: "Crypto-Tracker React App",
                },
                fadeIn: true,
                fadeInSpeed: 500
            }
            
            const content = (
                <>
                    <img className="portfolio-image-popupbox" src={crypto} alt="Cryptocurrency Dashboard App..." />
                    <p>React application allowing users to favorite and track current/historical prices of the favorite cryptocurrency coins.</p>
                    <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jamescbaldwin/crypto-dashboard")}>https://github.com/jamescbaldwin/crypto-dashboard</a>
                    <b>Application:</b> <a className="hyper-link" onClick={() => window.open("https://jamescbaldwin.github.io/crypto-dashboard/")}>https://jamescbaldwin.github.io/crypto-dashboard/</a>
                </>
                )
                PopupboxManager.open({ content, config: popupboxConfigCrypto })
            }

    /// Burger App
    const openPopupboxBurger = () => {
        const popupboxConfigBurger = {
            titleBar: {
                enable: true,
                text: "Eat Da Burger MVC App",
            },
            fadeIn: true,
            fadeInSpeed: 500
        }
        
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={burger} alt="Burger Handlebars App..." />
                <p>A whimsical app in which users 'devour' burgers, built with MySQL, Node, Express, Handlebars, and homemade ORMs.</p>
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jamescbaldwin/eat-da-burger")}>https://github.com/jamescbaldwin/eat-da-burger</a>
                <b>Application:</b> <a className="hyper-link" onClick={() => window.open("https://enigmatic-beach-90908.herokuapp.com/")}>https://enigmatic-beach-90908.herokuapp.com/</a>
            </>
            )
            PopupboxManager.open({ content, config: popupboxConfigBurger })
        }

    /// Wander Plus App
    const openPopupboxWander = () => {
        const popupboxConfigWander = {
            titleBar: {
                enable: true,
                text: "WANDER + PLUS Geo/Info APP"
            },
            fadeIn: true,
            fadeInSpeed: 500
        }
        const content = (
        <>
            <img className="portfolio-image-popupbox" src={wander} alt="WANDER + PLUS..." />
            <p>Wander Plus delivers specs on any country a user searches, per reastcountries API, and features parallax scroll.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jamescbaldwin/WANDER-PLUS")}>https://github.com/jamescbaldwin/WANDER-PLUS</a>
            <b>Application:</b> <a className="hyper-link" onClick={() => window.open("https://jamescbaldwin.github.io/WANDER-PLUS/")}>https://jamescbaldwin.github.io/WANDER-PLUS/</a>

        </>
        )
        PopupboxManager.open({ content, config: popupboxConfigWander })
    }

   
    /// Garage Sale App
    const openPopupboxGarage = () => {
        const popupboxConfigGarage = {
            titleBar: {
                enable: true,
                text: "GARAGE-SWAP with Passport.js"
            },
            fadeIn: true,
            fadeInSpeed: 500
        }

        const content = (
        <>
            <img className="portfolio-image-popupbox" src={garage} alt="Garage-Swap..." />
            <p>Neccessitated by COVID-19, Garage-Swap allows community members to buy and sell local goods from their own home.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jamescbaldwin/DEMO100")}>https://github.com/jamescbaldwin/DEMO100</a>
            <b>Application:</b> <a className="hyper-link" onClick={() => window.open("https://enigmatic-savannah-33392.herokuapp.com/")}>https://enigmatic-savannah-33392.herokuapp.com/</a>

        </>
        )
        PopupboxManager.open({ content, config: popupboxConfigGarage })
    }
    
    /// Directory App
    const openPopupboxDirectory = () => {
        const popupboxConfigDirectory = {
            titleBar: {
                enable: true,
                text: "Employee Directory made with React"
            },
            fadeIn: true,
            fadeInSpeed: 500
        }

        const content = (
        <>
            <img className="portfolio-image-popupbox" src={directory} alt="Employee Directory..." />
            <p>A React employee directory, allowing users to alphabetically sort or filter a search for specific employees. </p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jamescbaldwin/react-employee-directory")}>https://github.com/jamescbaldwin/react-employee-directory</a>
            <b>Application:</b> <a className="hyper-link" onClick={() => window.open("https://jamescbaldwin.github.io/react-employee-directory/")}>https://jamescbaldwin.github.io/react-employee-directory/</a>
        </>
        )
        PopupboxManager.open({ content, config: popupboxConfigDirectory })
    }
    ////////////

    return (
       <div id="portfolio" className="portfolio-wrapper"> 
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                <div className="portfolio-image-box" onClick={openPopupboxCrypto}>
                        <img className="portfolio-image" src={crypto} alt="portfolio-image..."/>
                        <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
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
            <PopupboxContainer />
            <PopupboxContainer />
            <PopupboxContainer />
            <PopupboxContainer />
       </div>
    )
}

export default Portfolio;
