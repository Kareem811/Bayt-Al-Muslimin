import React from "react";
import backgroundStyles from "./background.module.css";
import bg from "../../../Assets/Images/Prayers/Dohr.webp";
import { Link } from "react-router-dom";
const Background = () => {
  return (
    <section className={backgroundStyles.backgroundSection}>
      <img src={bg} alt="" loading="lazy" />
      <div className={backgroundStyles.backgroundData}>
        .
        <div className={backgroundStyles.content}>
          <h2>أهلا بكم في بيت المسلمين</h2>
          <Link to={""}>إبدا التصفح</Link>
        </div>
      </div>
    </section>
  );
};

export default Background;
