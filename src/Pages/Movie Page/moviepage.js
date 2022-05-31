import React, { useEffect, useContext, useState } from "react";
import "./moviepage.css";
import axios from "axios";
import ReactPlayer from "react-player";
import Header from "../Main Page/Header/Header";
import { useLocation } from "react-router-dom";

function Moviepage() {
  const location = useLocation();
  const img_link = "https://image.tmdb.org/t/p/w500/";
  const [moviedata, setMoviedata] = useState();
  const [video, setVideo] = useState();
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          location.state.movie_id +
          "?api_key=0877934c418946c2f31a6d22c8ec4bff&language=en-US"
      )
      .then((Response) => {
        setMoviedata(Response.data);
      });
    axios
      .get(
        "http://api.themoviedb.org/3/movie/" +
          location.state.movie_id +
          "/videos?api_key=0877934c418946c2f31a6d22c8ec4bff"
      )
      .then((Response) => {
        setVideo(Response.data.results[0]);
      });
  }, []);

  return (
    <div className="movie1">
      <Header></Header>
      <div className="movie2">
        <div className="pageflex">
          <img
            className="mov"
            src={moviedata ? img_link + moviedata.poster_path : "aa"}
            alt="Movie poster"
          ></img>
          <div className="pageflexinner">
            <h3 className="ti">
              {moviedata ? moviedata.original_title : "null"}
            </h3>
            <p>{moviedata ? moviedata.overview : "null"}</p>
            <div className="x1">
              <button className="x_button">Play</button>
              <button
                className="x_button"
                onClick={() => {
                  axios.post(
                    `http://127.0.0.1:8000/api/postwatchlist/${location.state.id}`,
                    {
                      movie_name: moviedata ? moviedata.original_title : "null",
                      movie_id: location.state.movie_id,
                    }
                  );
                }}
              >
                Watchlist
              </button>
            </div>
          </div>
        </div>
        <ReactPlayer
          className="youtube"
          url={video ? "https://www.youtube.com/watch?v=" + video.key : "null"}
          width={"1074px"}
          height={" 500px"}
        />
      </div>
    </div>
  );
}

export default Moviepage;

// http://api.themoviedb.org/3/movie/335787/videos?api_key=0877934c418946c2f31a6d22c8ec4bff
// https://www.youtube.com/watch?v=BdJKm16Co6M
