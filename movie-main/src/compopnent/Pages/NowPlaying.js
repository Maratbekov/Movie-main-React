import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ApiKey } from "../lib/apiKey";
import MovieContent from "./MovieContent";
import { LanguageContext } from "../../context/LanguageContext";

const NowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const { language } = useContext(LanguageContext);
  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${ApiKey}&language=${language}&page=1`
    ).then(({ data }) => setNowPlaying(data));
  }, []);
  return <MovieContent data={nowPlaying} />;
};

export default NowPlaying;
