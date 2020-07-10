import React, { useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router-dom";
import CenteredMenu from "./CenteredMenu";

const Home = (props) => {
  const [rgb, setRgb] = useState({
    x: "",
    y: "",
  });

  const [pos, setPos] = useState({
    canvasX: 500,
    canvasY: 500,
  });

  // changeHandler = (event) => {
  //   let id = event.target.id;
  //   let value = event.target.value;
  //   this.setState({
  //     [id]: value,
  //   });
  // };

  const onMouseMove2 = (e) => {
    let w = window,
      d = document,
      el = d.documentElement,
      g = d.getElementsByTagName("body")[0],
      screenWidth = w.innerWidth || e.clientWidth || g.clientWidth,
      screenHeight = w.innerHeight || e.clientHeight || g.clientHeight;

    if (pos.canvasX != screenWidth || pos.canvasY != screenHeight) {
      setPos({ canvasX: screenWidth, canvasY: screenHeight });
    }

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    let dist = 0;

    ctx.clearRect(0, 0, pos.canvasX, pos.canvasY);
    ctx.beginPath();
    ctx.setLineDash([2, 10]);
    ctx.lineWidth = 2;
    ctx.moveTo(0, 0);
    ctx.lineTo(e.screenX - dist, e.screenY - 100 - dist);
    ctx.lineTo(pos.canvasX, 0);
    let grd = ctx.createLinearGradient(0, 0, 0, (e.screenY - 100) * 0.8);
    grd.addColorStop(0, "#A9A9A9");
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    let grd2 = ctx.createLinearGradient(
      pos.canvasX,
      pos.canvasX,
      e.screenX,
      e.screenY - 100
    );
    grd2.addColorStop(0, "#2F4F4F");
    grd2.addColorStop(1, "white");
    ctx.lineTo(pos.canvasX, 0);
    ctx.lineTo(pos.canvasX, pos.canvasY);
    ctx.lineTo(pos.canvasX / 2, pos.canvasY);
    ctx.lineTo(e.screenX, e.screenY - 100);
    ctx.closePath();
    ctx.fillStyle = grd2;
    ctx.fill();

    ctx.beginPath();
    let grd3 = ctx.createLinearGradient(
      0,
      pos.canvasX,
      e.screenX,
      e.screenY - 100
    );
    grd3.addColorStop(0, "#696969");
    grd3.addColorStop(1, "white");
    ctx.moveTo(0, pos.canvasY);
    ctx.lineTo(pos.canvasX / 2, pos.canvasY);
    ctx.lineTo(e.screenX, e.screenY - 100 - dist);
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.fillStyle = grd3;
    ctx.fill();

    // ctx.lineTo(e.screenX + dist, e.screenY - 100 - dist);

    // ctx.lineTo(e.screenX, e.screenY - 100 + dist);
    // ctx.strokeStyle = "#FF0000";
    // ctx.stroke();

    // ctx.clearRect(0, 0, pos.canvasX, pos.canvasY);
    // ctx.beginPath();
    // ctx.setLineDash([2, 10]);
    // ctx.lineWidth = 2;
    // ctx.moveTo(0, 0);
    // ctx.lineTo(e.screenX - dist, e.screenY - 100 - dist);
    // ctx.moveTo(pos.canvasX, 0);
    // ctx.lineTo(e.screenX + dist, e.screenY - 100 - dist);
    // ctx.moveTo(pos.canvasX / 2, pos.canvasY);
    // ctx.lineTo(e.screenX, e.screenY - 100 + dist);
    // ctx.strokeStyle = "#FF0000";
    // ctx.stroke();
  };

  const content = (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <div onMouseMove={onMouseMove2}>
            <div className="homeBG">
              <canvas
                className="canvas"
                id="myCanvas"
                width={`${pos.canvasX}`}
                height={`${pos.canvasY}`}
              ></canvas>
              <div className="vCenter">
                <CenteredMenu></CenteredMenu>
              </div>
            </div>
          </div>
        )}
      ></Route>
      <Route
        path="/cv"
        render={() => (
          <div onMouseMove={onMouseMove2}>
          <div className="homeBG">
            <canvas
              className="canvas"
              id="myCanvas"
              width={`${pos.canvasX}`}
              height={`${pos.canvasY}`}
            ></canvas>
                    <Link to={'/'} className="menuFont">Home</Link>

            <h2>Frederik Hausburg</h2>
          </div>
          </div>
        )}
      ></Route>
    </Switch>
  );
  return content;
};

export default withRouter(Home);
