import React, { useState, useRef, useEffect } from "react";
import "../../style/ExpenseModal.css";
import successSound from "../../music/treasure.mp3";

const ExpenseModal = ({
  visible,
  setVisible,
  isExpenseNew,
  setIsExpenseNew,
}) => {
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
    console.log(Array.isArray(existingData));
    if (Array.isArray(existingData)) {
      existingData.push(data);

      localStorage.setItem("Expenses", JSON.stringify(existingData));
    } else {
      localStorage.setItem("Expenses", JSON.stringify([data]));
    }

    setOpenSuccess(false);
    setIsExpenseNew(isExpenseNew + 1);

    // localStorage.setItem("Expenses", JSON.stringify([]));
  }

  function retrieveAllDataFromLocalStorage() {
    const existingData = JSON.parse(localStorage.getItem("Expenses"));

    console.log(Array.isArray(existingData));
  }

  return (
    <div>
      <div
        id="popup-container-expense-details"
        class="popup-container-expense-details"
        style={{ display: visible ? "flex" : "none" }}
      >
        <div class="popup-content-expense-details">
          <div class="close-button-expense-details" onClick={() => setVisible(false)}>
            &#x2716;
          </div>
          <h2 class="popup-title-expense-details" style={{ color: "#484848" }}>
            Add Expenses
          </h2>

          <label class="popup-subtitle-expense-details" style={{ paddingBottom: "-20px" }}>
            Title
          </label>
          <br />
          <input
            class="expense-textfield-expense-details"
            type=""
            id="text1"
            value={title}
            placeholder="Enter bill title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />

          <label class="popup-subtitle-expense-details">Description</label>
          <br />
          <input
            class="expense-textfield-expense-details"
            type="text"
            id="text2"
            value={description}
            placeholder="Enter bill description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />

          <label class="popup-subtitle-expense-details">Amount</label>
          <br />
          <input
            class="expense-textfield-expense-details"
            type="text"
            id="text3"
            value={amount}
            placeholder="Enter bill amount"
            onChange={(e) => setAmount(e.target.value)}
          />
          <br />

          <button
            class="buttonContinue-expense-details"
            onClick={() => {
              saveDataToLocalStorage();
              retrieveAllDataFromLocalStorage();
              setVisible(false);
              audio.loop = false;
              audio.play();
            }}
          >
            Add Expense
          </button>

          {/* <script type="text/javascript">
                
            </script> */}
        </div>
      </div>
    </div>
  );
};

export default ExpenseModal;
