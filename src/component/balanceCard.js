import React from "react";
import balanceCardBackground from "../img/balanceCard.png";
import editBtn from "../img/edit.png";
import "../style/balanceCard.css";

const BalanceCard = () => {
  //   var textValues = ["Rs 34,505.79", "Rs 8,575.00", "Rs 25,000.00"];

  //   var textElements = [
  //     document.getElementById("centered"),
  //     document.getElementById("bottomRight"),
  //     document.getElementById("bottomLeft"),
  //   ];

  //   for (var i = 0; i < textElements.length; i++) {
  //     textElements[i].innerHTML = textValues[i];
  //   }

  return (
    <div id="cardContainer" class="position-relative animated zoomIn">
      <img class="img-fluid" src={balanceCardBackground} alt="" />
      <div class="bottom-left">
        <p id="incomeLabel">Income</p>
        <p id="bottomLeft">{3497364}</p>
      </div>
      <div class="center-bottom"></div>
      <div class="top-left">
        <p id="topLeft">Balance</p>
      </div>
      <div class="image-top-right">
        <img src={editBtn} alt="Edit" />
      </div>
      <div class="bottom-right">
        <p id="expenseLabel">Expenses</p>
        <p id="bottomRight">{3497364}</p>
      </div>
      <div class="centered">
        <p id="centered">{3497364}</p>
      </div>
    </div>
  );
};

export default BalanceCard;
