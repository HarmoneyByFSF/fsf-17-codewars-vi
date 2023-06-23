import React from "react";
import balanceCardBackground from "../img/balanceCard.png";
import editBtn from "../img/edit.png";
import "../style/investmentpage.css";

const BalanceCard = () => {
  function formatNumberWithCommas(number) {
    // Convert the number to a string
    const numberString = number.toString();

    // Split the string into two parts: integer and decimal
    const [integerPart, decimalPart = ""] = numberString.split(".");

    // Split the integer part into an array of characters
    const integerCharacters = integerPart.split("");

    // Create a new array to store the formatted characters
    const formattedCharacters = [];

    // Iterate over the integer characters in reverse order
    for (let i = integerCharacters.length - 1; i >= 0; i--) {
      // Add the current character to the formatted array
      formattedCharacters.unshift(integerCharacters[i]);

      // Add a comma after every third character (except the first)
      if ((integerCharacters.length - i) % 3 === 0 && i !== 0) {
        formattedCharacters.unshift(",");
      }
    }

    // Join the formatted characters into a string
    let formattedNumber = formattedCharacters.join("");

    // Add the decimal part, if present
    if (decimalPart !== "") {
      formattedNumber += `.${decimalPart}`;
    }

    // Return the formatted number
    return formattedNumber;
  }

  const balance = formatNumberWithCommas("34505.00");
  const income = formatNumberWithCommas("25550.00");
  const expense = formatNumberWithCommas("8545.00");

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
