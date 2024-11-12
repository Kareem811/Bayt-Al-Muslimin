import React, { useEffect } from "react";
import Navbar from "../Layouts/Navbar/Navbar";
import Hadith from "../Components/Hadith/Hadith";
import Footer from "../Layouts/Footer/Footer";

const HadithComponent = () => {
  useEffect(() => {
    document.title = `الاحاديث`;
  });
  return (
    <>
      <Navbar />
      <Hadith />
      <Footer/>
    </>
  );
};

export default HadithComponent;
