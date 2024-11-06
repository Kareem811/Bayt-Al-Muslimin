import React from "react";
import prayerStyles from "./prayer.module.css";
const SinglePrayer = ({ prayerName, prayerTime, image, flex }) => {
  return (
    <div className={prayerStyles.prayer} style={{ flexDirection: flex }}>
      {/* <img src={image} alt="" /> */}
      {image}
      <div className={prayerStyles.timing}>
        <h2>{prayerName}</h2>
        <h3>{prayerTime}</h3>
      </div>
    </div>
  );
};

export default SinglePrayer;
