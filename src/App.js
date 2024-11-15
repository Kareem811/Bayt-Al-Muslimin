// import "./App.css";
// import HomeComponent from "./Routes/HomeComponent";
// import { Routes, Route } from "react-router-dom";
// import MushafComponent from "./Routes/MushafComponent";
// import SingleSurah from "./Components/Mushaf/SingleSurah";
// import PrayerTimes from "./Components/Prayer/PrayerTimes.js";
// import QuraaComponent from "./Routes/QuraaComponent";
// import HadithComponent from "./Routes/HadithComponent";
// import SingleQare from "./Components/Quraa/SingleQare";
// import HadithCategory from "./Components/Hadith/HadithCategory.js";
// import AudioPlayer from "./Components/Audio/AudioPlayer.js";
// import { useSelector } from "react-redux";
// function App() {
//   const audioActive = useSelector((state) => state.audio);
//   console.log(audioActive);
//   const [currentSurahIndex, setCurrentSurahIndex] = useState(0);
//   const surahList = swrNames.map((el) => ({
//     audioUrl: `${reciter.moshaf[0].server}${el.id.toString().padStart(3, "0")}.mp3`,
//   }));
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<HomeComponent />} />
//         <Route path="/home" element={<HomeComponent />} />
//         <Route path="/mushaf" element={<MushafComponent />} />
//         <Route path="/surah/:surahId" element={<SingleSurah />} />
//         <Route path="/times" element={<PrayerTimes />} />
//         <Route path="/quraa" element={<QuraaComponent />} />
//         <Route path="/quraa/:qareeId" element={<SingleQare />} />
//         <Route path="/hadith" element={<HadithComponent />} />
//         <Route path="/hadith/:category" element={<HadithCategory />} />
//       </Routes>
//       {audioActive.isActive ? <AudioPlayer surahList={surahList} currentSurahIndex={currentSurahIndex} setCurrentSurahIndex={setCurrentSurahIndex} /> : undefined}
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import "./App.css";
// import HomeComponent from "./Routes/HomeComponent";
// import { Routes, Route } from "react-router-dom";
// import MushafComponent from "./Routes/MushafComponent";
// import SingleSurah from "./Components/Mushaf/SingleSurah";
// import PrayerTimes from "./Components/Prayer/PrayerTimes.js";
// import QuraaComponent from "./Routes/QuraaComponent";
// import HadithComponent from "./Routes/HadithComponent";
// import SingleQare from "./Components/Quraa/SingleQare";
// import HadithCategory from "./Components/Hadith/HadithCategory.js";
// import AudioPlayer from "./Components/Audio/AudioPlayer.js";
// import { useSelector } from "react-redux";

// function App() {
//   const audioActive = useSelector((state) => state.audio);
//   const [currentSurahIndex, setCurrentSurahIndex] = useState(0);

//   // Ensure `surahList` is passed correctly.
//   // This example assumes `surahList` is managed globally or obtained correctly within your context.
//   const surahList = []; // Make sure to update this based on how `swrNames` and `reciter` are available

//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<HomeComponent />} />
//         <Route path="/home" element={<HomeComponent />} />
//         <Route path="/mushaf" element={<MushafComponent />} />
//         <Route path="/surah/:surahId" element={<SingleSurah />} />
//         <Route path="/times" element={<PrayerTimes />} />
//         <Route path="/quraa" element={<QuraaComponent />} />
//         <Route path="/quraa/:qareeId" element={<SingleQare />} />
//         <Route path="/hadith" element={<HadithComponent />} />
//         <Route path="/hadith/:category" element={<HadithCategory />} />
//       </Routes>
//       {audioActive.isActive && surahList.length > 0 && <AudioPlayer surahList={surahList} currentSurahIndex={currentSurahIndex} setCurrentSurahIndex={setCurrentSurahIndex} />}
//     </div>
//   );
// }

// export default App;


import "./App.css";
import HomeComponent from "./Routes/HomeComponent";
import { Routes, Route } from "react-router-dom";
import MushafComponent from "./Routes/MushafComponent";
import SingleSurah from "./Components/Mushaf/SingleSurah";
import PrayerTimes from "./Components/Prayer/PrayerTimes.js";
import QuraaComponent from "./Routes/QuraaComponent";
import HadithComponent from "./Routes/HadithComponent";
import SingleQare from "./Components/Quraa/SingleQare";
import HadithCategory from "./Components/Hadith/HadithCategory.js";
import AudioPlayer from "./Components/Audio/AudioPlayer.js";
import { useSelector } from "react-redux";
import { useState } from "react";

function App() {
  const audioActive = useSelector((state) => state.audio);
  const [currentSurahIndex, setCurrentSurahIndex] = useState(0);
  const [surahList, setSurahList] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/mushaf" element={<MushafComponent />} />
        <Route path="/surah/:surahId" element={<SingleSurah />} />
        <Route path="/times" element={<PrayerTimes />} />
        <Route path="/quraa" element={<QuraaComponent />} />
        <Route path="/quraa/:qareeId" element={<SingleQare setSurahList={setSurahList} />} />
        <Route path="/hadith" element={<HadithComponent />} />
        <Route path="/hadith/:category" element={<HadithCategory />} />
      </Routes>
      {audioActive.isActive && <AudioPlayer surahList={surahList} currentSurahIndex={currentSurahIndex} setCurrentSurahIndex={setCurrentSurahIndex} />}
    </div>
  );
}

export default App;
