import React from "react";
import "./Signup.css";
import Logo from "../../Components/Logo/Logo";

import { useHistory } from "react-router";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const [red, setRed] = useState("red2");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [emailid, setEmailid] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handlesubmit = (e) => {
    e.preventDefault();
    if (emailid.indexOf("@") === -1 || emailid.indexOf(".") === -1) {
      setRed("red1");
      setEmailid("");
    } else {
      setRed("red2");
      axios
        .post("http://127.0.0.1:8000/api/createuser/", {
          name: name,
          username: username,
          email: emailid,
          password: password,
        })
        .then((Response) => {
          history.push("/login");
          history.go("/login");
        })
        .catch((error) => {
          window.location.reload();
        });
    }
  };
  return (
    <div className="frontmain1">
      <Logo st={0}></Logo>
      <div className="loginbox">
        <h3 style={{ textAlign: "left" }}>Sign Up</h3>
        <input
          className="in"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Name"
        ></input>
        <input
          className="in"
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Username"
        ></input>
        <input
          className="in"
          type="email"
          value={emailid}
          onChange={(e) => {
            setEmailid(e.target.value);
          }}
          placeholder="Email ID"
        ></input>
        <p className={red}>*This Email ID is invalid</p>
        <input
          className="in"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        ></input>
        <button onClick={handlesubmit}>Sign Up</button>
      </div>
    </div>
  );
}

export default Signup;
