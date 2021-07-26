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
                    
                                <h3>M.E.R.N. Stack</h3>
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} /> </div>
                                <p>Rapidly increasing familiarity with MongoDB, Express, React, and Node.js. Plus proficiency with JavaScript ES6.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <h3>Elegant Front-End Design</h3>
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faGoogle} /> </div>

                                <p>Where a passion for any and all aesthetics comes to life. Proper style should complement, not replace substance.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <h3>Modern Technologies</h3>
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faFacebookF} /> </div>
                                <p>A deep-routed curiosity for learning the latest languages and libraries, without forgetting the basics.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <h3>Intuitive Interfaces</h3>
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} /> </div>

                                <p>It is paramount that web creations need to make sense to the user, and thus to their creators.</p>
                            </div>
                        </div>
                        {/* - */}
                    </div>
                </div>
            </div>
    )
}

export default Services
