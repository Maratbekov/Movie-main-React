import React from "react";
import Slider from "react-slick";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { ApiKey } from "../../../lib/apiKey";
import { Link, useParams } from "react-router-dom";

const Actors = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}/casts?api_key=${ApiKey}`
    ).then(({ data }) => setActors(data.cast));
  }, []);
  return (
    <div className="pb-4">
      <Slider {...settings}>
        {actors.map((el) => (
          <div>
            <div className="">
              <Link to={`/actor-pages/${el.id}`}>
                <img
                  src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`}
                  alt=""
                />
              </Link>

              <span className="text-white flex flex-col w-1/2">
                <p className="text-gray-900">{el.character}</p>
                <p>{el.name}</p>
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Actors;
