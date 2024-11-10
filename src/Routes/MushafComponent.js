import React, { useEffect } from "react";
import Navbar from "../Layouts/Navbar/Navbar";
import Mushaf from "../Components/Mushaf/Mushaf";

const MushafComponent = () => {
  useEffect(() => {
    document.title = `المصحف المرتل`
  })
  return (
    <>
      <Navbar />
      <Mushaf />
    </>
  );
};

export default MushafComponent;
