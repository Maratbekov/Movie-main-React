import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LanguageContext } from "../../../context/LanguageContext";
import { ApiKey } from "../../lib/apiKey";
import PaginateButtons from "../../pagination/buttons/PaginateButtons";
import MovieContent from "../MovieContent";

const SearchResult = () => {
  const { searchName } = useParams();
  const [result, setResult] = useState([]);
  const { language } = useContext(LanguageContext);
  const [page, setPage] = useState(1);
  const getCurrentPage = (page) => {
    setPage(page);
  };
  //https://api.themoviedb.org/3/search/movie?api_key=f42c53f4f985e0480ab807c5d464b681&query=

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${searchName}&page=${page}&language=${language}`
    ).then(({ data }) => setResult(data));
  }, [page, searchName, language]);
  return (
    <div>
      <MovieContent data={result} />
      {/* <div className="container py-6">{buttons}</div> */}
      <PaginateButtons data={result} getCurrentPage={getCurrentPage} />
    </div>
  );
};

export default SearchResult;
