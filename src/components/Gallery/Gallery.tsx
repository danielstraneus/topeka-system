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
  const datetime = Date.now();
  const [newHamsterLoves, setNewHamsterLoves] = useState<string>("");
  const [newHamsterFood, setNewHamsterFood] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [isOpacity, setOpacity] = useState<boolean>(true);

  const maxNumber = 215;

  let opacity = isOpacity ? "100%" : "0%";

  async function getData() {
    const response: Response = await fetch(fixUrl("/hamsters"));
    const apiData: any = await response.json();
    setData(apiData as Hamster[]);
    console.log(apiData);
    apiData.sort(function (
      a: { wins: string | number | Date },
      b: { wins: string | number | Date }
    ) {
      var keyA = new Date(a.wins),
        keyB = new Date(b.wins);
      // Compare the 2 dates
      if (keyA > keyB) return -1;
      if (keyA < keyB) return 1;
      return 0;
    });
  }

  useEffect(() => {
    getData();
  }, []);

  // setTimeout(() => {
  //   getData();
  // }, 20000);

  const newHamster: Hamster = {
    name: newHamsterName,
    age: Number(newHamsterAge),
    imgName: newHamsterImg,
    wins: Number(datetime),
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

  const validName = newHamster.name !== "" && newHamster.name.length < 51;
  const ageLength = newHamster.age >= 0;
  const validLove = newHamster.loves !== "";
  const validFood = newHamster.favFood !== "";
  const validUrl = newHamster.imgName.startsWith("http");
  const formIsValid = validName && validLove;

  // validName && ageLength && validLove && validFood && validUrl;
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="gallery-div animate__animated animate__fadeIn animate__slower animate__delay-3s">
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
        <div className="new-hamster-form">
          <div className="opacity-fields" style={{ opacity: opacity }}>
            <h3 className="form-title">channel 5</h3>
            <div className="container-divider">
              <div className="form-left-container">
                <div className="input-div">
                  <input
                    type="text"
                    placeholder="name"
                    onChange={(event) => setNewHamsterName(event.target.value)}
                    value={newHamsterName}
                    maxLength={40}
                  />
                </div>
                {/* <div className="input-div">
                  <p>Ålder:</p>
                  <input
                    type="text"
                    placeholder="0"
                    onChange={(event) => setNewHamsterAge(event.target.value)}
                    value={newHamsterAge}
                    maxLength={9}
                  />
                </div> */}
                <div className="input-div">
                  {/* <input
                    type="text"
                    placeholder="bodnia"
                    value={newHamsterLoves}
                    maxLength={38}
                  /> */}
                  <textarea
                    // form="usrform"
                    maxLength={200}
                    value={newHamsterLoves}
                    placeholder="message"
                    onChange={(event) => setNewHamsterLoves(event.target.value)}
                  ></textarea>
                </div>
                <button
                  disabled={!formIsValid}
                  onClick={() => {
                    addNewHamster();
                    getData();
                    setNewHamsterLoves("");

                    // setSuccess(true);
                    // setOpacity(false);
                  }}
                >
                  post
                </button>
                {/* <div className="input-div">
                  <p>Favoritmat:</p>
                  <input
                    type="text"
                    placeholder="holiday-dippen"
                    onChange={(event) => setNewHamsterFood(event.target.value)}
                    value={newHamsterFood}
                    maxLength={38}
                  />
                </div> */}
                {/* <div className="input-div">
                  <p>Bild-URL:</p>
                  <input
                    type="text"
                    placeholder="https://get.musti.media/shops/mse/resources/ftp/productpage/e1/brit-animals-hamster-complete-300-grams-e1.jpg"
                    onChange={(event) => setNewHamsterImg(event.target.value)}
                    value={newHamsterImg}
                  />
                </div> */}
              </div>
              {/* <div className="form-right-container">
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
              </div> */}
            </div>
          </div>

          {/* {success ? (
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
                // setSuccess(true);
                // setOpacity(false);
              }}
            >
              lägg till
            </button>
          )} */}
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
