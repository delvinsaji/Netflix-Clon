import React from "react";
import "./rows1.css";
import { useContext } from "react";
import { rowContext } from "../../Context";

function Rows1() {
  const row_data = useContext(rowContext);
  return (
    <div className="row_main">
      <div className="a">
        <h2>{row_data[0]}</h2>
        <p>{row_data[1]}</p>
      </div>
      <img src={row_data[2]} width="500" />
    </div>
  );
}

export default Rows1;
