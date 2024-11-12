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
function App() {
  return (
    <div className="App">
      {/* <AudioWrapper> */}
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/mushaf" element={<MushafComponent />} />
        <Route path="/surah/:surahId" element={<SingleSurah />} />
        <Route path="/times" element={<PrayerTimes />} />
        <Route path="/quraa" element={<QuraaComponent />} />
        <Route path="/quraa/:qareeId" element={<SingleQare />} />
        <Route path="/hadith" element={<HadithComponent />} />
        <Route path="/hadith/:category" element={<HadithCategory />} />
      </Routes>
      {/* <AudioPlayer />
      </AudioWrapper> */}
    </div>
  );
}

export default App;
