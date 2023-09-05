import React from "react";
import image from "../img/bg.png";
import figma from "../img/figma.png";
import html from "../img/html.png";
import js from "../img/js.png";
import react from "../img/react.png";
import node from "../img/node.png";
import firebase from "../img/firebase.png";
import ui from "../img/ui-ux.jpg";
import front from "../img/front.jpg";
import back from "../img/back-end.jpg";

function Services() {
  return (
    <>
      <div
        id="home"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <div id="intro">
          <h1 id="title">Services</h1>
          <h3 id="subtitle">What I offer</h3>
          <br />
        </div>

        <div className="container-services">
        <div className="images">
          <img src={ui} alt="" /> <br />
          <img src={front} alt="" /> <br />
          <img src={back} alt="" /> <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
