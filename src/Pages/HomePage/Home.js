import React from "react";
import Cards from "../../components/Cards/Cards";
import EventCard from "../../components/EventCard/EventCard";
import ImageGalleryCard from "../../components/ImageGalleryCard/ImageGalleryCard";
import InfoSection from "../../components/InfoSection/InfoSection";
import NewsCard from "../../components/NewsCards/NewsCard";
import Handle from "../Login/Handle";
import { Login } from "../Login/login";
import { homeObjOne,homeObjTwo,homeObjThree,SliderData } from "./Data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <ImageGalleryCard />
      <InfoSection {...homeObjTwo} />
      <EventCard />
      <InfoSection {...homeObjThree} />
      <NewsCard />
      
    </>
  );
};

export default Home;
