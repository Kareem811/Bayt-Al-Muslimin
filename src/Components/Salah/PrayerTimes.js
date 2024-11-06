import React, { useEffect, useState } from "react";
import prayerStyles from "./prayer.module.css";
import Navbar from "../../Layouts/Navbar/Navbar";
import axios from "axios";
import SinglePrayer from "./SinglePrayer";
// import fajr from "../../Assets/Images/Prayers/fajr.jpg";
// import sunrise from "../../Assets/Images/Prayers/sunrise.jpg";
// import Dohr from "../../Assets/Images/Prayers/Dohr.jpg";
// import asr from "../../Assets/Images/Prayers/asr.jpg";
// import Maghrib from "../../Assets/Images/Prayers/Maghrib.jpg";
// import Isha from "../../Assets/Images/Prayers/Isha.jpg";
import { GiPrayer } from "react-icons/gi";

const PrayerTimes = () => {
  const [times, setTimes] = useState({});
  useEffect(() => {
    axios
      .get(`https://api.aladhan.com/v1/timingsByCity/29-10-2024?city=cairo&country=egypt&method=8`)
      .then((res) => {
        // console.log(res.data.data);
        setTimes(res.data.data.timings);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar />
      <section className={prayerStyles.container}>
        <h1>مواقيت الصلاه</h1>
        <div className={prayerStyles.content}>
          <SinglePrayer flex={"row"} image={<GiPrayer size={280} color="#a07d4d" />} prayerName={"الفجر"} prayerTime={times.Fajr} />
          <SinglePrayer flex={"row-reverse"} image={<GiPrayer size={280} color="#a07d4d" />} prayerName={"الشروق"} prayerTime={times.Sunrise} />
          <SinglePrayer flex={"row"} image={<GiPrayer size={280} color="#a07d4d" />} prayerName={"الظهر"} prayerTime={times.Dhuhr} />
          <SinglePrayer flex={"row-reverse"} image={<GiPrayer size={280} color="#a07d4d" />} prayerName={"العصر"} prayerTime={times.Asr} />
          <SinglePrayer flex={"row"} image={<GiPrayer size={280} color="#a07d4d" />} prayerName={"المغرب"} prayerTime={times.Maghrib} />
          <SinglePrayer flex={"row-reverse"} image={<GiPrayer size={280} color="#a07d4d" />} prayerName={"العشاء"} prayerTime={times.Isha} />
        </div>
      </section>
    </>
  );
};

export default PrayerTimes;
