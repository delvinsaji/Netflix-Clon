import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "axios";

function Banner() {
  const img_link = "https://image.tmdb.org/t/p/w500/";
  const [trend_data, setTrend_Data] = useState(false);
  const [movie_num, setMovie_num] = useState(5);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=0877934c418946c2f31a6d22c8ec4bff"
      )
      .then((Response) => {
        setTrend_Data(Response.data);
      });
  }, []);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `${
          trend_data
            ? "url(" +
              img_link +
              trend_data.results[movie_num].backdrop_path +
              ")"
            : "aa"
        }`,
      }}
      // style={{
      //   backgroundColor: "black",
      // }}
    >
      <button
        className="forback f"
        onClick={() => {
          if (movie_num < 5) {
            setMovie_num(movie_num + 1);
          }
        }}
      ></button>
      <h1 className="title">
        {trend_data ? trend_data.results[movie_num].original_name : "null"}
        {trend_data ? trend_data.results[movie_num].original_title : "null"}
      </h1>
      <p className="b">
        {trend_data ? trend_data.results[movie_num].overview : "null"}
      </p>
      <div className="x">
        <button className="x_button">Play</button>
        <button className="x_button">Watchlist</button>
      </div>
      <button
        className="forback b"
        onClick={() => {
          if (movie_num > 0) {
            setMovie_num(movie_num - 1);
          }
        }}
      ></button>
    </div>
  );
}

export default Banner;
