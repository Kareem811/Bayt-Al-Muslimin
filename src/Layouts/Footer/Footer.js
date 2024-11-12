import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
// import { FaLinkedin } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import changeNumbersToArabic from "../../Components/Functions/ChangeNumbers";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="links">
          <h2>نبذة صغيرة</h2>
          <ul>
            <li>
              <Link to={"https://www.mp3quran.net/ar"}>التلاوات و المصحف عن طريق : MP3 Quraan</Link>
            </li>
            <li>
              <Link to={"https://aladhan.com/"}>مواقيت الصلاة عن طريق : الاذان</Link>
            </li>
            {/* <li>
              <Link to={""}>الصور المرئية عن طريق : freepik</Link>
            </li> */}
            <li>
              <Link to={"https://quranenc.com/api/v1/translation/sura/arabic_moyassar/114"}>تفسير الايات عن طريق : Quran Tafseer</Link>
            </li>
          </ul>
        </div>
        <div className="social-links">
          <h2>تواصل معي</h2>
          <div className="icons">
            <Link to={"https://github.com/Kareem811"}>
              <FaGithub color="#fff" size={30} />
            </Link>
            <Link to={"kareem2000090@gmail.com"}>
              <IoMdMail color="#fff" size={30} />
            </Link>
            <Link to={"https://www.linkedin.com/in/kareem-el-tayeb-b4979a30a/"}>
              <IoLogoLinkedin color="#fff" size={30} />
            </Link>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <p>
        جميع الحقوق محفوظه &copy;{changeNumbersToArabic(2024)} بواسطه : <Link className="name" to={"https://www.linkedin.com/in/kareem-el-tayeb-b4979a30a/"}>كريم أحمد</Link>
      </p>
    </footer>
  );
};

export default Footer;
