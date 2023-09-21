import React from "react";
import image from "../img/bg.png";

function Skills() {
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
        <div id="intro" className="p-4">
          <h1 id="titlie">Qualifications</h1>
          <h3 id="subtitle">My Personal Journey</h3>
        </div>{" "}
        <br />
        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div className="qualification__button button--flex">
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Education
            </div>
            <div className="qualification__button button--flex">
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Work
            </div>
          </div>{" "}
          <br />
          <div className="qualification__sections">
            <div className="qualification__content">
              {/*--==================== Qualification 1====================-- */}
              <div className="qualification__data">
                <div>
                  <h6 className="qualification__title">Matric</h6>
                  <span className="qualification__subtitle">Lutuka SSS</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    Jan 2016 - Nov 2018
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* ---==================== Qualification 2====================---- */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h6 className="qualification__title">
                    Junior Software Developer
                  </h6>
                  <span className="qualification__subtitle">UVU Africa</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    Feb 2023 - Jul 2023
                  </div>
                </div>
              </div>

              {/* --==================== Qualification 3====================-- */}
              <div className="qualification__data">
                <div>
                  <h6 className="qualification__title">
                    ND in Analytical Chemistry
                  </h6>
                  <span className="qualification__subtitle">
                    Cape Peninsula University of Technology
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    Jan 2020 - Nov 2022
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* --==================== Qualification 4====================-- */}
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h6 className="qualification__title">
                    Junior Software Developer
                  </h6>
                  <span className="qualification__subtitle">
                    Younglings Africa
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    Jul 2023 - Present
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
