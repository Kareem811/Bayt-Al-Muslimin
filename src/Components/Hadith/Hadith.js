import React, { useEffect, useState } from "react";
import hadithStyles from "../Home/home.module.css";
import axios from "axios";
import HadithCategory from "./HadithCategory";
const Hadith = () => {
  const [hadith, setHadith] = useState([]);
  useEffect(() => {
    axios
      .get(`https://hadis-api-id.vercel.app/hadith/`)
      .then((res) => setHadith(res.data))
      .catch((err) => console.log(err));
  } , []);
  return (
    <section className={hadithStyles.container}>
      <h1>الأحاديــــث</h1>
      <div className={hadithStyles.content}>
        {hadith.map((el, idx) => (
          <HadithCategory data={el} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Hadith;
