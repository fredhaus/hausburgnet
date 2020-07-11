import React from "react";
import { withRouter, Link } from "react-router-dom";

const CenteredMenu = () => {

    return (
      <div className="Aligner">
        <Link to={'/cv'} className="menuFont">{"Curriculum Vitae".toUpperCase()}</Link>
        <Link to={'/'} className="menuFont">{"Projects".toUpperCase()}</Link>
        <Link to={'/'} className="menuFont">{"Contact".toUpperCase()}</Link>
      </div>
    );
  }


export default withRouter(CenteredMenu);
