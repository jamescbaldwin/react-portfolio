import React from "react";

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>2007-2012</h3>
                            <p>Student at The University of North Carolina, Chapel Hill. Originally I began studying economics, but eventually switched my major to sociology. A very formative period of my life, certainly.
                            </p>
                        </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"> </div>
                        <div className="timeline-content">
                            <h3>2013-2018</h3>
                            <p>My first job outside of college was at a prestigious hotel located (ironically) by Duke University's campus. I worked in food & beverage in a leadership capacity, in addition to assisting our hosting of corporate golf outings for the hotel's highly-regarded NCAA golf course.
                            </p>
                        </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>2018-2020</h3>
                            <p>A desire for a change in scenery led me to work for a multi-sport, multi-channel retail company specializing in customizing apparel and equipment for youth soccer leagues accross the nation.
                            </p>
                        </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>2020-2021</h3>
                            <p>A definitive career pivot, I enrolled in UNC x Trilogy Education Services coding bootcamp. Perhaps the most academically challenging 6 months of my life, the experience as a whole has been as rewarding as it has been difficult.
                            </p>
                        </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>2021-</h3>
                            <p>The next step in this journey toward becoming a full-time web-developer is soon approaching. I'm eger to expand my freshly acquired skillset, and look forward to the possibility of working with other creators around the world, especially if it involves relocating to a new locale. 
                            </p>
                        </div>
                </div>
                {/* - */}
            </div>
        </div>
    )
}

export default Experience;
