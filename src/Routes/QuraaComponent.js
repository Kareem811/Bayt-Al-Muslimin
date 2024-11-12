import React, { useEffect } from "react";
import Navbar from "../Layouts/Navbar/Navbar";
import AllQuraa from "../Components/Quraa/AllQuraa";
import Footer from "../Layouts/Footer/Footer";

const QuraaComponent = () => {
  useEffect(() => {
    document.title = `القراء`;
  });
  return (
    <>
      <Navbar />
      <AllQuraa />
      <Footer />
    </>
  );
};

export default QuraaComponent;
