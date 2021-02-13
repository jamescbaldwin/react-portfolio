import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share";
import {Link} from "react-scroll";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>3484 Cook Street, Mebane, North Carolina</p>
                        </div>
                        <div className="d-flex">
                            <p href="tel:555-555-5555">+1 (336) 260-2653</p>
                        </div>
                        <div className="d-flex">
                            <p>jamescbaldwin@gmail.com</p>
                        </div>
                    </div>
                        <div className="col-lg-3 col-md-2 col-sm-6">
                            <div className="row">
                                <div className="col footer-links">
                                    <Link smooth={true} to="home" className="footer-nav">Home</Link>
                                    <br />
                                    <Link smooth={true} to="about" className="footer-nav">About</Link>
                                    <br></br>
                                    <Link smooth={true} to="services" className="footer-nav">Services</Link>
                                </div>
                                <div className="col footer-links">
                                    <Link smooth={true} to="experience" className="footer-nav">Experience</Link>
                                    <br></br>
                                    <Link smooth={true} to="portfolio" className="footer-nav">Portoflio</Link>
                                    <br></br>
                                    <Link smooth={true} to="contact" className="footer-nav">Contact</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                            <div id="iconEl" className="d-flex justify-content-center">
                                <FacebookShareButton
                                url={"https://www.facebook.com/jamescbaldwiniv"}
                                quote={"FullStack Developer"}
                                hashtag="react"
                                >
                                 <FacebookIcon  className="mx-3" size={36}/>
                                </FacebookShareButton>

                                <TwitterShareButton
                                url={"https://twitter.com/James08914681"}
                                quote={"FullStack Developer"}
                                hashtag="react"
                                >
                                 <TwitterIcon  className="mx-3" size={36}/>
                                </TwitterShareButton>

                                <RedditShareButton
                                url={"https://www.reddit.com/"}
                                quote={"FullStack Developer"}
                                hashtag="react"
                                >
                                 <RedditIcon  className="mx-3" size={36}/>
                                </RedditShareButton>

                                <LinkedinShareButton
                                url={"https://www.linkedin.com/in/james-baldwin-98446838/"}
                                quote={"FullStack Developer"}
                                hashtag="react"
                                >
                                 <LinkedinIcon  className="mx-3" size={36}/>
                                </LinkedinShareButton> 
                            </div>
                            <p id="copyright" className="pt-3 text-center">
                                Copyright&copy;
                                {new Date().getFullYear()}&nbsp;JCB4 | All Rights Reserved
                            </p>
                        </div>
                  </div>
             </div>
        </div>
    )
}

export default Footer;
