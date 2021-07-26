import React from "react";
import resumeImg from "../assets/resumeImg.png";

const Resume = () => {
    return (
        <div id="resume" className="resume-container">
            <div>
                <h4 className="resume-header">Here's a snapshot of my current résumé .... to access as a PDF, click <a href="https://docs.google.com/document/d/1Yvm2z8AvEavDxrvmSpLpkIz2ftg7xWQz7Vl79leAbA4/export?format=pdf
" target="_blank" >here</a> </h4>
            </div>
            <div>
                <img  src={resumeImg} alt="resume" className="resume-screenshot" />
            </div>
        </div>
    )
}

export default Resume;