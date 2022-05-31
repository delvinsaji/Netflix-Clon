import React, { useState } from "react";
import Logo from "../../Components/Logo/Logo";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [red, setRed] = useState("red2");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handlesubmit = (e) => {
    e.preventDefault();

    setRed("red2");
    axios
      .post("http://127.0.0.1:8000/api/token/", {
        username: username,
        password: password,
      })
      .then((Response) => {
        history.push({
          pathname: "/mainpage",
          state: {
            access_token: Response.data["access"],
            refresh_token: Response.data["refresh"],
            username: username,
          },
        });
        history.go("/mainpage");
      })
      .catch((error) => {
        window.location.reload();
      });
  };

  return (
    <div className="frontmain2">
      <Logo st={0}></Logo>
      <div className="loginbox">
        <h3 style={{ textAlign: "left" }}>Sign In</h3>
        <input
          className="in"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          placeholder="User Name"
        ></input>

        <input
          className="in"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="text"
          placeholder="Password"
        ></input>
        <button onClick={handlesubmit}>Sign In</button>
        <p>
          New to Netflix?{" "}
          <Link
            to="/signup"
            onClick={() => {
              history.push("/signup");
              window.location.reload(true);
            }}
          >
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
