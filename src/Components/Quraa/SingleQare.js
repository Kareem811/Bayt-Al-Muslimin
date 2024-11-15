// import React, { useEffect, useState } from "react";
// import Navbar from "../../Layouts/Navbar/Navbar";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import quraaStyles from "./quraa.module.css";
// import { IoMdArrowDropleftCircle } from "react-icons/io";
// import changeNumbersToArabic from "../Functions/ChangeNumbers";
// import Loading from "../Loading/Loading";
// import Footer from "../../Layouts/Footer/Footer";
// import { useDispatch } from "react-redux";
// import { audioSlice, setAudio } from "../../Utilities/Redux/audioSlice";

// const SingleQare = () => {
//   const [reciter, setReciter] = useState([]);
//   const [swrNames, setSwrNames] = useState([]);
//   const { qareeId } = useParams();
//   const [rewaya, setRewaya] = useState();
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     axios
//       .get(`https://mp3quran.net/api/v3/reciters?reciter=${qareeId}`)
//       .then((res) => {
//         setReciter(res.data.reciters[0]);
//         setLoading(false);
//         document.title = `الشيخ ${res.data.reciters[0].name}`; // Update here to use the response data directly
//       })
//       .catch((er) => {
//         console.log(er);
//         setLoading(false);
//       });
//     axios
//       .get("https://mp3quran.net/api/v3/suwar")
//       .then((res) => {
//         setSwrNames(res.data.suwar);
//         setLoading(false);
//       })
//       .catch((er) => {
//         console.log(er);
//         setLoading(false);
//       });
//   }, [qareeId]); // Only qareeId as the dependency

//   // useEffect(() => {
//   //   axios
//   //     .get(`https://mp3quran.net/api/v3/reciters?reciter=${qareeId}`)
//   //     .then((res) => {
//   //       setReciter(res.data.reciters[0]);
//   //       setLoading(false);
//   //       document.title = `الشيخ ${reciter.name}`;
//   //     })
//   //     .catch((er) => {
//   //       console.log(er);
//   //       setLoading(false);
//   //     });
//   //   axios
//   //     .get("https://mp3quran.net/api/v3/suwar")
//   //     .then((res) => {
//   //       setSwrNames(res.data.suwar);
//   //       setLoading(false);
//   //     })
//   //     .catch((er) => {
//   //       console.log(er);
//   //       setLoading(false);
//   //     });
//   // }, [reciter, qareeId]);
//   // const dispatch = useDispatch();
//   // const getUrl = async (url, surahNumber) => {
//   //   // console.log(url);
//   //   // console.log(surahNumber);
//   //   setLoading(true);
//   //   let text = ``;
//   //   if (surahNumber <= 9) {
//   //     text = `00${surahNumber}.mp3`;
//   //   } else if (surahNumber >= 10 && surahNumber <= 99) {
//   //     text = `0${surahNumber}.mp3`;
//   //   } else {
//   //     text = `${surahNumber}.mp3`;
//   //   }
//   //   await axios
//   //     .get(`${url}${text}`)
//   //     .then((res) => {
//   //       window.sessionStorage.removeItem("audio");
//   //       window.sessionStorage.setItem("audio", JSON.stringify(res.config.url));
//   //       console.log(res);
//   //       setLoading(false);
//   //     })
//   //     .catch((err) => {
//   //       setLoading(false);
//   //       console.log(err);
//   //     });
//   // };
//   // const getUrl = async (url, surahNumber) => {
//   //   let text = surahNumber.toString().padStart(3, "0") + ".mp3"; // Simplify zero-padding logic
//   //   try {
//   //     const response = await axios.get(`${url}${text}`);
//   //     window.sessionStorage.removeItem("audio");
//   //     window.sessionStorage.setItem("audio", JSON.stringify(response.config.url));
//   //     console.log(response);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };
//   // const getUrl = async (url, surahNumber) => {
//   //   let text = surahNumber.toString().padStart(3, "0") + ".mp3";

//   //   try {
//   //     const response = await axios.get(`${url}${text}`);
//   //     const audioUrl = response.config.url;

//   //     // Store the URL in session storage
//   //     window.sessionStorage.setItem("audio", JSON.stringify(audioUrl));

//   //     // Dispatch the action to set the audio URL in Redux
//   //     dispatch(setAudio(audioUrl));
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };
//   const dispatch = useDispatch();
//   const getUrl = async (url, surahNumber) => {
//     const text = surahNumber.toString().padStart(3, "0") + ".mp3";
//     try {
//       const response = await axios.get(`${url}${text}`);
//       const audioUrl = response.config.url;

//       // Store the URL and update Redux
//       window.sessionStorage.setItem("audio", JSON.stringify(audioUrl));
//       dispatch(setAudio(audioUrl));
//     } catch (error) {
//       console.error("Failed to fetch audio URL:", error);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <section style={{ gap: "10px" }} className={quraaStyles.container}>
//         {loading ? (
//           <Loading />
//         ) : (
//           <>
//             <div className={quraaStyles.reciterName}>
//               <h1>الشيخ {reciter.name}</h1>
//             </div>
//             <div className={quraaStyles.rewaya}>
//               <h3> رواية : </h3>
//               <select onChange={(e) => setRewaya(+e.target.value)}>
//                 {reciter.moshaf?.map((m, idx) => (
//                   <option
//                     key={m.id}
//                     value={idx}
//                     onClick={() => {
//                       setRewaya(idx);
//                       console.log(rewaya);
//                     }}>
//                     {" "}
//                     {m.name}{" "}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className={quraaStyles.singleQareSwr}>
//               {swrNames.map((el, idx) => (
//                 <div onClick={() => getUrl(reciter.moshaf[0].server, el.id)} key={idx} className={quraaStyles.surah}>
//                   <div className={quraaStyles.right}>
//                     <IoMdArrowDropleftCircle color="#a07d4d" size={25} />
//                     <span>{changeNumbersToArabic(el.id)}</span>
//                   </div>
//                   <span>{el.name}</span>
//                   <p>{el.makkia === 1 ? "مكيه" : "مدنيه"}</p>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default SingleQare;

// import React, { useEffect, useState } from "react";
// import Navbar from "../../Layouts/Navbar/Navbar";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import quraaStyles from "./quraa.module.css";
// import { IoMdArrowDropleftCircle } from "react-icons/io";
// import changeNumbersToArabic from "../Functions/ChangeNumbers";
// import Loading from "../Loading/Loading";
// import Footer from "../../Layouts/Footer/Footer";
// import { useDispatch } from "react-redux";
// import { setAudio } from "../../Utilities/Redux/audioSlice";
// import AudioPlayer from "../Audio/AudioPlayer";

// const SingleQare = () => {
//   const [reciter, setReciter] = useState([]);
//   const [swrNames, setSwrNames] = useState([]);
//   const { qareeId } = useParams();
//   const [rewaya, setRewaya] = useState();
//   const [loading, setLoading] = useState(true);
//   const [currentSurahIndex, setCurrentSurahIndex] = useState(0);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     axios
//       .get(`https://mp3quran.net/api/v3/reciters?reciter=${qareeId}`)
//       .then((res) => {
//         setReciter(res.data.reciters[0]);
//         setLoading(false);
//         document.title = `الشيخ ${res.data.reciters[0].name}`;
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });

//     axios
//       .get("https://mp3quran.net/api/v3/suwar")
//       .then((res) => {
//         setSwrNames(res.data.suwar);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }, [qareeId]);

//   const getUrl = async (url, surahNumber) => {
//     let text = surahNumber.toString().padStart(3, "0") + ".mp3";
//     try {
//       const response = await axios.get(`${url}${text}`);
//       const audioUrl = response.config.url;
//       window.sessionStorage.setItem("audio", JSON.stringify(audioUrl));
//       dispatch(setAudio(audioUrl));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const surahList = swrNames.map((el) => ({
//     audioUrl: `${reciter.moshaf[0].server}${el.id.toString().padStart(3, "0")}.mp3`,
//   }));

//   return (
//     <>
//       <Navbar />
//       <section style={{ gap: "10px" }} className={quraaStyles.container}>
//         {loading ? (
//           <Loading />
//         ) : (
//           <>
//             <div className={quraaStyles.reciterName}>
//               <h1>الشيخ {reciter.name}</h1>
//             </div>
//             <div className={quraaStyles.rewaya}>
//               <h3>رواية:</h3>
//               <select onChange={(e) => setRewaya(+e.target.value)}>
//                 {reciter.moshaf?.map((m, idx) => (
//                   <option key={m.id} value={idx}>
//                     {m.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className={quraaStyles.singleQareSwr}>
//               {swrNames.map((el, idx) => (
//                 <div
//                   onClick={() => {
//                     setCurrentSurahIndex(idx);
//                     getUrl(reciter.moshaf[0].server, el.id);
//                   }}
//                   key={idx}
//                   className={quraaStyles.surah}>
//                   <div className={quraaStyles.right}>
//                     <IoMdArrowDropleftCircle color="#a07d4d" size={25} />
//                     <span>{changeNumbersToArabic(el.id)}</span>
//                   </div>
//                   <span>{el.name}</span>
//                   <p>{el.makkia === 1 ? "مكية" : "مدنية"}</p>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
//       </section>
//       <AudioPlayer surahList={surahList} currentSurahIndex={currentSurahIndex} setCurrentSurahIndex={setCurrentSurahIndex} />
//       <Footer />
//     </>
//   );
// };

// export default SingleQare;

// import React, { useEffect, useState } from "react";
// import Navbar from "../../Layouts/Navbar/Navbar";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import quraaStyles from "./quraa.module.css";
// import { IoMdArrowDropleftCircle } from "react-icons/io";
// import changeNumbersToArabic from "../Functions/ChangeNumbers";
// import Loading from "../Loading/Loading";
// import Footer from "../../Layouts/Footer/Footer";
// import { useDispatch } from "react-redux";
// import { setAudio } from "../../Utilities/Redux/audioSlice";

// const SingleQare = ({ setSurahList }) => {
//   const [reciter, setReciter] = useState([]);
//   const [swrNames, setSwrNames] = useState([]);
//   const { qareeId } = useParams();
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     axios
//       .get(`https://mp3quran.net/api/v3/reciters?reciter=${qareeId}`)
//       .then((res) => {
//         setReciter(res.data.reciters[0]);
//         document.title = `الشيخ ${res.data.reciters[0].name}`;
//         setLoading(false);
//       })
//       .catch((er) => {
//         console.error(er);
//         setLoading(false);
//       });

//     axios
//       .get("https://mp3quran.net/api/v3/suwar")
//       .then((res) => {
//         setSwrNames(res.data.suwar);
//         setLoading(false);
//       })
//       .catch((er) => {
//         console.error(er);
//         setLoading(false);
//       });
//   }, [qareeId]);

//   useEffect(() => {
//     if (reciter.moshaf && swrNames.length > 0) {
//       const surahList = swrNames.map((el) => ({
//         audioUrl: `${reciter.moshaf[0].server}${el.id.toString().padStart(3, "0")}.mp3`,
//       }));
//       setSurahList(surahList);
//     }
//   }, [reciter, swrNames, setSurahList]);

//   const getUrl = (url, surahNumber) => {
//     const audioUrl = `${url}${surahNumber.toString().padStart(3, "0")}.mp3`;
//     dispatch(setAudio(audioUrl));
//   };

//   return (
//     <>
//       <Navbar />
//       <section style={{ gap: "10px" }} className={quraaStyles.container}>
//         {loading ? (
//           <Loading />
//         ) : (
//           <>
//             <div className={quraaStyles.reciterName}>
//               <h1>الشيخ {reciter.name}</h1>
//             </div>
//             <div className={quraaStyles.singleQareSwr}>
//               {swrNames.map((el, idx) => (
//                 <div onClick={() => getUrl(reciter.moshaf[0].server, el.id)} key={idx} className={quraaStyles.surah}>
//                   <div className={quraaStyles.right}>
//                     <IoMdArrowDropleftCircle color="#a07d4d" size={25} />
//                     <span>{changeNumbersToArabic(el.id)}</span>
//                   </div>
//                   <span>{el.name}</span>
//                   <p>{el.makkia === 1 ? "مكية" : "مدنية"}</p>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default SingleQare;

// import React, { useEffect, useState } from "react";
// import Navbar from "../../Layouts/Navbar/Navbar";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import quraaStyles from "./quraa.module.css";
// import { IoMdArrowDropleftCircle } from "react-icons/io";
// import changeNumbersToArabic from "../Functions/ChangeNumbers";
// import Loading from "../Loading/Loading";
// import Footer from "../../Layouts/Footer/Footer";
// import { useDispatch } from "react-redux";
// import { setAudio } from "../../Utilities/Redux/audioSlice";

// const SingleQare = ({ setSurahList }) => {
//   const [reciter, setReciter] = useState([]);
//   const [swrNames, setSwrNames] = useState([]);
//   const { qareeId } = useParams();
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     axios
//       .get(`https://mp3quran.net/api/v3/reciters?reciter=${qareeId}`)
//       .then((res) => {
//         setReciter(res.data.reciters[0]);
//         document.title = `الشيخ ${res.data.reciters[0].name}`;
//         setLoading(false);
//       })
//       .catch((er) => {
//         console.error(er);
//         setLoading(false);
//       });

//     axios
//       .get("https://mp3quran.net/api/v3/suwar")
//       .then((res) => {
//         setSwrNames(res.data.suwar);
//         setLoading(false);
//       })
//       .catch((er) => {
//         console.error(er);
//         setLoading(false);
//       });
//   }, [qareeId]);

//   useEffect(() => {
//     if (reciter.moshaf && swrNames.length > 0) {
//       const surahList = swrNames.map((el) => ({
//         audioUrl: `${reciter.moshaf[0].server}${el.id.toString().padStart(3, "0")}.mp3`,
//       }));
//       setSurahList(surahList);
//     }
//   }, [reciter, swrNames, setSurahList]);

//   const handleSurahClick = (surahId) => {
//     const audioUrl = `${reciter.moshaf[0].server}${surahId.toString().padStart(3, "0")}.mp3`;
//     dispatch(setAudio(audioUrl));
//   };

//   return (
//     <>
//       <Navbar />
//       <section style={{ gap: "10px" }} className={quraaStyles.container}>
//         {loading ? (
//           <Loading />
//         ) : (
//           <>
//             <div className={quraaStyles.reciterName}>
//               <h1>الشيخ {reciter.name}</h1>
//             </div>
//             <div className={quraaStyles.singleQareSwr}>
//               {swrNames.map((el, idx) => (
//                 <div onClick={() => handleSurahClick(el.id)} key={idx} className={quraaStyles.surah}>
//                   <div className={quraaStyles.right}>
//                     <IoMdArrowDropleftCircle color="#a07d4d" size={25} />
//                     <span>{changeNumbersToArabic(el.id)}</span>
//                   </div>
//                   <span>{el.name}</span>
//                   <p>{el.makkia === 1 ? "مكية" : "مدنية"}</p>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default SingleQare;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { IoMdArrowDropleftCircle } from "react-icons/io";
// import { useDispatch } from "react-redux";
// import { setAudio } from "../../Utilities/Redux/audioSlice";
// import quraaStyles from "./quraa.module.css";
// import { useParams } from "react-router-dom";
// import Navbar from "../../Layouts/Navbar/Navbar";
// import Loading from "../Loading/Loading";
// import Footer from "../../Layouts/Footer/Footer";

// const SingleQare = ({ setSurahList }) => {
//   const [reciter, setReciter] = useState([]);
//   const [swrNames, setSwrNames] = useState([]);
//   const { qareeId } = useParams();
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     axios
//       .get(`https://mp3quran.net/api/v3/reciters?reciter=${qareeId}`)
//       .then((res) => {
//         setReciter(res.data.reciters[0]);
//         document.title = `الشيخ ${res.data.reciters[0].name}`;
//         setLoading(false);
//       })
//       .catch((er) => {
//         console.error(er);
//         setLoading(false);
//       });

//     axios
//       .get("https://mp3quran.net/api/v3/suwar")
//       .then((res) => {
//         setSwrNames(res.data.suwar);
//         setLoading(false);
//       })
//       .catch((er) => {
//         console.error(er);
//         setLoading(false);
//       });
//   }, [qareeId]);

//   useEffect(() => {
//     if (reciter.moshaf && swrNames.length > 0) {
//       const surahList = swrNames.map((el) => ({
//         audioUrl: `${reciter.moshaf[0].server}${el.id.toString().padStart(3, "0")}.mp3`,
//       }));
//       setSurahList(surahList);
//     }
//   }, [reciter, swrNames, setSurahList]);

//   const handleSurahClick = (surahId) => {
//     // Dispatch the new audio URL to the Redux store
//     const audioUrl = `${reciter.moshaf[0].server}${surahId.toString().padStart(3, "0")}.mp3`;
//     dispatch(setAudio(audioUrl)); // This will trigger the audio to play
//   };

//   const changeNumbersToArabic = (number) => {
//     const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
//     return number
//       .toString()
//       .split("")
//       .map((num) => arabicNumbers[parseInt(num)])
//       .join("");
//   };

//   return (
//     <>
//       <Navbar />
//       <section style={{ gap: "10px" }} className={quraaStyles.container}>
//         {loading ? (
//           <Loading />
//         ) : (
//           <>
//             <div className={quraaStyles.reciterName}>
//               <h1>الشيخ {reciter.name}</h1>
//             </div>
//             <div className={quraaStyles.rewaya}>
//               <h3>رواية :</h3>
//               <select>
//                 {reciter.moshaf?.map((m, idx) => (
//                   <option key={m.id} value={idx}>
//                     {m.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className={quraaStyles.singleQareSwr}>
//               {swrNames.map((el, idx) => (
//                 <div onClick={() => handleSurahClick(el.id)} key={idx} className={quraaStyles.surah}>
//                   <div className={quraaStyles.right}>
//                     <IoMdArrowDropleftCircle color="#a07d4d" size={25} />
//                     <span>{changeNumbersToArabic(el.id)}</span>
//                   </div>
//                   <span>{el.name}</span>
//                   <p>{el.makkia === 1 ? "مكيه" : "مدنيه"}</p>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default SingleQare;
// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { IoMdArrowDropleftCircle } from "react-icons/io";
// import { useDispatch } from "react-redux";
// import { setAudio } from "../../Utilities/Redux/audioSlice";
// import quraaStyles from "./quraa.module.css";
// import { useParams } from "react-router-dom";
// import Navbar from "../../Layouts/Navbar/Navbar";
// import Loading from "../Loading/Loading";
// import Footer from "../../Layouts/Footer/Footer";


// const SingleQare = ({ setSurahList }) => {
//   const [reciter, setReciter] = useState([]);
//   const [swrNames, setSwrNames] = useState([]);
//   const { qareeId } = useParams();
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();
//   const audioRef = useRef(new Audio()); // Audio element reference

//   useEffect(() => {
//     axios
//       .get(`https://mp3quran.net/api/v3/reciters?reciter=${qareeId}`)
//       .then((res) => {
//         setReciter(res.data.reciters[0]);
//         document.title = `الشيخ ${res.data.reciters[0].name}`;
//         setLoading(false);
//       })
//       .catch((er) => {
//         console.error(er);
//         setLoading(false);
//       });

//     axios
//       .get("https://mp3quran.net/api/v3/suwar")
//       .then((res) => {
//         setSwrNames(res.data.suwar);
//         setLoading(false);
//       })
//       .catch((er) => {
//         console.error(er);
//         setLoading(false);
//       });
//   }, [qareeId]);

//   useEffect(() => {
//     if (reciter.moshaf && swrNames.length > 0) {
//       const surahList = swrNames.map((el) => ({
//         audioUrl: `${reciter.moshaf[0].server}${el.id.toString().padStart(3, "0")}.mp3`,
//       }));
//       setSurahList(surahList);
//     }
//   }, [reciter, swrNames, setSurahList]);

//   const handleSurahClick = (surahId) => {
//     // Stop any currently playing audio
//     audioRef.current.pause();
//     audioRef.current.currentTime = 0; // Reset to the beginning

//     // Play the new Surah
//     const audioUrl = `${reciter.moshaf[0].server}${surahId.toString().padStart(3, "0")}.mp3`;

//     // Dispatch the new audio URL to the Redux store
//     dispatch(setAudio(audioUrl));

//     // Play the audio
//     audioRef.current.src = audioUrl;
//     audioRef.current.play();
//   };

//   const changeNumbersToArabic = (number) => {
//     const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
//     return number
//       .toString()
//       .split("")
//       .map((num) => arabicNumbers[parseInt(num)])
//       .join("");
//   };

//   return (
//     <>
//       <Navbar />
//       <section style={{ gap: "10px" }} className={quraaStyles.container}>
//         {loading ? (
//           <Loading />
//         ) : (
//           <>
//             <div className={quraaStyles.reciterName}>
//               <h1>الشيخ {reciter.name}</h1>
//             </div>
//             <div className={quraaStyles.rewaya}>
//               <h3>رواية :</h3>
//               <select>
//                 {reciter.moshaf?.map((m, idx) => (
//                   <option key={m.id} value={idx}>
//                     {m.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className={quraaStyles.singleQareSwr}>
//               {swrNames.map((el, idx) => (
//                 <div onClick={() => handleSurahClick(el.id)} key={idx} className={quraaStyles.surah}>
//                   <div className={quraaStyles.right}>
//                     <IoMdArrowDropleftCircle color="#a07d4d" size={25} />
//                     <span>{changeNumbersToArabic(el.id)}</span>
//                   </div>
//                   <span>{el.name}</span>
//                   <p>{el.makkia === 1 ? "مكيه" : "مدنيه"}</p>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default SingleQare;






import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setAudio } from "../../Utilities/Redux/audioSlice";
import quraaStyles from "./quraa.module.css";
import { useParams } from "react-router-dom";
import Navbar from "../../Layouts/Navbar/Navbar";
import Loading from "../Loading/Loading";
import Footer from "../../Layouts/Footer/Footer";


const SingleQare = ({ setSurahList }) => {
  const [reciter, setReciter] = useState([]);
  const [swrNames, setSwrNames] = useState([]);
  const { qareeId } = useParams();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const audioRef = useRef(null); // Ref to hold the audio element

  useEffect(() => {
    axios
      .get(`https://mp3quran.net/api/v3/reciters?reciter=${qareeId}`)
      .then((res) => {
        setReciter(res.data.reciters[0]);
        document.title = `الشيخ ${res.data.reciters[0].name}`;
        setLoading(false);
      })
      .catch((er) => {
        console.error(er);
        setLoading(false);
      });

    axios
      .get("https://mp3quran.net/api/v3/suwar")
      .then((res) => {
        setSwrNames(res.data.suwar);
        setLoading(false);
      })
      .catch((er) => {
        console.error(er);
        setLoading(false);
      });
  }, [qareeId]);

  useEffect(() => {
    if (reciter.moshaf && swrNames.length > 0) {
      const surahList = swrNames.map((el) => ({
        audioUrl: `${reciter.moshaf[0].server}${el.id.toString().padStart(3, "0")}.mp3`,
      }));
      setSurahList(surahList);
    }
  }, [reciter, swrNames, setSurahList]);

  const handleSurahClick = (surahId) => {
    if (audioRef.current) {
      // Stop and reset the current audio before playing a new one
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset the playback position to 0
    }

    // Play the new Surah
    const audioUrl = `${reciter.moshaf[0].server}${surahId.toString().padStart(3, "0")}.mp3`;

    // Dispatch the new audio URL to the Redux store
    dispatch(setAudio(audioUrl));

    // Set the audio element source and play
    if (audioRef.current) {
      audioRef.current.src = audioUrl;
      audioRef.current.play();
    }
  };

  const changeNumbersToArabic = (number) => {
    const arabicNumbers = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return number
      .toString()
      .split("")
      .map((num) => arabicNumbers[parseInt(num)])
      .join("");
  };

  return (
    <>
      <Navbar />
      <section style={{ gap: "10px" }} className={quraaStyles.container}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className={quraaStyles.reciterName}>
              <h1>الشيخ {reciter.name}</h1>
            </div>
            <div className={quraaStyles.rewaya}>
              <h3>رواية :</h3>
              <select>
                {reciter.moshaf?.map((m, idx) => (
                  <option key={m.id} value={idx}>
                    {m.name}
                  </option>
                ))}
              </select>
            </div>
            <div className={quraaStyles.singleQareSwr}>
              {swrNames.map((el, idx) => (
                <div onClick={() => handleSurahClick(el.id)} key={idx} className={quraaStyles.surah}>
                  <div className={quraaStyles.right}>
                    <IoMdArrowDropleftCircle color="#a07d4d" size={25} />
                    <span>{changeNumbersToArabic(el.id)}</span>
                  </div>
                  <span>{el.name}</span>
                  <p>{el.makkia === 1 ? "مكيه" : "مدنيه"}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
      <Footer />
      {/* Hidden Audio Player */}
      <audio ref={audioRef} />
    </>
  );
};

export default SingleQare;
