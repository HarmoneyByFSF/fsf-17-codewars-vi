import React, { useState, useRef, useEffect } from "react";
import "../../style/BuyStock.css";
import successSound from "../../music/treasure.mp3";
import rogers from "../../img/rogers.png";

const BuyStock = ({ visible, setVisible }) => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  console.log(items);

  const audio = new Audio(successSound);
  audio.loop = false;

  function saveDataToLocalStorage() {
    const existingData = JSON.parse(localStorage.getItem("Expenses"));

    console.log(Array.isArray(existingData));

    const data = {
      Title: title,
      description: description,
      amount: amount,
    };
    existingData.push(data);

    localStorage.setItem("Expenses", JSON.stringify(existingData));
    setOpenSuccess(false);
  }

  function retrieveAllDataFromLocalStorage() {
    const existingData = JSON.parse(localStorage.getItem("Expenses"));

    console.log(Array.isArray(existingData));
  }

  return (
    <div>
      {/* <button onClick={() => setOpenSuccess(true)}>Show Pop-up</button> */}
      {/* <button class="circle-button" onClick={() => setOpenSuccess(true)}>
        <i class="fas fa-plus"></i>
      </button> */}
      <div
        id="popup-containerM"
        class="popup-containerM"
        style={{ display: visible ? "flex" : "none" }}
      >
        <div class="popup-content">
          <div class="close-button" onClick={() => setVisible(false)}>
            &#x2716;
          </div>

          <img src={rogers} />

          <h3 class="popup-title" style={{ color: "#484848" }}>
            Rs29.75
          </h3>
          <h3 class="popup-title1" style={{ color: "#484848" }}>
            Buy: Rs29.75
          </h3>
          <h3 class="popup-title1" style={{ color: "#484848" }}>
            Sell: Rs25.45
          </h3>
          <h3 class="popup-title1" style={{ color: "#484848" }}>
            Previous Price: Rs28.00
          </h3>
          <h3 class="popup-title" style={{ color: "#484848" }}>
            Quantity :{" "}
          </h3>
          <input
            class="expense-textfield"
            type="text"
            id="Quantity"
            placeholder="quantity"
          />
          <br />

          <div class="button-container">
            <button class="buttonContinue">Buy</button>
            <button class="buttonContinue">Sell</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyStock;
