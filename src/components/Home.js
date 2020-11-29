import React, { useState, useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router-dom";
import useWindowDimensions from "../Hooks/useWindowDImensions";

import CenteredMenu from "./CenteredMenu";
import CV from "./CV";
import Projects from "./Projects";
import HiddenGraphics from "./HiddenGraphics";

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

  const drawBG = () => {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    let dist = 0;
    ctx.clearRect(0, 0, pos.canvasX, pos.canvasY);
    ctx.beginPath();
    ctx.setLineDash([2, 10]);
    ctx.lineWidth = 2;
    ctx.moveTo(0, 0);
    ctx.lineTo(mousePos.x - dist, mousePos.y);
    ctx.lineTo(pos.canvasX, 0);
    let grd = ctx.createLinearGradient(
      pos.canvasX / 2,
      0,
      mousePos.x,
      mousePos.y
    );
    grd.addColorStop(0, "#A9A9A9");
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    let grd2 = ctx.createLinearGradient(
      pos.canvasX,
      pos.canvasY,
      mousePos.x,
      mousePos.y
    );
    grd2.addColorStop(0, "#2F4F4F");
    grd2.addColorStop(1, "white");
    ctx.lineTo(pos.canvasX, 0);
    ctx.lineTo(pos.canvasX, pos.canvasY);
    ctx.lineTo(pos.canvasX / 2, pos.canvasY);
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.closePath();
    ctx.fillStyle = grd2;
    ctx.fill();

    ctx.beginPath();
    let grd3 = ctx.createLinearGradient(0, pos.canvasY, mousePos.x, mousePos.y);
    grd3.addColorStop(0, "#696969");
    grd3.addColorStop(1, "white");
    ctx.moveTo(0, pos.canvasY);
    ctx.lineTo(pos.canvasX / 2, pos.canvasY);
    ctx.lineTo(mousePos.x, mousePos.y);
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.fillStyle = grd3;
    ctx.fill();
  };

  useEffect(() => {
    drawBG();
  }, []);

  useEffect(() => {
    function handleResize() {
      setPos({
        canvasY: window.innerHeight,
        canvasX: window.innerWidth,
      });
      console.log("pos: ", pos);
      drawBG();
    }

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

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
    setMousePos({ x: e.pageX, y: e.pageY });
    drawBG();
  };

  const content = (
    <div>
      <HiddenGraphics />
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
          exact
          path="/projects"
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
          path="/metadomain"
          component={() => {
            window.location.href = "https://metadomain2.herokuapp.com/";
            return null;
          }}
        />
        <Route
          path="/dressmeup"
          component={() => {
            window.location.href = "https://dressmeup2.herokuapp.com/";
            return null;
          }}
        />
        <Route
          path="/evi2"
          component={() => {
            window.location.href = "https://evi2.herokuapp.com/";
            return null;
          }}
        />
      </Switch>
    </div>
  );
  return content;
};

export default withRouter(Home);
