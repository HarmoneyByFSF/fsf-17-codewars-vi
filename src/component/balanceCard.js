import React from "react";
import balanceCardBackground from "../img/balanceCard.png";
import editBtn from "../img/edit.png";
import "../style/balanceCard.css";

const BalanceCard = () => {
  const balance = "34,505.00";
  const income = "25,550.00";
  const expense = "8,545.00";
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
        <p id="bottomLeft">{`Rs ${income}`}</p>
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
        <p id="bottomRight">{`Rs ${expense}`}</p>
      </div>
      <div class="centered">
        <p id="centered">{`Rs ${balance}`}</p>
      </div>
    </div>
  );
};

export default BalanceCard;
