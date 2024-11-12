// import React, { useEffect, useState } from "react";
// import randomAyahStyles from "./random.module.css";
// import axios from "axios";
// const RandomAyah = () => {
//   const [randomSurah] = useState(Math.floor(Math.random() * 114));
//   //   const [randomA, setRandomA] = useState(0);
//   const [surah, setSurah] = useState(0);
//   useEffect(() => {
//     axios
//       .get(`https://api.alquran.cloud/v1/surah/${randomSurah}`)
//       .then((res) => {
//         // console.log(res.data.data);
//         setSurah(res.data.data.number);
//         // setRandomA(Math.floor(Math.random() * res.data.data.numberOfAyahs));
//         // console.log(randomA);
//       })
//       .then((res) => {
//         axios
//           .get(`https://api.alquran.cloud/v1/surah/${surah}`)
//           .then((res) => console.log(res))
//           .catch((err) => console.log(err));
//       })
//       .catch((err) => console.log(err));
//   }, []);
//   return (
//     <section className={randomAyahStyles.container}>
//       <h1>ذكر فإن الذكرى تنفع المؤمنين</h1>
//       <span>ok</span>
//     </section>
//   );
// };

// export default RandomAyah;
import React, { useEffect, useState } from "react";
import randomAyahStyles from "./random.module.css";
import axios from "axios";
import changeNumbersToArabic from "../../Functions/ChangeNumbers";

const RandomAyah = () => {
  const [ayah, setAyah] = useState(null); // Stores the random Ayah data

  useEffect(() => {
    // Generate a random Surah number between 1 and 114
    const randomSurahNumber = Math.floor(Math.random() * 114) + 1;

    // Fetch the Surah details
    axios
      .get(`https://api.alquran.cloud/v1/surah/${randomSurahNumber}`)
      .then((res) => {
        console.log(res.data.data);
        const surah = res.data.data;
        // Generate a random Ayah number within the range of the number of Ayahs in the Surah
        const randomAyahNumber = Math.floor(Math.random() * surah.numberOfAyahs) + 1;

        // Fetch the specific Ayah from the selected Surah
        return axios.get(`https://api.alquran.cloud/v1/ayah/${randomSurahNumber}:${randomAyahNumber}`);
      })
      .then((res) => {
        // Store the Ayah data
        console.log(res.data.data);
        setAyah(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching Ayah:", err);
      });
  }, []);

  return (
    <section className={randomAyahStyles.container}>
      {ayah ? (
        <div className={randomAyahStyles.content}>
          <h1> آيــه لــك</h1>
          <span>{ayah.text}</span>
          <h3>
            {ayah.surah.name} الآيه رقم {changeNumbersToArabic(ayah.numberInSurah)}
          </h3>
        </div>
      ) : undefined}
    </section>
  );
};

export default RandomAyah;
