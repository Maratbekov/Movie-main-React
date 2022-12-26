import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import PropTypes from "prop-types";

const MovieContent = ({ data }) => {
  // array
  // object
  // array - iterable -
  // object- non-iterable
  console.log("data", data);

  if (data.results && Array.isArray(data.results)) {
    return (
      <div className="container">
        <div className="flex flex-wrap flex-row justify-between">
          {data.results.map((el) => (
            <MovieCard key={el.id} el={el} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="flex flex-wrap flex-row justify-between">
          <MovieCard el={data} />
        </div>
      </div>
    );
  }
};

MovieContent.propTypes = {
  data: PropTypes.array || PropTypes.object,
};

export default MovieContent;
