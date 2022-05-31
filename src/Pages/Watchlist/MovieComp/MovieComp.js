import React, { useEffect, useState } from "react";
import "./MovieComp.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function MovieComp(props) {
  const history = useHistory();
  const img_link = "https://image.tmdb.org/t/p/w500/";
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          props.id +
          "?api_key=0877934c418946c2f31a6d22c8ec4bff&language=en-US"
      )
      .then((Response) => {
        setData(Response.data);
      });
    axios
      .get(
        "https://api.themoviedb.org/3/tv/" +
          props.id +
          "?api_key=0877934c418946c2f31a6d22c8ec4bff&language=en-US"
      )
      .then((Response) => {
        setData(Response.data);
      });
  }, []);
  console.log(data);
  console.log(props.id);
  return (
    <div className="watch">
      <img
        onClick={() => {
          history.push({
            pathname: "/moviepage/" + props.id,
            state: {
              id: props.user_id,
              movie_id: props.id,
            },
          });
          history.go("/moviepage/" + props.id);
        }}
        className="watchimage"
        src={img_link + data.poster_path}
        alt="Movie poster"
      />
      <p className="watchname">{props.name}</p>
    </div>
  );
}

export default MovieComp;
