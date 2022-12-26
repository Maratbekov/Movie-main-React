import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiKey } from "../../../lib/apiKey";
import MovieCard from "../../MovieCard/MovieCard";

const ActorPage = () => {
  const { actorId } = useParams();
  const [actor, setActor] = useState({});
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/person/${actorId}?api_key=${ApiKey}&language=en-US`
    ).then(({ data }) => setActor(data));
    axios(
      `https://api.themoviedb.org/3/person/${actorId}?api_key=${ApiKey}&append_to_response=combined_credits`
    ).then(({ data }) => setDetails(data.combined_credits.cast));
  }, []);
  return (
    <div className="container">
      <div className="row flex flex-row flex-wrap my-6">
        <div className="basis-1/3">
          <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${actor.profile_path}`}
            alt={`actor.name`}
          />
        </div>
        <div className="basis-1/2 ml-6">
          <h1 className="text-4xl">{actor.name}</h1>
          <h1 className="text-4xl">{actor.birthday}</h1>
          <p>{actor.biography}</p>
          <p>{actor.place_of_birth}</p>
        </div>

        {details.map((el) => {
          return <MovieCard el={el} />;
        })}
      </div>
    </div>
  );
};

export default ActorPage;
