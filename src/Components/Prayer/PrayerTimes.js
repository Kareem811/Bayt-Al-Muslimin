import React, { useEffect, useState } from "react";
import prayerStyles from "./prayer.module.css";
import Navbar from "../../Layouts/Navbar/Navbar";
import axios from "axios";
import SinglePrayer from "./SinglePrayer";
import Footer from "../../Layouts/Footer/Footer";

const PrayerTimes = () => {
  const [times, setTimes] = useState({});
  useEffect(() => {
    axios
      .get(`https://api.aladhan.com/v1/timingsByCity/29-10-2024?city=cairo&country=egypt&method=8`)
      .then((res) => {
        setTimes(res.data.data.timings);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar />
      <section className={prayerStyles.container}>
        <h1 style={{ fontSize: "50px" }}> مواقيت الصلاه اليوم</h1>
        <div style={{ gap: 0 }} className={prayerStyles.prayers}>
          <SinglePrayer pName={"الفـجــر"} pTime={times.Fajr} />
          <SinglePrayer pName={"الشــروق"} pTime={times.Sunrise} />
          <SinglePrayer pName={"الظــهــر"} pTime={times.Dhuhr} />
          <SinglePrayer pName={"العــصــر"} pTime={times.Asr} />
          <SinglePrayer pName={"المـغــرب"} pTime={times.Maghrib} />
          <SinglePrayer pName={"العـشــاء"} pTime={times.Isha} />
        </div>
      </section>
      {window.location.pathname === "/times" ? <Footer /> : undefined}
    </>
  );
};

export default PrayerTimes;
