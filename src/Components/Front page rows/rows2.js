import "./rows1.css";
import React from "react";
import { useContext } from "react";
import { rowContext } from "../../Context";

function Rows2() {
  const row_data = useContext(rowContext);
  return (
    <div className="row_main">
      <img classname="img1" src={row_data[2]} width="500" />
      <div className="a">
        <h2>{row_data[0]}</h2>
        <p>{row_data[1]}</p>
      </div>
    </div>
  );
}

export default Rows2;
