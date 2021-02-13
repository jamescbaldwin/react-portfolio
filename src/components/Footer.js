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
} from "react-share"

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
                            <p href="tel:555-555-5555">(336)260-2653</p>
                        </div>
                        <div className="d-flex">
                            <p>jamescbaldwin@gmail.com</p>
                        </div>
                    </div>
                        <div className="col-lg-3 col-md-2 col-sm-6">
                            <div className="row">
                                <div className="col">
                                    <a className="footer-nav">Home</a>
                                    <br />
                                    <a className="footer-nav">About</a>
                                    <br></br>
                                    <a className="footer-nav">Services</a>
                                </div>
                                <div className="col">
                                    <a className="footer-nav">Experience</a>
                                    <br></br>
                                    <a className="footer-nav">Portoflio</a>
                                    <br></br>
                                    <a className="footer-nav">Contact</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                            <div className="d-flex justify-content-center">
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
                            <p className="pt-3 text-center">
                                Copyright&copy;
                                {new Date().getFullYear()}&nbsp;New Horizon | All Rights Reserved
                            </p>
                        </div>
                  </div>
             </div>
        </div>
    )
}

export default Footer;
