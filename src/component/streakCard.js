import React from "react";
import "../style/streakCard.css";
import coin from "../img/dollar_coin.png";
import tick from "../img/tick.png";
import streak_person from "../img/streak_person.png";
import streakBack from "../img/streakBack.png";
import Redeem from "./Modal/Redeem";

const StreakCard = () => {
  return (
    <div id="cardContainer" class="position-relative animated zoomIn">
      <img class="img-fluid" src={streakBack} alt="" />
      <div class="top-left-coin">
        <div class="streak-text">
          <img src={coin} class="dollar-coin" alt="" />
          <div class="text">
            <p>3 day streak</p>
            <p>Way to go!</p>
          </div>
        </div>
        <Redeem />
        {/* <div class="button">Redeem</div> */}
        <div class="column-configuration">
          <div clas="streak-days">
            <p>T</p>
            <img src={tick} alt="Tick" />
          </div>
          <div clas="streak-days">
            <p>F</p>
            <img src={tick} alt="Tick" />
          </div>
          <div clas="streak-days">
            <p>ST</p>
            <img src={tick} alt="Tick" />
          </div>
        </div>
      </div>
      <div class="picture">
        <img src={streak_person} alt="Tick" />
      </div>
    </div>
  );
};

export default StreakCard;
