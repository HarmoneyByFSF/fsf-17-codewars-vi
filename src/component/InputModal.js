import React, { useState, useRef } from "react";
import "../style/InputModal.css";
import successSound from "../music/treasure.mp3";

const InputModal = () => {
  const [openSuccess, setOpenSuccess] = useState(false);

  const audio = new Audio(successSound);
  audio.loop = false;

  //   function showPopup() {
  //     var popup = document.getElementById("popup-container");
  //     popup.style.display = "flex";
  //   }

  //   function hidePopup() {
  //     var popup = document.getElementById("popup-container");
  //     popup.style.display = "none";
  //   }

  //   const audio = new Audio();
  //   audio.src = "";
  // const button = document.querySelector(".buttonContinue");

  //   button.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     button.classList.add("animate");
  //     setTimeout(() => {
  //       button.classList.remove("animate");
  //     }, 600);
  //   });

  return (
    <div>
      <button onClick={() => setOpenSuccess(true)}>Show Pop-up</button>

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
            Add Expenses
          </h2>

          <label class="popup-subtitle">Title</label>
          <br />
          <input
            class="expense-textfield"
            type=""
            id="text1"
            placeholder="Enter bill title"
          />
          <br />

          <label class="popup-subtitle">Description</label>
          <br />
          <input
            class="expense-textfield"
            type="text"
            id="text2"
            placeholder="Enter bill description"
          />
          <br />

          <label class="popup-subtitle">Amount</label>
          <br />
          <input
            class="expense-textfield"
            type="text"
            id="text3"
            placeholder="Enter bill amount"
          />
          <br />

          <button
            class="buttonContinue"
            onClick={() => {
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

export default InputModal;
