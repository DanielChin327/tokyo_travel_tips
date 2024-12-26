import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import "./Landing.scss";

function Landing() {
  const message = "Welcome to Tokyo Travel Tips!";

  return (
  <div className="landing-container">

  <div className="banner" style="background-image: linear-gradient(rgba(0, 0, 0, 0.637),rgba(0, 0, 0, 0.665)), url('/client/src/assets/images/tokyo_station.jpg');">
    <h1>Le Wagon brings <strong>tech skills</strong> to <strong>creative people</strong>!</h1>
    <p>Change your life and learn to code at one of our campuses around the world.</p>
    <a className="btn btn-flat" href="#">Apply now</a>

</div>









  </div>
  );
}

export default Landing;
