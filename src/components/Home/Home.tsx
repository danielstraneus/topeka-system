import "./Home.css";
// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBroadcastTower } from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import SupremeLeader from "../SupremeLeader/SupremeLeader";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  return (
    <div className="home">
      <h1 className="header-title animate__animated animate__fadeIn animate__slower animate__delay-3s">
        Waystar FM
      </h1>
      <h2 className="sub-title animate__animated animate__fadeIn animate__slower animate__delay-3s">
        public broadcasting service
      </h2>
      <div className="header-link-div animate__animated animate__fadeIn animate__slower animate__delay-3s">
        <a
          className="header-link "
          href="https://danielstraneus.github.io/home/"
        >
          REV X CO.
        </a>
      </div>

      <div className="title-box animate__animated animate__flipOutY animate__slow animate__delay-2s">
        <div className="animate__animated animate__rotateInUpLeft">
          <FontAwesomeIcon icon={faBroadcastTower} className="icon-mountain" />
        </div>
        <h1 className="animate__animated animate__rotateInDownLeft home-title">
          Waystar FM
        </h1>
        <p className="animate__animated animate__rotateInUpRight home-p">
          public broadcasting
        </p>
        <p className="animate__animated animate__rotateInDownRight home-p">
          service
        </p>
      </div>
      <div className="gallery">
        {" "}
        <Gallery />
      </div>
    </div>
  );
};

export default Home;
