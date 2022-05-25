import { useState, useEffect } from "react";
import Hamster from "../interface";
import HamsterItem from "../Hamster";
import LoadAnimation from "../LoadAnimation/LoadAnimation";
import "../LoadAnimation/LoadAnimation.css";
import "./Gallery.css";
import { fixUrl } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnkh } from "@fortawesome/free-solid-svg-icons";

const Gallery = () => {
  const [data, setData] = useState<null | Hamster[]>(null);
  const [newHamsterName, setNewHamsterName] = useState<string>("");
  const [newHamsterAge, setNewHamsterAge] = useState<string | number>("");
  const [newHamsterImg, setNewHamsterImg] = useState<string>("");
  const [newHamsterLoves, setNewHamsterLoves] = useState<string>("");
  const [newHamsterFood, setNewHamsterFood] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [isOpacity, setOpacity] = useState<boolean>(true);

  let opacity = isOpacity ? "100%" : "0%";

  async function getData() {
    const response: Response = await fetch(fixUrl("/hamsters"));
    const apiData: any = await response.json();
    setData(apiData as Hamster[]);
  }

  useEffect(() => {
    getData();
  }, []);

  const newHamster: Hamster = {
    name: newHamsterName,
    age: Number(newHamsterAge),
    imgName: newHamsterImg,
    wins: Number(0),
    defeats: Number(0),
    games: Number(0),
    loves: newHamsterLoves,
    favFood: newHamsterFood,
    id: String(""),
  };

  const addNewHamster = () => {
    fetch(fixUrl("/hamsters/"), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newHamster),
    });
    // Använd try/catch och await om du behöver hantera eventuella fel
  };

  const validName = newHamster.name !== "" && newHamster.name.length < 10;
  const ageLength = newHamster.age >= 0;
  const validLove = newHamster.loves !== "";
  const validFood = newHamster.favFood !== "";
  const validUrl = newHamster.imgName.startsWith("http");
  const formIsValid =
    validName && ageLength && validLove && validFood && validUrl;

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="gallery-div">
      <div className="form-and-boxes">
        <div className="left-box animate__animated animate__flipInY animate__slow">
          <FontAwesomeIcon
            icon={faAnkh}
            className="
          left-box-cross"
          />
          <h3>ETERNAL LIFE</h3>
          <h3 className="left-shadow">ETERNAL LIFE</h3>
        </div>
        <div className="new-hamster-form animate__animated animate__fadeIn animate__slow">
          <div className="opacity-fields" style={{ opacity: opacity }}>
            <h3 className="form-title">Addera en ny medlem till Abbey Park</h3>
            <div className="container-divider">
              <div className="form-left-container">
                <div className="input-div">
                  <p>Namn:</p>
                  <input
                    type="text"
                    placeholder="Stefan"
                    onChange={(event) => setNewHamsterName(event.target.value)}
                    value={newHamsterName}
                    maxLength={9}
                  />
                </div>
                <div className="input-div">
                  <p>Ålder:</p>
                  <input
                    type="text"
                    placeholder="0"
                    onChange={(event) => setNewHamsterAge(event.target.value)}
                    value={newHamsterAge}
                    maxLength={9}
                  />
                </div>
                <div className="input-div">
                  <p>Älskar att:</p>
                  <input
                    type="text"
                    placeholder="dippa chips"
                    onChange={(event) => setNewHamsterLoves(event.target.value)}
                    value={newHamsterLoves}
                    maxLength={38}
                  />
                </div>
                <div className="input-div">
                  <p>Favoritmat:</p>
                  <input
                    type="text"
                    placeholder="holiday-dippen"
                    onChange={(event) => setNewHamsterFood(event.target.value)}
                    value={newHamsterFood}
                    maxLength={38}
                  />
                </div>
                <div className="input-div">
                  <p>Bild-URL:</p>
                  <input
                    type="text"
                    placeholder="https://get.musti.media/shops/mse/resources/ftp/productpage/e1/brit-animals-hamster-complete-300-grams-e1.jpg"
                    onChange={(event) => setNewHamsterImg(event.target.value)}
                    value={newHamsterImg}
                  />
                </div>
              </div>
              <div className="form-right-container">
                <div className="input-div">
                  {validName ? (
                    <div className="form-message-success">
                      måste innehålla 1-9 tecken.
                    </div>
                  ) : (
                    <div className="form-message">
                      måste innehålla 1-9 tecken.
                    </div>
                  )}
                </div>
                <div className="input-div">
                  {ageLength ? (
                    <div className="form-message-success">
                      måste vara en siffra. ej negativt tal.
                    </div>
                  ) : (
                    <div className="form-message">
                      måste vara en siffra. ej negativt tal.
                    </div>
                  )}
                </div>
                <div className="input-div">
                  {validLove ? (
                    <div className="form-message-success">
                      minst 1 tecken, får ej lämnas tomt.
                    </div>
                  ) : (
                    <div className="form-message">
                      minst 1 tecken, får ej lämnas tomt.
                    </div>
                  )}
                </div>
                <div className="input-div">
                  {validFood ? (
                    <div className="form-message-success">
                      minst 1 tecken, får ej lämnas tomt.
                    </div>
                  ) : (
                    <div className="form-message">
                      minst 1 tecken, får ej lämnas tomt.
                    </div>
                  )}
                </div>
                <div className="input-div">
                  {validUrl ? (
                    <div className="form-message-success">
                      måste börja med http eller https
                    </div>
                  ) : (
                    <div className="form-message">
                      måste börja med http eller https
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {success ? (
            <div>
              <div className="animate__animated animate__bounceOut animate__slow animate__delay-1s">
                <h3 className="success-message-1 animate__animated animate__rubberBand">
                  SUCCESS!
                </h3>
              </div>
              <p className="success-message-2 animate__animated animate__fadeIn animate__slow animate__delay-2s">
                EN TILL?
              </p>
              <button
                className="add-button"
                onClick={() => {
                  setSuccess(false);
                  setOpacity(true);
                }}
              >
                absolut
              </button>
            </div>
          ) : (
            <button
              className="add-button"
              disabled={!formIsValid}
              onClick={() => {
                addNewHamster();
                getData();
                setSuccess(true);
                setOpacity(false);
              }}
            >
              lägg till
            </button>
          )}
        </div>
        <div className="right-box animate__animated animate__flipInY animate__slow">
          <FontAwesomeIcon
            icon={faAnkh}
            className="
          right-box-cross"
          />
          <h3>ECTOPLASM</h3>
          <h3 className="right-shadow">ECTOPLASM</h3>
        </div>
      </div>
      <div className="grid-container">
        {data ? (
          data.map((hamster) => (
            <div className="grid-item" key={hamster.id}>
              <div>
                <HamsterItem hamster={hamster} />
              </div>
            </div>
          ))
        ) : (
          <LoadAnimation />
        )}
      </div>
    </div>
  );
};

export default Gallery;
