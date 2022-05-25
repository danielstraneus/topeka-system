import { useState, useEffect } from "react";
import LoadAnimation3 from "../LoadAnimation/LoadAnimation3";
import "../LoadAnimation/LoadAnimation3.css";
import "animate.css";
import "./Battle.css";
import { fixUrl } from "../utils";
import { fixImg } from "../utils";
import Hamster from "../interface";
import Pentagram from "./occultism.svg";
import Sulfur from "./black_sulfur_symbol.svg";

const Battle = () => {
  const [leftHamster, setLeftHamster] = useState<null | Hamster[]>(null);
  const [rightHamster, setRightHamster] = useState<null | Hamster[]>(null);

  const [winner, setWinner] = useState<null | string>(null);

  const [leftName, setLeftName] = useState<null | string>(null);
  const [leftImg, setLeftImg] = useState<null | string>(null);
  let [leftWins, setLeftWins] = useState<any | string>(null);
  let [leftDefeats, setLeftDefeats] = useState<any | string>(null);
  let [leftGames, setLeftGames] = useState<any | string>(null);
  const [leftLoves, setLeftLoves] = useState<any | string>(null);
  const [leftFavFood, setLeftFavFood] = useState<any | string>(null);
  const [leftId, setLeftId] = useState<any | string>(null);
  const [leftAge, setLeftAge] = useState<any | string>(null);

  const [rightName, setRightName] = useState<null | string>(null);
  const [rightImg, setRightImg] = useState<null | string>(null);
  let [rightWins, setRightWins] = useState<any | string>(null);
  let [rightDefeats, setRightDefeats] = useState<any | string>(null);
  let [rightGames, setRightGames] = useState<any | string>(null);
  const [rightLoves, setRightLoves] = useState<any | string>(null);
  const [rightFavFood, setRightFavFood] = useState<any | string>(null);
  const [rightId, setRightId] = useState<any | string>(null);
  const [rightAge, setRightAge] = useState<any | string>(null);

  const leftHamsterWinData: Hamster = {
    name: String(leftName),
    age: Number(leftAge),
    imgName: String(leftImg),
    wins: Number(leftWins + 1),
    defeats: Number(leftDefeats),
    games: Number(leftGames + 1),
    loves: String(leftLoves),
    favFood: String(leftFavFood),
    id: String(leftId),
  };
  const leftHamsterLoseData: Hamster = {
    name: String(leftName),
    age: Number(leftAge),
    imgName: String(leftImg),
    wins: Number(leftWins),
    defeats: Number(leftDefeats + 1),
    games: Number(leftGames + 1),
    loves: String(leftLoves),
    favFood: String(leftFavFood),
    id: String(leftId),
  };
  const rightHamsterWinData: Hamster = {
    name: String(rightName),
    age: Number(rightAge),
    imgName: String(rightImg),
    wins: Number(rightWins + 1),
    defeats: Number(rightDefeats),
    games: Number(rightGames + 1),
    loves: String(rightLoves),
    favFood: String(rightFavFood),
    id: String(rightId),
  };
  const rightHamsterLoseData: Hamster = {
    name: String(rightName),
    age: Number(rightAge),
    imgName: String(rightImg),
    wins: Number(rightWins),
    defeats: Number(rightDefeats + 1),
    games: Number(rightGames + 1),
    loves: String(rightLoves),
    favFood: String(rightFavFood),
    id: String(rightId),
  };

  const [isOpacity, setOpacity] = useState<boolean>(false);
  let opacity = isOpacity ? "0%" : "60%";
  let opacity2 = isOpacity ? "0%" : "100%";
  let revOpacity = isOpacity ? "100%" : "0%";

  const [isDead, setIsDead] = useState<boolean>(false);
  let dead = isDead ? "none" : "block";
  let alive = isDead ? "block" : "none";

  async function getRandoms() {
    const response: Response = await fetch(fixUrl("/hamsters/random"));
    const data: any = await response.json();
    setLeftHamster(leftHamster as Hamster[]);

    setLeftName(data.name);
    setLeftImg(data.imgName);
    setLeftDefeats(data.defeats);
    setLeftWins(data.wins);
    setLeftAge(data.age);
    setLeftGames(data.games);
    setLeftFavFood(data.favFood);
    setLeftLoves(data.loves);
    setLeftId(data.id);

    const leftDupe = data.id;

    const response2: Response = await fetch(fixUrl("/hamsters/random"));
    const data2: any = await response2.json();
    setRightHamster(rightHamster as Hamster[]);

    setRightName(data2.name);
    setRightImg(data2.imgName);
    setRightDefeats(data2.defeats);
    setRightWins(data2.wins);
    setRightAge(data2.age);
    setRightGames(data2.games);
    setRightFavFood(data2.favFood);
    setRightLoves(data2.loves);
    setRightId(data2.id);

    const rightDupe = data2.id;

    if (leftDupe === rightDupe) {
      getRandoms();
    }
  }

  const leftHamsterWin = () => {
    fetch(fixUrl("/hamsters/" + leftId), {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leftHamsterWinData),
    });
    fetch(fixUrl("/hamsters/" + rightId), {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rightHamsterLoseData),
    });
  };

  const rightHamsterWin = () => {
    fetch(fixUrl("/hamsters/" + leftId), {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leftHamsterLoseData),
    });
    fetch(fixUrl("/hamsters/" + rightId), {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rightHamsterWinData),
    });
  };

  useEffect(() => {
    getRandoms();
  }, []);

  return (
    <div>
      <div className="battle-hamster-container">
        <div className="left-battle-hamster">
          {leftImg ? (
            <div className="battle-hamster-item animate__animated animate__bounceInLeft animate__slow">
              <img
                className="battle-img"
                style={{ opacity: opacity }}
                src={fixImg(leftImg)}
                alt=""
              />
              <div
                style={{ opacity: revOpacity }}
                className="battle-hamster-info"
              >
                Losses: {leftDefeats}
              </div>
              <div
                style={{ opacity: revOpacity }}
                className="battle-hamster-info"
              >
                Wins: {leftWins}
              </div>
              <div
                style={{ opacity: revOpacity }}
                className="battle-hamster-info"
              >
                Games: {leftGames}
              </div>
              <div className="battle-hamster-name">{leftName}</div>
            </div>
          ) : (
            <LoadAnimation3 />
          )}
        </div>
        <div className="right-battle-hamster">
          {rightImg ? (
            <div className="battle-hamster-item animate__animated animate__bounceInRight animate__slow">
              <img
                className="battle-img"
                style={{ opacity: opacity }}
                src={fixImg(rightImg)}
                alt=""
              />

              <div
                style={{ opacity: revOpacity }}
                className="battle-hamster-info"
              >
                Defeats: {rightDefeats}
              </div>
              <div
                style={{ opacity: revOpacity }}
                className="battle-hamster-info"
              >
                Wins: {rightWins}
              </div>
              <div
                style={{ opacity: revOpacity }}
                className="battle-hamster-info"
              >
                Games: {rightGames}
              </div>

              <div className="battle-hamster-name">{rightName}</div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="battle-vote-container">
        <p
          style={{ display: dead }}
          className="battle-vote-text animate__animated animate__flipInX animate__slow"
        >
          Rösta på den du tycker är mest occkult
        </p>
        <div className="vote-buttons" style={{ display: dead }}>
          <img className="pentagram-left" src={Pentagram} alt="pentagram" />
          <button
            className="vote-button animate__animated animate__bounceInRight animate__slow"
            onClick={() => {
              setOpacity(true);
              leftHamsterWin();
              setLeftWins(leftWins + 1);
              setLeftGames(leftGames + 1);
              setRightDefeats(rightDefeats + 1);
              setRightGames(rightGames + 1);
              setIsDead(true);
              setWinner(leftName);
            }}
          >
            {leftName}
          </button>
          <button
            className="vote-button animate__animated animate__bounceInLeft animate__slow"
            onClick={() => {
              setOpacity(true);
              rightHamsterWin();
              setLeftDefeats(leftDefeats + 1);
              setLeftGames(leftGames + 1);
              setRightWins(rightWins + 1);
              setRightGames(rightGames + 1);
              setIsDead(true);
              setWinner(rightName);
            }}
          >
            {rightName}
          </button>
          <img className="pentagram-right" src={Pentagram} alt="pentagram" />
        </div>
        <div
          className="winner animate__animated animate__fadeIn animate__slower"
          style={{ display: alive }}
        >
          {winner} vann!
        </div>

        <button
          className="new-game-button animate__animated animate__flipInY animate__slow"
          style={{ display: alive }}
          onClick={() => {
            setOpacity(false);
            setIsDead(false);
            getRandoms();
          }}
        >
          ny match
        </button>
        <img
          className="sulfur animate__animated animate__flipInX animate__slower"
          src={Sulfur}
          alt="Sulfur"
        />
        <p className="sulfur-text animate__animated animate__flipInX animate__slower">
          Explore your light and celebrate your darkness.
        </p>
      </div>
    </div>
  );
};

export default Battle;
