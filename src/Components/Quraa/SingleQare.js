import React, {  useEffect, useState } from "react";
import Navbar from "../../Layouts/Navbar/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import quraaStyles from "./quraa.module.css";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import changeNumbersToArabic from "../Functions/ChangeNumbers";
import Loading from "../Loading/Loading";

const SingleQare = () => {
  const [reciter, setReciter] = useState([]);
  const [swrNames, setSwrNames] = useState([]);
  const { qareeId } = useParams();
  const [rewaya, setRewaya] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://mp3quran.net/api/v3/reciters?reciter=${qareeId}`)
      .then((res) => {
        setReciter(res.data.reciters[0]);
        setLoading(false);
        document.title = `الشيخ ${reciter.name}`;
      })
      .catch((er) => {
        console.log(er);
        setLoading(false);
      });
    axios
      .get("https://mp3quran.net/api/v3/suwar")
      .then((res) => {
        setSwrNames(res.data.suwar);
        setLoading(false);
      })
      .catch((er) => {
        console.log(er);
        setLoading(false);
      });
  }, [reciter, qareeId]);
  return (
    <>
      <Navbar />
      <section style={{ gap: "10px" }} className={quraaStyles.container}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className={quraaStyles.reciterName}>
              <h1>الشيخ {reciter.name}</h1>
            </div>
            <div className={quraaStyles.rewaya}>
              <h3> رواية : </h3>
              <select onChange={(e) => setRewaya(+e.target.value)}>
                {reciter.moshaf?.map((m, idx) => (
                  <option
                    key={m.id}
                    value={idx}
                    onClick={() => {
                      setRewaya(idx);
                      console.log(rewaya);
                    }}>
                    {" "}
                    {m.name}{" "}
                  </option>
                ))}
              </select>
            </div>
            <div className={quraaStyles.singleQareSwr}>
              {swrNames.map((el, idx) => (
                <div key={idx} className={quraaStyles.surah}>
                  <div className={quraaStyles.right}>
                    <IoMdArrowDropleftCircle color="#a07d4d" size={25} />
                    <span>{changeNumbersToArabic(el.id)}</span>
                  </div>
                  <span>{el.name}</span>
                  <p>{el.makkia === 1 ? "مكيه" : "مدنيه"}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default SingleQare;
