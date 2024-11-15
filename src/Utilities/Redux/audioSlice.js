// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// const audioState = {
//   isActive: false,
//   audioSrc: window.sessionStorage.getItem("audio") !== null ? JSON.parse(window.sessionStorage.getItem("audio")) : null,
//   audioName: "",
//   rewayaName: "",
//   reciterName: "",
// };
// export const audioSlice = createSlice({
//   name: "audio",
//   initialState: audioState,
//   reducers: {
//     showAudio: (state, action) => {
//       // const { moshaf, number } = action.payload;
//       // console.log(action.payload);
//       // const server = moshaf[0].server;
//       // let surahId = `0`;
//       // if (number <= 9) {
//       //   surahId = `00${number}.mp3`;
//       // } else if (number >= 10 && number <= 99) {
//       //   surahId = `0${number}.mp3`;
//       // } else {
//       //   surahId = `${number}.mp3`;
//       // }
//       // axios
//       //   .get(`${server}/${surahId}`)
//       //   .then((res) => {
//       //     console.log(res.config.url);
//       //     return window.sessionStorage.setItem("audio", JSON.stringify(res.config.url));
//       //   })
//       //   .catch((err) => console.log(err));
//     },
//   },
// });

// import { createSlice } from "@reduxjs/toolkit";

// const audioState = {
//   isActive: false,
//   audioSrc: window.sessionStorage.getItem("audio") || null,
//   audioName: "",
//   rewayaName: "",
//   reciterName: "",
// };

// export const audioSlice = createSlice({
//   name: "audio",
//   initialState: audioState,
//   reducers: {
//     setAudio: (state, action) => {
//       state.audioSrc = action.payload;
//       state.isActive = true;
//     },
//     stopAudio: (state) => {
//       state.isActive = false;
//       state.audioSrc = null;
//     },
//   },
// });

// export const { setAudio, stopAudio } = audioSlice.actions;
// export default audioSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   isActive: false,
//   audioSrc: window.sessionStorage.getItem("audio") || null,
//   audioName: "",
//   rewayaName: "",
//   reciterName: "",
// };

// const audioSlice = createSlice({
//   name: "audio",
//   initialState,
//   reducers: {
//     setAudio: (state, action) => {
//       state.audioSrc = action.payload;
//       state.isActive = true;
//     },
//     stopAudio: (state) => {
//       state.isActive = false;
//       state.audioSrc = null;
//     },
//   },
// });

// export const { setAudio, stopAudio } = audioSlice.actions;
// export default audioSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   isActive: false,
//   audioSrc: window.sessionStorage.getItem("audio") || null,
//   audioName: "",
//   rewayaName: "",
//   reciterName: "",
// };

// const audioSlice = createSlice({
//   name: "audio",
//   initialState,
//   reducers: {
//     setAudio: (state, action) => {
//       state.audioSrc = action.payload;
//       state.isActive = true;
//     },
//     stopAudio: (state) => {
//       state.isActive = false;
//       state.audioSrc = null;
//     },
//   },
// });

// export const { setAudio, stopAudio } = audioSlice.actions;
// export default audioSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  audioSrc: null, // Stores the URL of the current audio file
  isActive: false, // Whether audio is playing or not
};

const audioSlice = createSlice({
  name: "audio",
  initialState,
  reducers: {
    setAudio: (state, action) => {
      state.audioSrc = action.payload;
      state.isActive = true; // Start audio when set
    },
    stopAudio: (state) => {
      state.isActive = false;
      state.audioSrc = null;
    },
  },
});

export const { setAudio, stopAudio } = audioSlice.actions;

export default audioSlice.reducer;
