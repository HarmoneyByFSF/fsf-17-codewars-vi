import React, { useState, useRef, useEffect } from "react";
import "../../style/SavingModal.css";
import successSound from "../../music/treasure.mp3";
import link from "../../img/link_02.png";

const SavingModal = ({ visible, setVisible, isSavingNew, setIsSavingNew }) => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("Saving"));
  //   if (items) {
  //     setItems(items);
  //   }
  // }, []);

  // console.log(items);

  const audio = new Audio(successSound);
  audio.loop = false;

  function saveDataToLocalStorage() {
    const existingData = JSON.parse(localStorage.getItem("Saving"));
    const data = {
      Title: title,
      date: date,
      amount: amount,
    };
    console.log(Array.isArray(existingData));
    if (Array.isArray(existingData)) {
      existingData.push(data);

      localStorage.setItem("Saving", JSON.stringify(existingData));
    } else {
      localStorage.setItem("Saving", JSON.stringify([data]));
    }

    setIsSavingNew(isSavingNew + 1);

    setOpenSuccess(false);
  }

  return (
    <div>
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <h3 class="popup-title2" style={{ color: "#484848" }}>
            Date:
          </h3>
          <input
            class="expense-textfield"
            type="text"
            id="Quantity"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <h3 class="popup-title2" style={{ color: "#484848" }}>
            Amount:
          </h3>
          <input
            class="expense-textfield"
            type="text"
            id="Quantity"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <h3 class="popup-title2" style={{ color: "#484848" }}>
            Upload image
            <img src={link} />
          </h3>

          <div class="button-container">
            <button
              class="buttonContinue"
              onClick={() => {
                saveDataToLocalStorage();
                audio.loop = false;
                audio.play();
              }}
            >
              <h5 style={{ color: "white" }}>Add savings</h5>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingModal;
