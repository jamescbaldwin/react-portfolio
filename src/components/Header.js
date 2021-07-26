import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
       <div id="home" className="header-wrapper">
           <div className="main-info">
               <h1>web and native application development</h1>
               <Typed 
                className="typed-text"
                strings={["M.E.R.N. Stack", "Elegant Front-end Design", "Modern Technologies", "Intuitive Interfaces", "James C. Baldwin IV"]}
                typeSpeed={40}
                backSpeed={60}
                loop
               />
           </div>
       </div>
    )
}

export default Header;
