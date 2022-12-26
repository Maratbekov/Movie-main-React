import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ApiKey } from "../../lib/apiKey";
import Actors from "./actors/Actors";
import Videos from "./Videos";
import { LanguageContext } from "../../../context/LanguageContext";

const MoviePage = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  const { poster_path, title, overview, runtime, backdrop_path, release_date } =
    details;
  const { language } = useContext(LanguageContext);
  const time = `${Math.floor(runtime / 60)}h ${runtime % 60} min`;
  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${ApiKey}&language=${language}`
    ).then(({ data }) => setDetails(data));
  }, [language]);

  //http://api.themoviedb.org/3/movie/{id}/casts?api_key={api_key}
  return (
    <div
      className="  "
      style={{
        background: `
            url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}") no-repeat center/cover `,
        minHeight: "100vh",
        // backgroundBlendMode: "multiply",
        // opacity: ".7"
      }}
    >
      <div className="container">
        {details !== undefined ? (
          <div className=" py-6  flex-row flex flex-wrap">
            <div className="basis-1/3 pt-6">
              <img
                style={{ boxShadow: "5px 5px 15px 5px #000000" }}
                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`}
                alt=""
              />
            </div>
            <div className="basis-1/2 pt-6 text-white">
              <h1 className="text-4xl font-bold text-center pb-2">{title}</h1>
              <p className="my-2">{overview}</p>
              <p>{time}</p>
              <p>{release_date}</p>
            </div>
          </div>
        ) : (
          "Loading"
        )}
        <Actors />
        <Videos />
      </div>
    </div>
  );
};

export default MoviePage;
