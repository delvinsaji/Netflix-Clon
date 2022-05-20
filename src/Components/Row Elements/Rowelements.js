import React, { useState } from "react";
import "./Rowelements.css";
import { useHistory } from "react-router";

function Rowelements(props) {
  const history = useHistory();
  const [rowimg, setRowimg] = useState("rowimg3");
  const [inner, setInner] = useState("innerinner");
  const img_link = "https://image.tmdb.org/t/p/w500/";
  return (
    <div
      className={rowimg}
      style={{
        background: "url(" + img_link + props.object.backdrop_path + ")",
      }}
      onMouseEnter={() => {
        setRowimg("rowimg1");
        setInner("innerinner1");
      }}
      onMouseLeave={() => {
        setRowimg("rowimg2");
        setInner("innerinner");
      }}
      onClick={() => {
        history.push("/moviepage/" + props.object.id);
        history.go("/moviepage/" + props.object.id);
      }}
    >
      <div className={inner}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>{props.object.title}</h1>
      </div>
    </div>
  );
}

export default Rowelements;
