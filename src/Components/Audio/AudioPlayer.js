// import React, { useEffect, useRef } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { stopAudio } from "../../Utilities/Redux/audioSlice";

// const AudioPlayer = () => {
//   const audioRef = useRef(null);
//   const audioSrc = useSelector((state) => state.audio.audioSrc);
//   const isActive = useSelector((state) => state.audio.isActive);
//   const dispatch = useDispatch();

// useEffect(() => {
//   if (isActive && audioSrc && audioRef.current) {
//     audioRef.current.play().catch((error) => {
//       console.error("Error playing audio:", error);
//     });
//   }
// }, [isActive, audioSrc]);

//   const handleStop = () => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//       dispatch(stopAudio());
//     }
//   };

//   return (
//     <div>
//       {audioSrc && (
//         <audio ref={audioRef} controls>
//           <source src={audioSrc}  />
//           Your browser does not support the audio element.
//         </audio>
//       )}
//       {isActive && <button onClick={handleStop}>Stop Audio</button>}
//     </div>
//   );
// };

// export default AudioPlayer;

// import React, { useEffect, useRef } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { stopAudio, setAudio } from "../../Utilities/Redux/audioSlice";

// const AudioPlayer = ({ surahList, currentSurahIndex, setCurrentSurahIndex }) => {
//   const audioRef = useRef(null);
//   const audioSrc = useSelector((state) => state.audio.audioSrc);
//   const isActive = useSelector((state) => state.audio.isActive);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (isActive && audioSrc && audioRef.current) {
//       audioRef.current.src = audioSrc; // Update the src attribute
//       audioRef.current.play();
//     }
//   }, [isActive, audioSrc]);

//   const handleStop = () => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//       dispatch(stopAudio());
//     }
//   };

//   const handleNext = () => {
//     if (currentSurahIndex < surahList.length - 1) {
//       const nextIndex = currentSurahIndex + 1;
//       setCurrentSurahIndex(nextIndex);
//       const nextSurahUrl = surahList[nextIndex].audioUrl;
//       dispatch(setAudio(nextSurahUrl));
//     }
//   };

//   const handlePrevious = () => {
//     if (currentSurahIndex > 0) {
//       const prevIndex = currentSurahIndex - 1;
//       setCurrentSurahIndex(prevIndex);
//       const prevSurahUrl = surahList[prevIndex].audioUrl;
//       dispatch(setAudio(prevSurahUrl));
//     }
//   };

//   return (
//     <div>
//       {audioSrc && (
//         <audio ref={audioRef} controls>
//           <source src={audioSrc} />
//           Your browser does not support the audio element.
//         </audio>
//       )}
//       {isActive && (
//         <div>
//           <button onClick={handlePrevious}>Previous</button>
//           <button onClick={handleStop}>Stop Audio</button>
//           <button onClick={handleNext}>Next</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AudioPlayer;

// import React, { useEffect, useRef } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { stopAudio, setAudio } from "../../Utilities/Redux/audioSlice";

// const AudioPlayer = ({ surahList, currentSurahIndex, setCurrentSurahIndex }) => {
//   const audioRef = useRef(null);
//   const audioSrc = useSelector((state) => state.audio.audioSrc);
//   const isActive = useSelector((state) => state.audio.isActive);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (isActive && audioSrc && audioRef.current) {
//       audioRef.current.src = audioSrc;
//       audioRef.current.play();
//     }
//   }, [isActive, audioSrc]);

//   const handleStop = () => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//       dispatch(stopAudio());
//     }
//   };

//   const handleNext = () => {
//     if (currentSurahIndex < surahList.length - 1) {
//       const nextIndex = currentSurahIndex + 1;
//       setCurrentSurahIndex(nextIndex);
//       const nextSurahUrl = surahList[nextIndex].audioUrl;
//       dispatch(setAudio(nextSurahUrl));
//     }
//   };

//   const handlePrevious = () => {
//     if (currentSurahIndex > 0) {
//       const prevIndex = currentSurahIndex - 1;
//       setCurrentSurahIndex(prevIndex);
//       const prevSurahUrl = surahList[prevIndex].audioUrl;
//       dispatch(setAudio(prevSurahUrl));
//     }
//   };

//   return (
//     <div>
//       {audioSrc && (
//         <audio ref={audioRef} controls>
//           <source src={audioSrc} />
//           Your browser does not support the audio element.
//         </audio>
//       )}
//       {isActive && (
//         <div>
//           <button onClick={handlePrevious}>Previous</button>
//           <button onClick={handleStop}>Stop Audio</button>
//           <button onClick={handleNext}>Next</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AudioPlayer;

// import React, { useEffect, useRef } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { stopAudio, setAudio } from "../../Utilities/Redux/audioSlice";

// const AudioPlayer = ({ surahList, currentSurahIndex, setCurrentSurahIndex }) => {
//   const audioRef = useRef(null);
//   const audioSrc = useSelector((state) => state.audio.audioSrc);
//   const isActive = useSelector((state) => state.audio.isActive);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (isActive && audioSrc && audioRef.current) {
//       audioRef.current.play();
//     }
//   }, [isActive, audioSrc]);

//   const handleStop = () => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//       dispatch(stopAudio());
//     }
//   };

//   const handleNext = () => {
//     if (currentSurahIndex < surahList.length - 1) {
//       const nextIndex = currentSurahIndex + 1;
//       setCurrentSurahIndex(nextIndex);
//       dispatch(setAudio(surahList[nextIndex].audioUrl));
//     }
//   };

//   const handlePrevious = () => {
//     if (currentSurahIndex > 0) {
//       const prevIndex = currentSurahIndex - 1;
//       setCurrentSurahIndex(prevIndex);
//       dispatch(setAudio(surahList[prevIndex].audioUrl));
//     }
//   };

//   return (
//     <div>
//       {audioSrc && (
//         <audio ref={audioRef} controls>
//           <source src={audioSrc} />
//           Your browser does not support the audio element.
//         </audio>
//       )}
//       {isActive && (
//         <div>
//           <button onClick={handleStop}>Stop Audio</button>
//           <button onClick={handlePrevious} disabled={currentSurahIndex === 0}>
//             Previous
//           </button>
//           <button onClick={handleNext} disabled={currentSurahIndex === surahList.length - 1}>
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AudioPlayer;

// import React, { useEffect, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setAudio, stopAudio } from "../../Utilities/Redux/audioSlice";

// const AudioPlayer = ({ surahList, currentSurahIndex, setCurrentSurahIndex }) => {
//   const audioRef = useRef(null);
//   const audioSrc = useSelector((state) => state.audio.audioSrc); // Get the audio source from Redux
//   const isActive = useSelector((state) => state.audio.isActive); // Check if audio is playing
//   const dispatch = useDispatch();

//   // Play the audio when the audio source changes
//   useEffect(() => {
//     if (audioSrc && audioRef.current) {
//       audioRef.current.play();
//     }
//   }, [audioSrc]);

//   const handleStop = () => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//       dispatch(stopAudio()); // Stop audio when clicked
//     }
//   };

//   const handleNext = () => {
//     if (currentSurahIndex < surahList.length - 1) {
//       const nextIndex = currentSurahIndex + 1;
//       setCurrentSurahIndex(nextIndex);
//       dispatch(setAudio(surahList[nextIndex].audioUrl)); // Update audio source in Redux
//     }
//   };

//   const handlePrevious = () => {
//     if (currentSurahIndex > 0) {
//       const prevIndex = currentSurahIndex - 1;
//       setCurrentSurahIndex(prevIndex);
//       dispatch(setAudio(surahList[prevIndex].audioUrl)); // Update audio source in Redux
//     }
//   };

//   return (
//     <div>
//       {audioSrc && (
//         <audio ref={audioRef} controls>
//           <source src={audioSrc} />
//           Your browser does not support the audio element.
//         </audio>
//       )}
//       {isActive && (
//         <div>
//           <button onClick={handleStop}>Stop Audio</button>
//           <button onClick={handlePrevious} disabled={currentSurahIndex === 0}>
//             Previous
//           </button>
//           <button onClick={handleNext} disabled={currentSurahIndex === surahList.length - 1}>
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AudioPlayer;

import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAudio, stopAudio } from "../../Utilities/Redux/audioSlice";

const AudioPlayer = ({ surahList, currentSurahIndex, setCurrentSurahIndex }) => {
  const audioRef = useRef(null);
  const audioSrc = useSelector((state) => state.audio.audioSrc); // Get the audio source from Redux
  const isActive = useSelector((state) => state.audio.isActive); // Check if audio is playing
  const dispatch = useDispatch();

  // Stop the audio immediately when the audio source changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause(); // Stop the audio
      audioRef.current.currentTime = 0; // Reset the time to the beginning
      dispatch(stopAudio()); // Stop the audio state in Redux
    }
  }, [audioSrc, dispatch]);

  // Play the audio when the audio source changes
  useEffect(() => {
    if (audioSrc && audioRef.current) {
      audioRef.current.play(); // Start the audio playback
      dispatch(setAudio(audioSrc)); // Mark audio as active in Redux
    }
  }, [audioSrc, dispatch]);

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      dispatch(stopAudio()); // Stop audio when clicked
    }
  };

  const handleNext = () => {
    if (currentSurahIndex < surahList.length - 1) {
      const nextIndex = currentSurahIndex + 1;
      setCurrentSurahIndex(nextIndex);
      dispatch(setAudio(surahList[nextIndex].audioUrl)); // Update audio source in Redux
    }
  };

  const handlePrevious = () => {
    if (currentSurahIndex > 0) {
      const prevIndex = currentSurahIndex - 1;
      setCurrentSurahIndex(prevIndex);
      dispatch(setAudio(surahList[prevIndex].audioUrl)); // Update audio source in Redux
    }
  };

  return (
    <div>
      {audioSrc && (
        <audio ref={audioRef} controls>
          <source src={audioSrc} />
          Your browser does not support the audio element.
        </audio>
      )}
      {isActive && (
        <div>
          <button onClick={handleStop}>Stop Audio</button>
          <button onClick={handlePrevious} disabled={currentSurahIndex === 0}>
            Previous
          </button>
          <button onClick={handleNext} disabled={currentSurahIndex === surahList.length - 1}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AudioPlayer;
