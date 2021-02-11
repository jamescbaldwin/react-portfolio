import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
       <div className="header-wrapper">
           <div className="main-info">
               <h1>web development and website promotion</h1>
               <Typed 
                className="typed-text"
                strings={["MERN STACK", "ELEGANT FRONT-END DESIGN", "MODERN TECHNOLOGIES", "INTUITIVE INTERFACES", "JAMES C. BALDWIN IV"]}
                typeSpeed={40}
                backSpeed={60}
                loop
               />
               <a href="#" className="btn-main-offer">CONTACT</a>
           </div>
       </div>
    )
}

export default Header;
