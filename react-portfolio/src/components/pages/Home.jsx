import React from "react";
import image from "../img/bg.png";
import { Link } from "react-router-dom";

function Home() {
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
        <div className="container" id="home-container">
          <div>
            <div id="home-content">
              <div className="p-2 ">
                <h1 id="home-title">
                  Hi There !
                  <span id="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>{" "}
                  I am Khanyisile Mdleleni
                </h1>
              </div>
              <div className="p-2 ">
                <h3 id="home-subtitle">Frontend Developer</h3>
              </div>
              <div className="p-2 ">
                <p id="home-description">
                  Mid level experience in web design and development knowledge.
                </p>
                {"  "}
                <br />
                <div id="icons">
                  <span>
                    <a
                      href="https://www.linkedin.com/in/khanyisile-mdleleni-b77691250/"
                      className="home__social-icon"  target="_blank"
                    >
                      <i className="uil uil-linkedin"></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://github.com/Khanyisile-Mdleleni"
                      className="home__social-icon"  target="_blank"
                    >
                      <i className="uil uil-github"></i>
                    </a>
                  </span>
                  <span>
                    <a
                      href="https://m.facebook.com/khanyisile.mdleleni.16?eav=AfYMrSPTI18yWVy7cTOlgkNuds"
                      className="home__social-icon"  target="_blank"
                    >
                      <i className="uil uil-facebook"></i>
                    </a>
                  </span>
                </div> <br />
                <div>
                  <Link to="/contact">
                    <button type="button" id="btn">
                      Contact Me <i className="uil uil-message"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
