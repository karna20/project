import React from "react";
import pencil from "../../images/Icons/pencil.png";
import mission from "../../images/Icons/global.png";
import action from "../../images/Icons/grid.png";
import dedication from "../../images/Icons/target.png";
import purification from "../../images/Icons/atom.png";
import satisfaction from "../../images/Icons/satisfaction.png";
import AboutUsFeature from "../AboutUs/AboutUsFeature";
import AboutUsBanner from "../AboutUs/AboutUsBanner";
import {
  EventSection,
  VerticalClass,
  FirstDiv,
  SecondDiv,
  Discription,
  Hordiv1,
  Firsthordiv,
  Secondhordiv,
  ToolIcon,
  Hordiv2,
  Heading,
  ImageBody,
  CardBody,
  ImageCarousel,
} from "./EventCard.element";
import { Card, Button, CardGroup } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import AboutUsFeature from "../AboutUs/AboutUsFeature";
const styles = {
  CardStyle: {
    boxShadow: "0px 0px 35px rgba(165, 166, 170, 0.22)",
    borderRadius: "9px",
  },
};
const features = [
  {
    image: pencil,
    title: "VISION",
    desc: "A wonderful serenity has taken possession of my entire soul like these sweet mornings.",
  },
  {
    image: mission,
    title: "MISSION",
    desc: "A wonderful serenity has taken possession of my entire soul like these sweet mornings.",
  },
  {
    image: action,
    title: "ACTION",
    desc: "A wonderful serenity has taken possession of my entire soul like these sweet mornings.",
  },
];
const otherfeatures = [
  {
    image: dedication,
    title: "DEDICATION",
    desc: "A wonderful serenity has taken possession of my entire soul like these sweet mornings.",
  },
  {
    image: purification,
    title: "PURIFICATION",
    desc: "A wonderful serenity has taken possession of my entire soul like these sweet mornings.",
  },
  {
    image: satisfaction,
    title: "SATISFACTION",
    desc: "A wonderful serenity has taken possession of my entire soul like these sweet mornings.",
  },
];
const EventCard = () => {
  return (
    <EventSection>
      <VerticalClass>
        <FirstDiv>
          <h1>ABOUT TAPOVAN </h1>
          <br></br>
          <Discription>
            Our mission is to produce the sensitive, laborious, dynamic,
            patriotic and
            <br /> spiritual leaders for bringing up perfect global amity.
          </Discription>
        </FirstDiv>
        <SecondDiv>
          <Hordiv1>
            {features.map((variable, index) => {
              return <AboutUsFeature varr={variable} key={index} />;
            })}
          </Hordiv1>
          <Hordiv1>
            {otherfeatures.map((variable, index) => {
              return <AboutUsFeature varr={variable} key={index} />;
            })}
          </Hordiv1>
        </SecondDiv>
      </VerticalClass>
      <AboutUsBanner />
    </EventSection>
  );
};

export default EventCard;
