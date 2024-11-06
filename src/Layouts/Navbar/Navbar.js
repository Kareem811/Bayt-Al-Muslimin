import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./nav.css";
import { IoHome } from "react-icons/io5";
import { IoBook } from "react-icons/io5";
import { IoPeopleSharp } from "react-icons/io5";
import { MdSpeakerNotes } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [menuSize, setMenuSize] = useState(false);
  const [bigMenu, setBigMenu] = useState(false);
  const [close, setClose] = useState(false);
  const checkMenu = (x) => {
    setMenu(x >= 1000);
    setMenuSize(x <= 650);
  };
  useEffect(() => {
    checkMenu(window.innerWidth);
    const handleResize = () => checkMenu(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const changeMenu = () => {
    setBigMenu(!bigMenu);
    setClose(!close);
  };
  const { surahId } = useParams();
  return (
    <header>
      <nav>
        <span>بيت المسلمين</span>
        <ul className={bigMenu ? "bigMenu" : undefined} style={menuSize ? { display: "none" } : { display: "flex" }}>
          <li>
            <NavLink className={window.location.pathname === "/" ? "active" : undefined} to={"/home"}>
              <IoHome />
              {menu ? "الصفحه الرئيسيه" : bigMenu ? "الصفحه الرئيسيه" : undefined}
            </NavLink>
          </li>
          <li>
            <NavLink className={window.location.pathname === "/mushaf" || window.location.pathname === `/surah/${surahId}` ? "active" : undefined} to={"/mushaf"}>
              <IoBook />
              {menu ? "المصحف" : bigMenu ? "المصحف" : undefined}
            </NavLink>
          </li>
          <li>
            <NavLink to={"/quraa"}>
              <IoPeopleSharp />
              {menu ? "القراء" : bigMenu ? "القراء" : undefined}
            </NavLink>
          </li>
          <li>
            <NavLink to={"/hadith"}>
              <MdSpeakerNotes />
              {menu ? "الاحاديث" : bigMenu ? "الاحاديث" : undefined}
            </NavLink>
          </li>
          <li>
            <NavLink to={"/times"}>
              <IoTimeSharp />
              {menu ? "مواقيت الصلاه" : bigMenu ? "مواقيت الصلاه" : undefined}
            </NavLink>
          </li>
        </ul>
        {menuSize ? (
          close ? (
            <IoMdCloseCircle onClick={() => changeMenu()} cursor={"pointer"} color="#f8cd91" size={30} />
          ) : (
            <IoMenu onClick={() => changeMenu()} cursor={"pointer"} color="#f8cd91" size={30} />
          )
        ) : bigMenu ? (
          <IoMdCloseCircle onClick={() => changeMenu()} cursor={"pointer"} color="#f8cd91" size={30} />
        ) : undefined}
      </nav>
    </header>
  );
};

export default Navbar;
