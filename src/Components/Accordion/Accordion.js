import React, { useState } from "react";
import "./accordion.css";
import { useContext } from "react";
import { acoordionContext } from "../../Context";

function Accordion() {
  const [state, setState1] = useState(0);
  const headClick = function () {
    if (state === 1) {
      setState1(0);
    } else {
      setState1(1);
    }
  };
  const accordion_data = useContext(acoordionContext);
  return (
    <div>
      <div className="head" onClick={() => headClick()}>
        {accordion_data[0]}
      </div>
      {state === 1 ? <div className="note">{accordion_data[1]}</div> : null}
    </div>
  );
}

export default Accordion;
