import React from 'react'
import EventCard from '../../components/EventCard/EventCard'
import InfoSection from '../../components/InfoSection/InfoSection'
import { homeObjOne,homeObjTwo,homeObjThree,SliderData } from "../HomePage/Data";
import Navbar from "../../components/NavigationBar/NavBar";
const UpcomingEvent = () => {
    return (
        <>
        <Navbar/>
        <InfoSection {...homeObjTwo} />
        <EventCard />
        </>
    )
}

export default UpcomingEvent
