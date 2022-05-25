import { useState, useEffect } from "react";
import LoadAnimation2 from "../LoadAnimation/LoadAnimation2";
import "../LoadAnimation/LoadAnimation2.css";
import "./SupremeLeader.css";
import "animate.css";
import { fixUrl } from "../utils";
import { fixImg } from "../utils";

const SupremeLeader = () => {
  const [winnerName, setWinnerName] = useState<null | string>(null);
  const [winnerImg, setWinnerImg] = useState<null | string>(null);
  const [winnerScore, setWinnerScore] = useState<string>();

  // const winners: Array = [];

  async function getData() {
    const response: Response = await fetch(fixUrl("/hamsters"));
    const apiData: any = await response.json();

    apiData.forEach(
      (object: { score: number; wins: number; defeats: number }) => {
        object.score = object.wins - object.defeats;
      }
    );

    apiData.sort(function (x: { score: number }, y: { score: number }) {
      return y.score - x.score;
    });

    let winnerScore = apiData[0].score;

    const winners = [];
    for (let n = 0; n < apiData.length; n++) {
      let obj = apiData[n];
      if (obj.score === winnerScore) {
        winners.push(obj);
      }
    }
    let randomWinner = winners[Math.floor(Math.random() * winners.length)];
    let winnerName = randomWinner.name;
    let winnerImg = randomWinner.imgName;
    let finalWinnerScore = randomWinner.score;

    setWinnerName(winnerName as string);
    setWinnerImg(winnerImg as string);
    setWinnerScore(finalWinnerScore as string);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="supremeLeader-box animate__animated animate__fadeIn animate__slower animate__delay-2s">
      <div className="supremeLeader-item">
        {winnerImg ? (
          <img className="supremeLeader-img" src={fixImg(winnerImg)} alt="" />
        ) : (
          <div className="error-message">
            <LoadAnimation2 />
            <p className="server-error animate__animated animate__fadeIn animate__slower animate__delay-5s">
              server cannot be reached, please try again
            </p>
            <button
              onClick={() => {
                getData();
              }}
              className="error-button animate__animated animate__fadeIn animate__slower animate__delay-5s"
            >
              try again
            </button>
          </div>
        )}

        {winnerName ? (
          <div className="supremeLeader-info">
            <div className="supreme-leader-info-left">
              <div>Supreme occult leader:</div>
              <div>High score (wins-losses):</div>
            </div>
            <div className="supreme-leader-info-right">
              <div>{winnerName}</div>
              <div>{winnerScore} points</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SupremeLeader;
