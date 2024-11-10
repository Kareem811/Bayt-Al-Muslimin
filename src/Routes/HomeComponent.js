import React, { useEffect } from "react";
import HomeContainer from "../Components/Home/HomeContainer";
import Navbar from "../Layouts/Navbar/Navbar";

const HomeComponent = () => {
  useEffect(() => {
    document.title = `الصفحه الرئيسية`
  })
  return (
    <>
      <Navbar />
      <HomeContainer />
    </>
  );
};

export default HomeComponent;
