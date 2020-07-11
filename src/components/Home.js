import React, { useState, useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router-dom";
import CenteredMenu from "./CenteredMenu";
import useWindowDimensions from "../Hooks/useWindowDImensions"

const Home = (props) => {

  const { height, width } = useWindowDimensions();

  const [mousePos, setMousePos] = useState({
    x: width / 2,
    y: height / 2,
  });

  const [pos, setPos] = useState({
    canvasX: width,
    canvasY: height,
  });

  // changeHandler = (event) => {
  //   let id = event.target.id;
  //   let value = event.target.value;
  //   this.setState({
  //     [id]: value,
  //   });
  // };

  const drawBG = () => {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    let dist = 0;
    ctx.clearRect(0, 0, pos.canvasX, pos.canvasY);
    ctx.beginPath();
    ctx.setLineDash([2, 10]);
    ctx.lineWidth = 2;
    ctx.moveTo(0, 0);
    ctx.lineTo(mousePos.x - dist, mousePos.y  - dist);
    ctx.lineTo(pos.canvasX, 0);
    let grd = ctx.createLinearGradient(pos.canvasX/2, 0, mousePos.x, (mousePos.y -100));
    grd.addColorStop(0, "#A9A9A9");
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    let grd2 = ctx.createLinearGradient(
      pos.canvasX,
      pos.canvasX,
      mousePos.x,
      mousePos.y 
    );
    grd2.addColorStop(0, "#2F4F4F");
    grd2.addColorStop(1, "white");
    ctx.lineTo(pos.canvasX, 0);
    ctx.lineTo(pos.canvasX, pos.canvasY);
    ctx.lineTo(pos.canvasX / 2, pos.canvasY);
    ctx.lineTo(mousePos.x, mousePos.y );
    ctx.closePath();
    ctx.fillStyle = grd2;
    ctx.fill();
    ctx.beginPath();
    let grd3 = ctx.createLinearGradient(
      0,
      pos.canvasX,
      mousePos.x,
      mousePos.y 
    );
    grd3.addColorStop(0, "#696969");
    grd3.addColorStop(1, "white");
    ctx.moveTo(0, pos.canvasY);
    ctx.lineTo(pos.canvasX / 2, pos.canvasY);
    ctx.lineTo(mousePos.x, mousePos.y  - dist);
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.fillStyle = grd3;
    ctx.fill();
  }


  useEffect(() => {
    drawBG()
  }, [])


  const onMouseMove2 = (e) => {
    let w = window,
      d = document,
      el = d.documentElement,
      g = d.getElementsByTagName("body")[0],
      screenWidth = w.innerWidth || e.clientWidth || g.clientWidth,
      screenHeight = w.innerHeight || e.clientHeight || g.clientHeight;

    if (pos.canvasX !== screenWidth || pos.canvasY !== screenHeight) {
      setPos({ canvasX: screenWidth, canvasY: screenHeight });
    }

    setMousePos({ x: e.screenX, y: e.screenY-135 })
    drawBG()

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
              <Link to={'/'}>Home</Link>

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
