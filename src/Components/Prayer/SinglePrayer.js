import React from "react";
import prayerStyles from "./prayer.module.css";
const SinglePrayer = (props) => {
  const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  const formattedTime = props.pTime
    ?.split("")
    .map((char) => {
      if (/[0-9]/.test(char)) {
        return arabicNumbers[char];
      }
      return char;
    })
    .join("");

  return (
    <div className={prayerStyles.prayer}>
      <h3>{props.pName} :</h3>
      <h3 className={prayerStyles.time}>{formattedTime}</h3>
    </div>
  );
};

export default SinglePrayer;
