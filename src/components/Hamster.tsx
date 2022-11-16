import Hamster from "./interface";
import { useState } from "react";
import { fixImg } from "./utils";
import { fixUrl } from "./utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faThumbTack } from "@fortawesome/free-solid-svg-icons";

interface Props {
  hamster: Hamster;
}

const HamsterItem = ({ hamster }: Props) => {
  const [isOpacity, setOpacity] = useState<boolean>(true);
  const [isAlive, setAlive] = useState<boolean>(false);
  const [isDead, setDead] = useState<boolean>(true);

  let opacity = isOpacity ? "0%" : "100%";
  let revOpacity = isOpacity ? "60%" : "0%";
  let alive = isAlive ? "block" : "none";
  let dead = isDead ? "block" : "none";

  async function deleteHamster() {
    const response: Response = await fetch(fixUrl("/hamsters/" + hamster.id), {
      method: "DELETE",
    });
    const apiData: any = response;
    console.log(fixUrl("/hamsters" + hamster.id));
  }

  // setTimeout(() => {
  //   setOpacity(!isOpacity);
  //   setAlive(!isAlive);
  //   setDead(!isDead);
  // }, 30000);

  // setTimeout(() => {
  //   deleteHamster();
  // }, 40000);

  return (
    // <div>
    //   <div className="msg-name">{hamster.name}</div>
    //   <div className="msg">{hamster.loves}</div>
    // </div>

    <div>
      {isAlive ? (
        <div>
          <div className="death-icons">
            {/* <FontAwesomeIcon
              icon={faBroadcastTower}
              className="death-icon-left"
            /> */}
            <FontAwesomeIcon icon={faThumbTack} className="dead-hamster" />
            {/* <FontAwesomeIcon
              icon={faBroadcastTower}
              className="death-icon-right"
            /> */}
          </div>
        </div>
      ) : (
        <div>
          <div className="msg-box">
            <div className="msg-name">{hamster.name}</div>
            <div className="msg">{hamster.loves}</div>
          </div>
          <button
            className="delete-button"
            onClick={() => {
              deleteHamster();
              setAlive(!isAlive);
            }}
          >
            delete
          </button>
        </div>
      )}
    </div>
  );
};
// <div>
//   <div>
//     {isDead ? (
//       <div></div>
//     ) : (
//       <div>
//         <div className="death-icons">
//           <FontAwesomeIcon icon={faCross} className="death-icon-left" />
//           <FontAwesomeIcon icon={faCross} className="dead-hamster" />
//           <FontAwesomeIcon icon={faCross} className="death-icon-right" />
//         </div>

//         <p className="rip">
//           "{hamster.name} who has gone, so we but cherish your memory,
//           abides with us, more potent, nay, more present than the living
//           hamster."
//         </p>
//         <p className="rip2">r.i.p. {hamster.name}</p>
//       </div>
//     )}
//     <div className="hamster-img-container">
//       <img
//         draggable="false"
//         style={{ opacity: revOpacity }}
//         className="hamster-img"
//         src={fixImg(hamster.imgName)}
//         alt="hamster image"
//       />
//     </div>
//     <div
//       className="hamster-info"
//       style={{ opacity: opacity, display: dead }}
//     >
//       <div>
//         <b>Namn:</b> {hamster.name}
//       </div>
//       <div>
//         <b>Ålder:</b> {hamster.age} år
//       </div>
//       <div>
//         <b>Matcher:</b> {hamster.games}
//       </div>
//       <div>
//         <b>Vinster:</b> {hamster.wins}
//       </div>
//       <div>
//         <b>Förluster:</b> {hamster.defeats}
//       </div>
//       <div>
//         <b>Älskar att:</b> {hamster.loves}
//       </div>
//       <div>
//         <b>Favoritmat:</b> {hamster.favFood}
//       </div>
//       <div>
//         <button
//           style={{ display: alive }}
//           className="hamster-delete--button"
//           onClick={() => {
//             deleteHamster();
//             setDead(!isDead);
//           }}
//         >
//           delete hamster
//         </button>
//       </div>
//     </div>
//     <div className="msg-name">{hamster.name}</div>
//     <div className="msg">{hamster.loves}</div>
//     <div className="hamster-name-and-button">
//       <div style={{ display: dead }} className="hamster-name">
//         {hamster.name}
//       </div>

//       <button
//         style={{ display: dead }}
//         className="hamster-grid--button"
//         onClick={() => {
//           setOpacity(!isOpacity);
//           setAlive(!isAlive);
//         }}
//       >
//         {isOpacity ? "mer info" : "tillbaka"}
//       </button>
//     </div>
//   </div>
// </div>
//   );
// };

export default HamsterItem;
