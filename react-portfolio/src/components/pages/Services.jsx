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
          <div className="box">
            <div className="imgBx">
              <img src={ui} />
            </div>
            <div className="content">
              <div>
                <h2>UI/UX Design</h2>
                <p>
                  <ul>
                    <li> Designing engaging and responsive landing pages.</li>
                    <li>
                      {" "}
                      Creating the design and layout of a website or web pages.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img src={front} />
            </div>
            <div className="content">
              <div>
                <h2>Frontend Developer</h2>
                <p>
                  <ul>
                    <li>
                      Uses frameworks like react to create user-friendly web
                      pages.
                    </li>
                    <li>Create quality mockups and prototypes.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img src={back} />
            </div>
            <div className="content">
              <div>
                <h2>Backend Developer</h2>
                <p>
                  <ul>
                    <li>
                      Implements responses to what the front-end has initiated.
                    </li>
                    <li>Creating databases.</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
