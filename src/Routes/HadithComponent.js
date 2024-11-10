import React, { useEffect } from "react";
import Navbar from "../Layouts/Navbar/Navbar";
import Hadith from "../Components/Hadith/Hadith";

const HadithComponent = () => {
  useEffect(() => {
    document.title = `الاحاديث`
  })
  return (
    <>
      <Navbar />
      <Hadith />
    </>
  );
};

export default HadithComponent;
