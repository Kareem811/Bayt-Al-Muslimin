import React from "react";
import { Link } from "react-router-dom";
import mushafStyles from "./mushaf.module.css";
import changeNumbersToArabic from "../Functions/ChangeNumbers";
const SurahMap = ({ number, numberOfAyat, name }) => {
  return (
    <Link key={number} to={`/surah/${number}`}>
      <h2>{name}</h2>
      <div className={mushafStyles.number}>
        عدد الآيات : {changeNumbersToArabic(numberOfAyat)} {numberOfAyat <= 10 ? "آيات" : "آيه"}
      </div>
    </Link>
  );
};

export default SurahMap;
