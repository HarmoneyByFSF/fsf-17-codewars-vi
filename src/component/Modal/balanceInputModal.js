import React, { useState, useRef, useEffect } from "react";
import "../../style/InputModal.css";
import successSound from "../../music/treasure.mp3";
import editBtn from "../../img/edit.png";

const BalanceInputModal = ({ setCount, count }) => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [balance, setBalance] = useState("");
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");

  const [items, setItems] = useState([]);

  //   useEffect(() => {
  //     const items = JSON.parse(localStorage.getItem("items"));
  //     if (items) {
  //       setItems(items);
  //     }
  //   }, []);

  console.log(items);

  const audio = new Audio(successSound);
  audio.loop = false;

  function saveDataToLocalStorage() {
    const existingData = JSON.parse(localStorage.getItem("Balance"));

    // console.log(Array.isArray(existingData));

    const data = {
      balance: balance,
      income: income !== "" ? income : existingData.income,
      expense: expense !== "" ? expense : existingData.expense,
    };
    // existingData.push(data);

    localStorage.setItem("Balance", JSON.stringify(data));
    setOpenSuccess(false);
    setCount(count + 1);
  }

  function retrieveAllDataFromLocalStorage() {
    const existingData = JSON.parse(localStorage.getItem("Balance"));

    console.log(Array.isArray(existingData));
  }

  return (
    <div>
      {/* <button >Show Pop-up</button> */}
      <img src={editBtn} alt="Edit" onClick={() => setOpenSuccess(true)} />

      <div
        id="popup-container"
        class="popup-container"
        style={{ display: openSuccess ? "flex" : "none" }}
      >
        <div class="popup-content">
          <div class="close-button" onClick={() => setOpenSuccess(false)}>
            &#x2716;
          </div>
          <h2 class="popup-title" style={{ color: "#484848" }}>
            Edit Balance
          </h2>

          <label class="popup-subtitle">Balance</label>
          <br />
          <input
            class="expense-textfield"
            type=""
            id="text1"
            value={balance}
            placeholder="Balance amount"
            onChange={(e) => setBalance(e.target.value)}
          />
          <br />

          <label class="popup-subtitle">Income</label>
          <br />
          <input
            class="expense-textfield"
            type="text"
            id="text2"
            value={income}
            placeholder="Monthly income"
            onChange={(e) => setIncome(e.target.value)}
          />
          <br />

          <label class="popup-subtitle">Expense</label>
          <br />
          <input
            class="expense-textfield"
            type="text"
            id="text3"
            value={expense}
            placeholder="Monthly expense"
            onChange={(e) => setExpense(e.target.value)}
          />
          <br />

          <button
            class="buttonContinue"
            onClick={() => {
              saveDataToLocalStorage();
              retrieveAllDataFromLocalStorage();
              audio.loop = false;
              audio.play();
            }}
          >
            Save
          </button>

          {/* <script type="text/javascript">
                    
                </script> */}
        </div>
      </div>
    </div>
  );
};

export default BalanceInputModal;
