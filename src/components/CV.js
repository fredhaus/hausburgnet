import React from "react";
import { Link } from "react-router-dom";

const CV = () => {



    return (
        <div className="cvContainer">
            <div className="cvHomeLinkContainer">
            <Link className="cvHomeLinkContainer" to={'/'}><img className="homeLogo" src="/hsbrgHome.png" alt="Home"></img></Link>
            </div>
            <h1>Frederik Hausburg</h1>
        </div>
    );
}


export default CV



