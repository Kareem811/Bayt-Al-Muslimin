import React, { useEffect, useState } from "react";
import hadithStyles from "./hadith.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
const Hadith = () => {
  const [category] = useState([
    {
      name: "ابو داوود",
      slug: "abu-dawud",
    },
    {
      name: "أحمد",
      slug: "ahmad",
    },
    {
      name: "البخاري",
      slug: "bukhari",
    },
    {
      name: "الدارمي",
      slug: "darimi",
    },
    {
      name: "ابن ماجه",
      slug: "ibnu-majah",
    },
    {
      name: "مالك",
      slug: "malik",
    },
    {
      name: "مسلم",
      slug: "muslim",
    },
    {
      name: "سنن النسائي",
      slug: "nasai",
    },
    {
      name: "الترمذي",
      slug: "tirmidzi",
    },
  ]);
  return (
    <section className={hadithStyles.container}>
      <h1>الأحاديــــث</h1>
      <div className={hadithStyles.content}>
        {category.map((el, idx) => (
          <Link onClick={() => window.sessionStorage.setItem("name", JSON.stringify(el.name))} key={idx} to={`${el.slug}`} className={hadithStyles.card}>
            {el.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Hadith;
