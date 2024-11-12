import React, { useEffect, useState } from "react";
import Navbar from "../../Layouts/Navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import hadithStyles from "./hadith.module.css";
import Loading from "../Loading/Loading";
import Footer from "../../Layouts/Footer/Footer";
const HadithCategory = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://hadis-api-id.vercel.app/hadith/${category}?page=1&limit=300`)
      .then((res) => {
        setItems(res.data.items);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [category]);
  return (
    <>
      <Navbar />
      <section className={hadithStyles.container}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <h1>{window.sessionStorage.getItem("name") !== null && `أحاديث ${JSON.parse(window.sessionStorage.getItem("name"))}`}</h1>
            <div className={hadithStyles.hadiths}>
              {items.map((el, idx) => (
                <div key={idx} className={hadithStyles.hadith}>
                  {el.arab}
                </div>
              ))}
            </div>
          </>
        )}
      </section>
      <Footer/>
    </>
  );
};

export default HadithCategory;
