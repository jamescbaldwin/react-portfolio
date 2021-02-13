import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">My Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                    <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} /> </div>
                                <h3>M.E.R.N. Stack</h3>
                                <p>I've learned the full MERN stack, from basic HTML and CSS vanilla JavaScript, to JQuery and React.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                    <div className="circle"><FontAwesomeIcon className="icon" icon={faGoogle} /> </div>
                                <h3>Elegant Front-End Design</h3>
                                <p>I've learned the full MERN stack, from basic HTML and CSS vanilla JavaScript, to JQuery and React.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                    <div className="circle"><FontAwesomeIcon className="icon" icon={faFacebookF} /> </div>
                                <h3>Modern Technologies</h3>
                                <p>I've learned the full MERN stack, from basic HTML and CSS vanilla JavaScript, to JQuery and React.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                    <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} /> </div>
                                <h3>Intuitive Interfaces</h3>
                                <p>I've learned the full MERN stack, from basic HTML and CSS vanilla JavaScript, to JQuery and React.</p>
                            </div>
                        </div>
                        {/* - */}
                    </div>
                </div>
            </div>
    )
}

export default Services
