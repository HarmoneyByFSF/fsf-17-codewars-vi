import React, { useState, useRef, useEffect } from "react";
import "../../style/SavingModal.css";
import successSound from "../../music/treasure.mp3";
import link from "../../img/link_02.png";

const SavingModal = ({ visible, setVisible }) => {
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

          <h3 class="popup-title" style={{ color: "#484848" }}>
            Add Saving Goal
          </h3>
          <h3 class="popup-title2" style={{ color: "#484848" }}>
            Title:
          </h3>
          <input
            class="expense-textfield"
            type="text"
            id="Quantity"
            placeholder="Title"
          />
          <h3 class="popup-title2" style={{ color: "#484848" }}>
            Date:
          </h3>
          <input
            class="expense-textfield"
            type="text"
            id="Quantity"
            placeholder="Date"
          />
          <h3 class="popup-title2" style={{ color: "#484848" }}>
            Amount:
          </h3>
          <input
            class="expense-textfield"
            type="text"
            id="Quantity"
            placeholder="Amount"
          />
          <h3 class="popup-title2" style={{ color: "#484848" }}>
            Upload image
            <img src={link} />
          </h3>

          <div class="button-container">
            <button class="buttonContinue">
              <h5 style={{ color: "white" }}>Add savings</h5>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingModal;
