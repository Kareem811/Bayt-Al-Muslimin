import React, { useEffect, useState } from "react";
import mushafStyles from "./mushaf.module.css";
import axios from "axios";
import SurahMap from "./SurahMap";
const Mushaf = () => {
  const [swr, setSwr] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.alquran.cloud/v1/surah`)
      .then((res) => setSwr(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className={mushafStyles.container}>
      <h1>المصحف المرتل</h1>
      <div className={mushafStyles.content}>
        {swr.map((el) => (
          <SurahMap key={el.number} number={el.number} name={el.name} numberOfAyat={el.numberOfAyahs} />
        ))}
      </div>
    </section>
  );
};

export default Mushaf;
