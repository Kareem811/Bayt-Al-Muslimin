import React, { useEffect } from "react";
import HomeContainer from "../Components/Home/HomeContainer";
import Navbar from "../Layouts/Navbar/Navbar";
import Footer from "../Layouts/Footer/Footer";
import Background from "../Components/Home/Background/Background";
import PrayerTimes from "../Components/Prayer/PrayerTimes";
import RandomAyah from "../Components/Home/Random Ayah/RandomAyah";

const HomeComponent = () => {
  useEffect(() => {
    document.title = `الصفحه الرئيسية`;
  });
  return (
    <>
      <Navbar />
      <Background />
      <HomeContainer />
      <PrayerTimes />
      <RandomAyah />
      <Footer />
    </>
  );
};

export default HomeComponent;
