import React from "react";
import "./AboutUsBanner.css";
import event from "../../images/Icons_AboutUs/calendar.png";
import countries from "../../images/Icons_AboutUs/coronavirus.png";
import students from "../../images/Icons_AboutUs/graduated.png";
import map from "../../images/Icons_AboutUs/placeholder.png";

const AboutUsBanner = () => {
  return (
    <div className="first-div">
      <div className="class-statistics">
        <h1><b>STATISTICS</b></h1>
      </div>
      <div className="icon-container">
        <div className="div-event">
          <img
            className="icon-event"
            style={{ height: "80px", width: "80px" }}
            src={event}
            alt=""
          />
          <div className="info-number">25</div>
          <div className="info-desc">Events</div>
        </div>
        <div className="div-event">
          <img
            className="icon-countries"
            style={{ height: "80px", width: "80px" }}
            src={countries}
            alt=""
          />
          <div className="info-number">15</div>
          <div className="info-desc">countries</div>
        </div>
        <div className="div-event">
          <img
            className="icon-student"
            style={{ height: "80px", width: "80px" }}
            src={students}
            alt=""
          />
          <div className="info-number">10000</div>
          <div className="info-desc">Students</div>
        </div>
        <div className="div-event">
          <img
            className="icon-map"
            style={{ height: "80px", width: "80px" }}
            src={map}
            alt=""
          />
          <div className="info-number">1000</div>
          <div className="info-desc">Location</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
