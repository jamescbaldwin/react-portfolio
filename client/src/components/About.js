import React from 'react';
import profile from "../profile1.jpeg";

const About = () => {
    return (
        <div className="aboutEl">
            <div class="intro">
            <div>
                <h1>JAMES C. BALDWIN IV</h1>
            </div>
            <div>
                <h6>STUDENT & FREELANCE FULL-STACK DEVELOPER </h6>
            </div>  
            <div class="contentRow">
            <img src={profile} alt="James' Face" id="profilePicture"></img>
                <p id="blurb">
                    Welcome to my personal portfolio - I’m glad you’re here. I’ve designed this digital space to reflect who I am, and what I value. Who am I? A current full-stack student at UNC-Chapel Hill, and future front-end developer. And what I value is, well, just that - <em>value</em>. Value to me is anything of worth and utility, an intangible beyond the mere numerical quantity by which we measure. Value is what I aspire to provide to my own life, as well as to those around me, though my cat might beg to differ. Regardless, I want to thank you again for visiting my page, and I hope the content therein offer a glimpse of my journey toward a life in web development. Please feel free to contact me via social media or via email, whether for questions, project proposals, or for general insight. 
                </p>
            </div>
        </div>
        </div>
    )
}

export default About
