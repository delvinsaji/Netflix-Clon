import React, { useState } from "react";
import Logo from "../../Components/Logo/Logo";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { app } from "../../firebase/config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [username, setUsername] = useState("");
  const [emailid, setEmailid] = useState("");
  const [red, setRed] = useState("red2");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handlesubmit = (e) => {
    e.preventDefault();
    if (emailid.indexOf("@") === -1 || emailid.indexOf(".") === -1) {
      setRed("red1");
      setEmailid("");
    } else {
      setRed("red2");
      const authentication = getAuth(app);
      signInWithEmailAndPassword(authentication, emailid, password)
        .then((result) => {
          console.log(result);
          history.push(`/mainpage/${username}`);
          history.go(`/mainpage/${username}`);
        })
        .catch((error) => {
          alert(error);
        });
    }
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
          value={emailid}
          onChange={(e) => {
            setEmailid(e.target.value);
          }}
          type="text"
          placeholder="Email ID"
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
