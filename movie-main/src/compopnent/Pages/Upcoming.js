import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ApiKey } from "../lib/apiKey";
import MovieContent from "./MovieContent";
import { LanguageContext } from "../../context/LanguageContext";
import PaginateButtons from "../pagination/buttons/PaginateButtons";

const Upcoming = () => {
  //https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1
  const [upcoming, setUpcoming] = useState([]);
  const { language } = useContext(LanguageContext);
  const [page, setPage] = useState(1);

  const getCurrentPage = (page) => {
    setPage(page);
  };
  useEffect(() => {
    axios(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=" +
        ApiKey +
        "&language=" +
        language +
        "&page=" +
        page
    ).then(({ data }) => setUpcoming(data));
  }, [language, page]);
  return (
    <div>
      <MovieContent data={upcoming} />
      {/* <div className="container py-6">{buttons}</div> */}
      <PaginateButtons data={upcoming} getCurrentPage={getCurrentPage} />
    </div>
  );
};

export default Upcoming;
