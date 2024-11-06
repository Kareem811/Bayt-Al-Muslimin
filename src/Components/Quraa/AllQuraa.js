import React, { useEffect } from "react";
import quraaStyles from "./quraa.module.css";
import axios from "axios";
const AllQuraa = () => {
  useEffect(() => {
    axios
      .get(`https://mp3quran.net/api/v3/reciters`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });
  return (
    <section className={quraaStyles.container}>
      <h1>القـــراء</h1>
    </section>
  );
};

export default AllQuraa;
