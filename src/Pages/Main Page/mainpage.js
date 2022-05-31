import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import "./mainpage.css";
import Banner from "./Banner/Banner";
import axios from "axios";
import RowPost from "./Row Post/RowPost";
import { useLocation } from "react-router-dom";

function Mainpage() {
  const location = useLocation();
  const access = location.state.access_token;
  const refresh = location.state.refresh_token;
  const [data, setData] = useState("");
  let config = {
    headers: { Authorization: `Bearer ${access}` },
  };
  useEffect(() => {
    axios
      .get(
        `http://127.0.0.1:8000/api/profile/${location.state.username}`,
        config
      )
      .then((Response) => {
        setData(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const id = data["id"];
  return (
    <div>
      <Header
        username={location.state.username}
        id={id}
        access={access}
      ></Header>
      <Banner id={id}></Banner>
      <RowPost head={"Now Playing"} lin={"now_playing"} id={id}></RowPost>
      <RowPost head={"Popular"} lin={"popular"} id={id}></RowPost>
      <RowPost head={"Top Rated"} lin={"top_rated"} id={id}></RowPost>
    </div>
  );
}

export default Mainpage;
