import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MovieCard = ({ el }) => {
  function defineRating(rate) {
    if (rate >= 7 && rate <= 10) {
      return <p className="text-green-500">{rate}</p>;
    } else if (rate < 7 && rate > 3) {
      return <p className="text-orange-500">{rate}</p>;
    } else {
      return <p className="text-red-500">{rate}</p>;
    }
  }

  const rating = defineRating(el.vote_average);
  const [mode, setMode] = useState(
    JSON.parse(localStorage.getItem("mode")) || false
  );

  return (
    <div className="basis-1/5 m-4">
      <div
        style={{ boxShadow: "5px 5px 15px 5px #000000" }}
        className="rounded y-1 h-160 "
      >
        <Link to={`/movie-page/${el.id}`}>
          <img
            className="w-full"
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`}
            alt=""
          />
        </Link>
        <span className="flex p-2 items-center justify-between">
          <p className={mode ? "text-white" : "text-gray-700"}>{el.title}</p>
          <span className="rating font-bold ">{rating}</span>
        </span>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  el: PropTypes.object,
};
// 7 8 9 10 - green
// 3 4 5 6 - orange
// < 3 - red

export default MovieCard;
