import React from "react";
import { withRouter, Link } from "react-router-dom";

class CenteredMenu extends React.Component {
  state = {
    menu1: "Curriculum Vitae".toUpperCase(),
    menu2: "Projects".toUpperCase(),
    menu3: "Contact".toUpperCase(),
  };

  render() {
    return (
      <div className="Aligner">
        <Link to={'/cv'} className="menuFont">{this.state.menu1}</Link>
        <Link href="#"className="menuFont">{this.state.menu2}</Link>
        <Link href="#" className="menuFont">{this.state.menu3}</Link>
      </div>
    );
  }
}

export default withRouter(CenteredMenu);
