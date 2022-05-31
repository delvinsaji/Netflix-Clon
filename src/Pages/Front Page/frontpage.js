import React, { useState } from "react";
import Logo from "../../Components/Logo/Logo";
import "./frontpage.css";
import Rows1 from "../../Components/Front page rows/rows1";
import Rows2 from "../../Components/Front page rows/rows2";
import { rowContext } from "../../Context";
import Questions from "./questions/questions";
import { useHistory } from "react-router-dom";

function Frontpage() {
  const [mail, setMail] = useState("");
  const history = useHistory();
  const data_array = [
    [
      "Enjoy on your TV.",
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
      1,
    ],
    [
      "Download your shows to watch offline.",
      "Save your favourites easily and always have something to watch.",
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
      2,
    ],
    [
      "Watch everywhere.",
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV..",
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png",
      1,
    ],
    [
      "Create profiles for children.",
      "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
      "https://occ-0-2164-2774.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf",
      2,
    ],
  ];
  const [row1, setRow1] = useState(data_array[0]);
  const [row2, setRow2] = useState(data_array[1]);
  const [row3, setRow3] = useState(data_array[2]);
  const [row4, setRow4] = useState(data_array[3]);

  return (
    <div>
      <div className="frontmain">
        <div className="header">
          <Logo st={0}></Logo>
          <div className="buttons">
            <button
              className="signinbutton"
              onClick={() => {
                history.push("/login");
                history.go("/login");
              }}
            >
              Log In
            </button>
            <button
              className="signinbutton"
              onClick={() => {
                history.push("/signup");
                window.location.reload(true);
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
        <h3>Unlimited movies, TV shows and more.</h3>
        <h4>Watch anywhere. Cancel anytime.</h4>
        <h6>
          Ready to watch? Enter your email to create or restart your membership.
        </h6>
        <div className="box">
          <form>
            <input
              className="inputfield"
              type="text"
              value={mail}
              onChange={(e) => {
                setMail(e.target.value);
              }}
              placeholder="EMAIL ADDRESS"
            ></input>
            <button
              className="started"
              onClick={() => {
                if (mail !== "") {
                  history.push("/signup");
                  history.go("/signup");
                }
              }}
            >
              Get Started
            </button>
          </form>
        </div>
        <div className="fade"></div>
      </div>
      <rowContext.Provider value={row1}>
        <Rows1></Rows1>
      </rowContext.Provider>
      <rowContext.Provider value={row2}>
        <Rows2></Rows2>
      </rowContext.Provider>
      <rowContext.Provider value={row3}>
        <Rows1></Rows1>
      </rowContext.Provider>
      <rowContext.Provider value={row4}>
        <Rows2></Rows2>
      </rowContext.Provider>
      <Questions></Questions>
    </div>
  );
}

export default Frontpage;
