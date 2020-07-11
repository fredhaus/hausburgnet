import React, { useState } from "react";
import { Link } from "react-router-dom";

const CenteredMenu = () => {


  const [contact, setContact] = useState(false);

  const toggle = () => setContact(!contact);

  return (
    <div className="Aligner">
      <Link to={'/cv'} className="menuFont">{"Curriculum Vitae".toUpperCase()}</Link>
      <Link to={'/projects'} className="menuFont">{"Projects".toUpperCase()}</Link>
      {!contact ? <span onClick={toggle} className="menuFont">{"Contact".toUpperCase()}</span>
        :
        <div className="contactContainer">
          
          
          <span onClick={toggle} className="menuFont">{"Activated".toUpperCase()}</span>
        </div>}

    </div>
  );
}


export default CenteredMenu
