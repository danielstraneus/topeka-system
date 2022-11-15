import "./Navbar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isTall, setHeight] = useState<boolean>(true);
  const [isOpacity, setOpacity] = useState<boolean>(true);
  const [isRevOpacity, setRevOpacity] = useState<boolean>(false);

  let height = isTall ? "0%" : "26px";
  let opacity = isOpacity ? "0%" : "100%";
  let revOpacity = isRevOpacity ? "0%" : "100%";

  return (
    <div className="Nav-bar">
      <h1 className="Nav-h1">
        <NavLink to="/">
          <FontAwesomeIcon icon={faCross} className="icon-cross" />{" "}
        </NavLink>
      </h1>

      <div
        className="Nav-open"
        style={{ opacity: revOpacity }}
        onClick={() => {
          setHeight(!isTall);
          setOpacity(!isOpacity);
          setRevOpacity(!isRevOpacity);
        }}
      >
        MENY
      </div>
      <div className="overlay" style={{ height: height, opacity: opacity }}>
        <div className="nav-links">
          <div className="nav-link">
            <div
              className="p-link"
              onClick={() => {
                setHeight(!isTall);
                setOpacity(!isOpacity);
                setRevOpacity(!isRevOpacity);
              }}
            >
              <NavLink to="/"> hem </NavLink>
              <NavLink to="/battle"> tävla </NavLink>
              <NavLink to="/gallery"> galleri </NavLink>
              <NavLink to="/ockultism"> ockultism </NavLink>
              <button
                className="Nav-close"
                style={{ opacity: opacity }}
                onClick={() => {
                  setHeight(!isTall);
                  setOpacity(!isOpacity);
                  setRevOpacity(!isRevOpacity);
                }}
              >
                <FontAwesomeIcon icon={faTimesCircle} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
