import React, { useEffect, useState } from "react";
import "./Watchlist.css";
import Header from "../Main Page/Header/Header";
import { useLocation } from "react-router-dom";
import axios from "axios";
import MovieComp from "./MovieComp/MovieComp";

function Watchlist() {
  const location = useLocation();
  const [watchdata, setWatchdata] = useState("");
  let counter = true;
  let config = {
    headers: { Authorization: `Bearer ${location.state.access}` },
  };
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/watchlist/${location.state.id}`, config)
      .then((Response) => {
        setWatchdata(Response.data);
      });
  }, []);

  return (
    <div>
      <Header
        username={location.state.username}
        id={location.state.id}
      ></Header>
      <h2 className="watchheading">My Watchlist</h2>
      <div className="watchmovies">
        {watchdata
          ? watchdata.map((object, index) => (
              <MovieComp
                name={object.movie_name}
                id={object.movie_id}
                user_id={location.state.id}
              ></MovieComp>
            ))
          : "null"}
      </div>
    </div>
  );
}

export default Watchlist;
