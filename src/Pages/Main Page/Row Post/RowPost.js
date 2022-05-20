import axios from "axios";
import React, { useState, useEffect } from "react";
import "./RowPost.css";
import Rowelements from "../../../Components/Row Elements/Rowelements";

function RowPost(props) {
  const link =
    "https://api.themoviedb.org/3/movie/" +
    props.lin +
    "?api_key=0877934c418946c2f31a6d22c8ec4bff&language=en-US&page=1";

  const [rowdata, setRowdata] = useState([]);
  useEffect(() => {
    axios.get(link).then((Response) => {
      setRowdata(Response.data.results);
    });
  }, []);
  return (
    <div className="rowpost">
      <h5 className="rowhead">{props.head}</h5>
      <div className="imgbatches">
        {rowdata.map((s, index) => (
          <Rowelements object={s}></Rowelements>
        ))}
      </div>
    </div>
  );
}

export default RowPost;
