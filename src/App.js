import "./App.css";
import HomeComponent from "./Routes/HomeComponent";
import { Routes, Route } from "react-router-dom";
import MushafComponent from "./Routes/MushafComponent";
import SingleSurah from "./Components/Mushaf/SingleSurah";
import PrayerTimes from "./Components/Salah/PrayerTimes";
import QuraaComponent from "./Routes/QuraaComponent";
import HadithComponent from "./Routes/HadithComponent";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/mushaf" element={<MushafComponent />} />
        <Route path="/surah/:surahId" element={<SingleSurah />} />
        <Route path="/times" element={<PrayerTimes />} />
        <Route path="/quraa" element={<QuraaComponent />} />
        <Route path="/hadith" element={<HadithComponent />} />
      </Routes>
    </div>
  );
}

export default App;
