import React from "react";
import { Link, Redirect, Switch, Route, useParams } from "react-router-dom";

// import Navbar from "./components/Navbar"

import Home from "./components/Home";


class App extends React.Component {
  state = {
    user: this.props.user
  };

  updateUser = userObj => {
    this.setState({
      user: userObj
    });
  };

  consoleLog = () => {
    console.log("APP STATE: ", this.state)
  }


  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <Home></Home>
              </div>
            )}
          ></Route>

        </Switch>
      </div>
    );
  }
}




export default App;
