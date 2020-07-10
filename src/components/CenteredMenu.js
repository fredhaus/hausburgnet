import React from "react";
import { withRouter } from "react-router-dom";

class CenteredMenu extends React.Component {
  state = {
    menu1: "Curriculum Vitae".toUpperCase(),
    menu2: "Projects".toUpperCase(),
    menu3: "Contact".toUpperCase(),
  };

  render() {
    return (
      <div className="Aligner">
        <a href="#" className="menuFont">{this.state.menu1}</a>
        <a href="#"className="menuFont">{this.state.menu2}</a>
        <a href="#" className="menuFont">{this.state.menu3}</a>
      </div>
    );
  }
}

export default withRouter(CenteredMenu);
