import React,{useState,useEffect} from "react";
import Navbar from "../../components/NavigationBar/NavBar";
import EventCard from "../../components/EventCard/EventCard";
import InfoSection from "../../components/InfoSection/InfoSection";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import ContactUsForm from "../../components/ContactusFrom/ContactUsForm";
import { homeObjOne, homeObjTwo, homeObjThree, SliderData } from "./Data";
import Footer from "../../components/Footer/Footer";
import secureStorage from "../../SecureStorage";
import { useHistory , Link} from "react-router-dom";


const Home = () => {
  const history = useHistory();
  useEffect(() => {
    if(secureStorage.getItem("user"))
    {
        const user =  secureStorage.getItem("user");
        if(user.role==="Student")
        {
            history.push("/home")
        }
        if(user.role==="Admin"){
            history.push("/admin")
        }
    }
  }, []);
  return (
    <>
    <Navbar />
      {/* <InfoSection {...homeObjOne} /> */}
      <VideoPlayer />
      {/* <ImageGalleryCard /> */}
      <InfoSection {...homeObjTwo} />
      <EventCard />
      <InfoSection {...homeObjThree} />
      {/* <NewsCard /> */}
      <ContactUsForm />
      <Footer/>
    </>
  );
};

export default Home;
