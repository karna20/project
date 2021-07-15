import React from "react";
import pencil from "../../images/Icons/pencil.png";
import "./AboutUs.css";
const AboutUsFeature = (props) => {
  return (
    <>
      <div className="whole-div">
        <div className="firsthordiv">
          <img
            className="toolicon"
            style={{ height: "45px", width: "45px" }}
            src={props.varr.image}
            alt=""
          />
        </div>
        <div className="secondhordiv">
          <div className="title">
            <b>{props.varr.title}</b>
          </div>
          <div className="details">{props.varr.desc}</div>
        </div>
      </div>
      {/* <div className="AboutUs-banner">hi</div> */}
    </>
  );
};

export default AboutUsFeature;
