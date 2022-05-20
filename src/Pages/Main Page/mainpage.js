import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import "./mainpage.css";
import Banner from "./Banner/Banner";
import axios from "axios";
import RowPost from "./Row Post/RowPost";

function Mainpage() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <RowPost head={"Now Playing"} lin={"now_playing"}></RowPost>
      <RowPost head={"Popular"} lin={"popular"}></RowPost>
      <RowPost head={"Top Rated"} lin={"top_rated"}></RowPost>
    </div>
  );
}

export default Mainpage;
