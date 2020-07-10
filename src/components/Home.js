import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  const onMouseMove = (e) => {
    let w = window,
      d = document,
      el = d.documentElement,
      g = d.getElementsByTagName("body")[0],
      screenWidth = w.innerWidth || e.clientWidth || g.clientWidth,
      screenHeight = w.innerHeight || e.clientHeight || g.clientHeight;

    let x = Math.round(252 * (e.screenX / screenWidth));
    let y = Math.round(252 * (e.screenY / screenHeight));

    setRgb({ x: x, y: y });
  };

  const onMouseMove2 = (e) => {
    let w = window,
      d = document,
      el = d.documentElement,
      g = d.getElementsByTagName("body")[0],
      screenWidth = w.innerWidth || e.clientWidth || g.clientWidth,
      screenHeight = w.innerHeight || e.clientHeight || g.clientHeight;

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    console.log(e.screenX);

    let dist = 50;

    ctx.clearRect(0, 0, pos.canvasX, pos.canvasY);
    ctx.beginPath();
    ctx.setLineDash([2, 10]);
    ctx.lineWidth = 2;
    ctx.moveTo(0, 0);
    ctx.lineTo(e.screenX - dist, e.screenY - 100 - dist);
    ctx.moveTo(pos.canvasX, 0);
    ctx.lineTo(e.screenX + dist, e.screenY - 100 - dist);
    ctx.moveTo(pos.canvasX / 2, pos.canvasY);
    ctx.lineTo(e.screenX, e.screenY - 100 + dist);
    ctx.strokeStyle = "#FF0000";
    ctx.stroke();

    if (pos.canvasX != screenWidth || pos.canvasY != screenHeight) {
      setPos({ canvasX: screenWidth, canvasY: screenHeight });
    }
  };

  const content = (
    <div onMouseMove={onMouseMove2}>
      <div
        className="homeBG"
        onMouseMove={onMouseMove}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(${rgb.x}, ${rgb.y}, 76, 0.2))`,
        }}
      >
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
  );
  return content;
};

export default withRouter(Home);
