import "./Home.css";
// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnkh } from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import SupremeLeader from "../SupremeLeader/SupremeLeader";

const Home = () => {
  return (
    <div className="home">
      <h1 className="header-title animate__animated animate__fadeIn animate__slower animate__delay-2s">
        Abbey Park
      </h1>
      <h2 className="sub-title animate__animated animate__fadeIn animate__slower animate__delay-2s">
        Occult hamster society
      </h2>
      <div className="header-link-div animate__animated animate__fadeIn animate__slower animate__delay-2s">
        <a
          className="header-link "
          href="https://danielstraneus.github.io/home/"
        >
          REV X CO.
        </a>
      </div>

      <div className="title-box animate__animated animate__flipOutY animate__slow animate__delay-2s">
        <div className="animate__animated animate__rotateInUpLeft">
          <FontAwesomeIcon icon={faAnkh} className="icon-mountain" />
        </div>
        <h1 className="animate__animated animate__rotateInDownLeft home-title">
          Abbey Park
        </h1>
        <p className="animate__animated animate__rotateInUpRight home-p">
          occult hamster
        </p>
        <p className="animate__animated animate__rotateInDownRight home-p">
          society
        </p>
      </div>
      <SupremeLeader />
      <div className="how-to-box animate__animated animate__fadeIn animate__slower animate__delay-2s">
        <p className="info-text-bold">Guide:</p>
        <p className="info-text">
          Klicka på meny upp till höger för att se tillgängliga alternativ.
          Under menyn kan du välja "Tävla" för att se 2 stycken slumpade
          hamstrar och rösta på den du tycker är mest ockult. Under menyn finner
          du också "Galleri" där du kan se alla hamstrar samt även se
          match-statistik och annan information om varje hamster. Utöver detta
          kan du i galleriet också lägga till och ta bort hamstrar.
        </p>
      </div>
    </div>
  );
};

export default Home;
