import React, { useEffect } from "react";
import Navbar from "../Layouts/Navbar/Navbar";
import Mushaf from "../Components/Mushaf/Mushaf";
import Footer from "../Layouts/Footer/Footer";

const MushafComponent = () => {
  useEffect(() => {
    document.title = `المصحف المرتل`
  })
  return (
    <>
      <Navbar />
      <Mushaf />
      <Footer/>
    </>
  );
};

export default MushafComponent;
