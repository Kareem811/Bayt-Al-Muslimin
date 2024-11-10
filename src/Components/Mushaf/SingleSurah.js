import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Layouts/Navbar/Navbar";
import mushafStyles from "./mushaf.module.css";
import AyahTafseer from "./AyahTafseer";
import changeNumbersToArabic from "../Functions/ChangeNumbers";
import Loading from "../Loading/Loading";
import SwrNames from "../../Utilities/SwrNames";
const SingleSurah = () => {
  const { surahId } = useParams();
  const [surah, setSurah] = useState([]);
  const [tafser, setTafser] = useState(false);
  const [aya, setAyah] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://quranenc.com/api/v1/translation/sura/arabic_moyassar/${surahId}`)
      .then((res) => {
        setSurah(res.data.result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    document.title = `سورة ${SwrNames[surahId - 1]}`;
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
      {loading ? (
        <Loading />
      ) : (
        <section className={mushafStyles.container}>
          {tafser && <AyahTafseer data={aya} close={closeTafser} />}
          <div className={mushafStyles.intro}>
            <h1>سورة {SwrNames[surahId - 1]} </h1>
            {surah[0].arabic_text !== "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ" && <span className={mushafStyles.start}>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</span>}
          </div>
          <div className={mushafStyles.ayahs}>
            <>
              {surah.map((el, idx) => (
                <div onClick={() => getTafser(el)} key={idx} className={mushafStyles.ayah}>
                  <span>{el.arabic_text}</span>
                  <div className={mushafStyles.ayahNumber}>
                    <span>{changeNumbersToArabic(el.aya)}</span>
                  </div>
                </div>
              ))}
            </>
          </div>
        </section>
      )}
    </>
  );
};

export default SingleSurah;
