import React, { Fragment } from "react";
import Login from "./Login";
import Playboy from "../assets/PLAYBOY - SHOWER TOGETHER - LUXURY.mp4";

class Homepage extends React.Component {
  render() {
    return (
      <Fragment>
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "-1",
          }}
        >
          <source src={Playboy} type="video/mp4" />
        </video>

        <Login />
      </Fragment>
    );
  }
}

export default Homepage;
