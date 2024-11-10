import React, { useEffect, useState } from "react";
import quraaStyles from "./quraa.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import Loading from "./../Loading/Loading";
const AllQuraa = () => {
  const [loading, setLoading] = useState(true);
  const [quraa, setQuraa] = useState([]);
  const [searc, setSearch] = useState("");

  // useEffect(() => {
  //   axios
  //     .get(`https://mp3quran.net/api/v3/reciters`)
  //     .then((res) => {
  //       console.log(res.data.reciters);
  //       setQuraa(res.data.reciters);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setLoading(false);
  //     });
  // });
  useEffect(() => {
    axios
      .get("https://mp3quran.net/api/v3/reciters")
      .then((res) => {
        setQuraa(res.data.reciters.sort((a, b) => (a.letter > b.letter ? 1 : b.letter > a.letter ? -1 : 0)));
        setLoading(false);
      })
      .catch((er) => console.log(er));
  }, []);

  return (
    <section className={quraaStyles.container}>
      <div className={quraaStyles.content}>
        <h1> القراء </h1>

        <div className={quraaStyles.search}>
          <input type="text" placeholder="ابحث عن قارئ " onChange={(e) => setSearch(e.target.value)} />
          <CiSearch />
        </div>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className={quraaStyles.reciters}>
              {quraa
                .filter((rec) => {
                  if (searc === "") {
                    return rec;
                  } else if (searc) {
                    return rec.name.includes(searc);
                  }
                })
                .map((r, idx, arr) => {
                  return r.letter !== arr[idx - 1]?.letter ? (
                    <React.Fragment key={r.id}>
                      <p className={quraaStyles.letter}>{r.letter}</p>
                      <Link to={`${r.id}`} key={r.id}>
                        {r.name}
                      </Link>
                    </React.Fragment>
                  ) : (
                    <Link to={`${r.id}`} key={r.id}>
                      {r.name}
                    </Link>
                  );
                })}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default AllQuraa;
