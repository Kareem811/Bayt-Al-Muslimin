import React from "react";
import homeContainerStyles from "./home.module.css";
import { Link } from "react-router-dom";
const HomeCards = ({ cicon, cname, to }) => {
  return (
    <Link to={to} className={homeContainerStyles.card}>
      {cicon}
      {cname}
    </Link>
  );
};

export default HomeCards;
