import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {

    return (
        <div className="cvContainer">
            <div className="cvHomeLinkContainer">
            <Link className="cvHomeLinkContainer" to={'/'}><img className="homeLogo" src="/hsbrgHome.png" alt="Home"></img></Link>
            </div>
            <h1>Projects</h1>
        </div>
    );
}


export default Projects

