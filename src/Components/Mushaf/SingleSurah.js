import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../Layouts/Navbar/Navbar";
import mushafStyles from "./mushaf.module.css";
import AyahTafseer from "./AyahTafseer";
import changeNumbersToArabic from "../Functions/ChangeNumbers";
const SingleSurah = () => {
  const { surahId } = useParams();
  const [surah, setSurah] = useState([]);
  // const [arabicNumbers] = useState(["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"]);
  const [tafser, setTafser] = useState(false);
  const [aya, setAyah] = useState({});
  // const changeNumbersToArabic = (num) => {
  //   return num
  //     .toString()
  //     .split("")
  //     .map((n) => arabicNumbers[parseInt(n, 10)])
  //     .join("");
  // };
  useEffect(() => {
    axios
      .get(`https://quranenc.com/api/v1/translation/sura/arabic_moyassar/${surahId}`)
      .then((res) => {
        // console.log(res.data.result);
        setSurah(res.data.result);
      })
      .catch((err) => console.log(err));
  }, [surahId]);
  const getTafser = (x) => {
    setAyah(x);
    setTafser(true);
  };
  const closeTafser = () => {
    setTafser(false);
  };
  return (
    <>
      <Navbar />
      <section className={mushafStyles.container}>
        {tafser && <AyahTafseer data={aya} close={closeTafser} />}
        <h1>{surah.name}</h1>
        <div className={mushafStyles.ayahs}>
          {surah.map((el, idx) => (
            <div onClick={() => getTafser(el)} key={idx} className={mushafStyles.ayah}>
              <span>{el.arabic_text}</span>
              <div className={mushafStyles.ayahNumber}>
                <span>{changeNumbersToArabic(el.aya)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SingleSurah;
