import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ApiKey } from "../lib/apiKey";
import { Link, useParams } from "react-router-dom";
import MovieContent from "./MovieContent";
import { LanguageContext } from "../../context/LanguageContext";
import PaginateButtons from "../pagination/buttons/PaginateButtons";
import loader from "../Loader/Loader";
import Loader from "../Loader/Loader";
const Popular = () => {
  const [popular, setPopular] = useState([]);
  const { language } = useContext(LanguageContext);
  const [page, setPage] = useState(1);

  const getCurrentPage = (page) => {
    setPage(page);
  };

  const getPopular = async (page) => {
    const url = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=${language}&page=${page}`
    );
    const { data } = await url;
    setTimeout(() =>{
      setPopular(data);

    },1000)
  };
  const { id } = useParams();

 

  useEffect(() => {
    getPopular(page);
  }, [language, page]);

  return (
    <div>
      {
        popular.length === 0? <Loader/>:
            <>
              <MovieContent data={popular} />
              {/* <div className="container py-6">{buttons}</div> */}
              <PaginateButtons data={popular} getCurrentPage={getCurrentPage} />
            </>
      }
    </div>
  );
};

export default Popular;
