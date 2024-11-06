import React, { useState } from "react";
import homeContainerStyles from "./home.module.css";
import HomeCards from "./HomeCards";
import { IoBook, IoPeopleSharp, IoTimeSharp } from "react-icons/io5";
import { MdSpeakerNotes } from "react-icons/md";
const HomeContainer = () => {
  const [contents, setContents] = useState([
    {
      cname: `المصحف`,
      cicon: <IoBook />,
      to: "/mushaf",
    },
    {
      cname: `القراء`,
      cicon: <IoPeopleSharp />,
      to: "/quraa",
    },
    {
      cname: `مواقيت الصلاه`,
      cicon: <IoTimeSharp />,
      to: "/times",
    },
    {
      cname: `الاحاديث`,
      cicon: <MdSpeakerNotes />,
      to: "/hadith",
    },
  ]);

  return (
    <div className={homeContainerStyles.container}>
      <h1>الصفحه الرئيسية</h1>

      <div className={homeContainerStyles.content}>
        {contents.map((el, idx) => (
          <HomeCards key={idx} cname={el.cname} cicon={el.cicon} to={el.to} />
        ))}
      </div>
    </div>
  );
};

export default HomeContainer;
