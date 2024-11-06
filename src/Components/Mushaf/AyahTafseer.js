// // import axios from "axios";
// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // // import { TafserContext } from "./SingleSurah";

// // const AyahTafseer = () => {
// //   const [tafser , setTafser] = useState({})
// //   const [all , setAll] = useState([])
// //   const { surahId, ayaId } = useParams();
// //   useEffect(() => {
// //     axios
// //       .get(`https://quranenc.com/api/v1/translation/sura/arabic_moyassar/3`)
// //       .then((res) => {
// //         setAll(res.data.result)
// //         setTafser(all.find(el => el.aya == ayaId))
// //         console.log(tafser);
// //       })
// //       .catch((err) => console.log(err));
// //   } , []);

// //   return <div>AyahTafseer</div>;
// // };

// // export default AyahTafseer;
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const AyahTafseer = () => {
//   const [tafser, setTafser] = useState(null);
//   const { surahId, ayaId } = useParams();

//   useEffect(() => {
//     axios
//       .get(`https://quranenc.com/api/v1/translation/sura/arabic_moyassar/${surahId}`)
//       .then((res) => {
//         const allAyat = res.data.result;
//         const selectedAyah = allAyat.find((el) => el.aya === ayaId);
//         setTafser(selectedAyah);
//         console.log(tafser)
//       })
//       .catch((err) => console.log(err));
//   }, [surahId, ayaId]);

//   return (
//     <div>
//       {tafser ? (
//         <div>
//           <h3>Ayah Tafseer</h3>
//           <p>{tafser.text}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default AyahTafseer;

import React from "react";
import mushafStyles from "./mushaf.module.css";
import { IoMdCloseCircle } from "react-icons/io";
import changeNumbersToArabic from "../Functions/ChangeNumbers";
const AyahTafseer = ({ data, close }) => {
  console.log(data);
  return (
    <div onClick={() => close()} className={mushafStyles.tafserContainer}>
      <div className={mushafStyles.content}>
        <IoMdCloseCircle onClick={() => close()} size={30} color="#a07d4d" />
        <h2>الآيه رقم {changeNumbersToArabic(data.aya)}</h2>
        <p>{data.arabic_text}</p>
        <span>{data.translation}</span>
      </div>
    </div>
  );
};

export default AyahTafseer;
