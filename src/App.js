
import "./App.css";
import Popular from "./compopnent/Pages/Popular";
import Header from "./compopnent/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./compopnent/Pages/home/Home";
import TopRated from "./compopnent/Pages/TopRated";
import Upcoming from "./compopnent/Pages/Upcoming";
import NowPlaying from "./compopnent/Pages/NowPlaying";
import Latest from "./compopnent/Pages/Latest";
import MoviePage from "./compopnent/Pages/movie-page/MoviePage";
import { useEffect, useState } from "react";
import ActorPage from "./compopnent/Pages/movie-page/actors/ActorPage";
import SearchResult from "./compopnent/Pages/search/SearchResult";
import Footer from "./compopnent/Footer/Footer";
import Layout from "./compopnent/Layout/Layout";

function App() {
  const [mode, setMode] = useState(
    JSON.parse(localStorage.getItem("mode")) || false
  );

  useEffect(() => {}, [mode]);

  const changeMode = (mode) => {
    setMode(mode);
  };
  return (
    <div className={mode ? "bg-gray-800" : ""}>
      <Layout changeMode={changeMode}>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/popular"} element={<Popular />} />
          <Route path={"/top-rated"} element={<TopRated />} />
          <Route path={"/upcoming"} element={<Upcoming />} />
          <Route path={"/now-playing"} element={<NowPlaying />} />
          <Route path={"/latest"} element={<Latest />} />
          <Route path={"/movie-page/:movieId"} element={<MoviePage />} />
          <Route path={"/actor-pages/:actorId"} element={<ActorPage />} />
          <Route path={"/search/:searchName"} element={<SearchResult />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
