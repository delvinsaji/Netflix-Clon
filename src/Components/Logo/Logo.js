import React from "react";
import "./Logo.css";
import { useHistory } from "react-router-dom";

function Logo(props) {
  const history = useHistory();
  return (
    <div>
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        width="130"
        onClick={() => {
          if (props.st === 0) {
            history.push("/");
            history.go("/");
          }
        }}
      />
    </div>
  );
}

export default Logo;
