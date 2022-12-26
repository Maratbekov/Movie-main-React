import React, { useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { ApiKey } from "../lib/apiKey";
import MovieContent from "./MovieContent";
import { LanguageContext } from "../../context/LanguageContext";
import PaginateButtons from "../pagination/buttons/PaginateButtons";
const TopRated = () => {
  const [topRated, setTopRated] = useState([]);
  const { language } = useContext(LanguageContext);

  const [page, setPage] = useState(1);

  const getCurrentPage = (page) => {
    setPage(page);
  };
  const getTopRated = async (page) => {
    const url = await axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&language=${language}&page=${page}`
    );
    const { data } = await url;
    await setTopRated(data);
  };

  useEffect(() => {
    getTopRated(page);
  }, [language, page]);

  return (
    <div>
      <MovieContent data={topRated} />
      {/* <div className="container py-6">{buttons}</div> */}
      <PaginateButtons data={topRated} getCurrentPage={getCurrentPage} />
    </div>
  );
};

export default TopRated;
