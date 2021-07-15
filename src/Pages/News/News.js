import React from "react";
import { homeObjThree } from "../HomePage/Data";
import InfoSection from "../../components/InfoSection/InfoSection";
import ContactUsForm from "../../components/ContactusFrom/ContactUsForm";
import Navbar from "../../components/NavigationBar/NavBar";
const News = () => {
  return (
    <>
    <Navbar/>
      <InfoSection {...homeObjThree} />
      <ContactUsForm />
    </>
  );
};

export default News;
