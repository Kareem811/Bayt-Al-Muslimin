import React from "react";
import { Link } from "react-router-dom";
import mushafStyles from "./mushaf.module.css";
const SurahMap = ({ number, numberOfAyat, name }) => {
  return (
    <Link key={number} to={`/surah/${number}`}>
      <h2>{name}</h2>
      <div className={mushafStyles.number}>عدد الآيات : {numberOfAyat}</div>
    </Link>
  );
};

export default SurahMap;
