import React, { useState, useRef, useEffect } from "react";
import successSound from "../music/treasure.mp3";
import target from "../img/target.png";
import coin from "../img/dollar_coin.png";
import Confetti from "react-confetti";

const SuccessModal = () => {
  const [openSuccess, setOpenSuccess] = useState(false);

  const audio = new Audio(successSound);
  audio.loop = false;
  const { width, height } = 2030;

  return (
    <div>
      <button
        onClick={() => {
          audio.loop = false;
          audio.play();
          setOpenSuccess(true);
        }}
      >
        Show Pop-up
      </button>

      <div
        id="popup-container"
        class="popup-container"
        style={{ display: openSuccess ? "flex" : "none" }}
      >
        <Confetti width={width} height={height} />

        <div class="popup-content">
          <div class="close-button" onClick={() => setOpenSuccess(false)}>
            &#x2716;
          </div>
          <h2 class="popup-title" style={{ color: "#484848" }}>
            Course Completed
          </h2>

          <img class="popup-image" src={target} />
          <p class="popup-subtitle" style={{ color: "#9D9D9D" }}>
            You completed the basic of Insurance
          </p>

          <div class="popup-price">
            <img class="dollar-image" src={coin} />
            <p style={{ margin: 0 }}>15 Tokens</p>
          </div>

          <button
            class="buttonContinue"
            onClick={() => {
              setOpenSuccess(false);
            }}
          >
            Continue
          </button>

          <script type="text/javascript"></script>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
