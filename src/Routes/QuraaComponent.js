import React, { useEffect } from "react";
import Navbar from "../Layouts/Navbar/Navbar";
import AllQuraa from "../Components/Quraa/AllQuraa";

const QuraaComponent = () => {
  useEffect(() => {
    document.title = `القراء`
  })
  return (
    <>
      <Navbar />
      <AllQuraa />
    </>
  );
};

export default QuraaComponent;
