import React, { useState, useRef, useEffect } from "react";
import "../../style/InputModal.css";
import successSound from "../../music/treasure.mp3";
import cashingSound from "../../music/Cashing.mp3";
import "../../style/redeem.css";
import editBtn from "../../img/edit.png";
import coin from "../../img/redeem_coins.png";
import Confetti from "react-confetti";

const Redeem = () => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const [items, setItems] = useState([]);
  const [showCode, setShowCode] = useState(false);
  const [showCode1, setShowCode1] = useState(false);
  const [showCode2, setShowCode2] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);

  console.log(items);

  const audio = new Audio(successSound);
  audio.loop = false;

  const cashingAudio = new Audio(cashingSound);
  cashingAudio.loop = false;

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
  const { width, height } = 2030;
  return (
    <div>
      {/* <button >Show Pop-up</button> */}
      {/* <img src={editBtn} alt="Edit" onClick={() => setOpenSuccess(true)} /> */}
      <div
        class="button"
        onClick={() => {
          audio.loop = false;
          audio.play();
          setOpenSuccess(true);
        }}
      >
        Redeem
      </div>

      <div
        id="popup-container"
        class="popup-container"
        style={{ display: openSuccess ? "flex" : "none" }}
      >
        {showCode || showCode1 || showCode2 ? (
          <Confetti width={width} height={height} />
        ) : (
          ""
        )}

        <div class="popup-content">
          <div class="close-button" onClick={() => setOpenSuccess(false)}>
            &#x2716;
          </div>
          <h2 class="popup-title" style={{ color: "#484848" }}>
            Redeem Coins
          </h2>
          <div class="redeem-content">
            <div class="stock-container">
              <div class="content">
                <div class="stock-details">
                  <div class="coins-amount-container">
                    <img
                      src={coin}
                      class="dollar-coin"
                      alt=""
                      style={{ width: "35px", height: "35px" }}
                    />
                    <div class="coins-amount">
                      <p>{showCode ? "Code: 58RRRR" : "34 coins"}</p>
                    </div>
                  </div>

                  <div class="stock-name">
                    <p>Allsport shoes</p>
                  </div>
                </div>
                {showCode === false ? (
                  <div class="buy-button">
                    <p
                      onClick={() => {
                        setShowCode(true);
                        cashingAudio.loop = false;
                        cashingAudio.play();
                        setOpenSuccess(true);
                      }}
                    >
                      Use
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div class="stock-container">
              <div class="content">
                <div class="stock-details">
                  <div class="coins-amount-container">
                    <img
                      src={coin}
                      class="dollar-coin"
                      alt=""
                      style={{ width: "35px", height: "35px" }}
                    />
                    <div class="coins-amount">
                      <p>{showCode1 ? "Code: cd2" : "15 coins"}</p>
                    </div>
                  </div>

                  <div class="stock-name">
                    <p>Magasin 58 rrr</p>
                  </div>
                </div>

                <div class="buy-button">
                  <p
                    onClick={() => {
                      setShowCode1(true);
                      cashingAudio.loop = false;
                      cashingAudio.play();
                      setOpenSuccess(true);
                    }}
                  >
                    Use
                  </p>
                </div>
              </div>
            </div>
            <div class="stock-container">
              <div class="content">
                <div class="stock-details">
                  <div class="coins-amount-container">
                    <img
                      src={coin}
                      class="dollar-coin"
                      alt=""
                      style={{ width: "35px", height: "35px" }}
                    />
                    <div class="coins-amount">
                      <p>{showCode2 ? "Code: cd3" : "45 coins"}</p>
                    </div>
                  </div>

                  <div class="stock-name">
                    <p>CitySport shoes</p>
                  </div>
                </div>

                <div class="buy-button">
                  <p
                    onClick={() => {
                      setShowCode2(true);
                      cashingAudio.loop = false;
                      cashingAudio.play();
                      setOpenSuccess(true);
                    }}
                  >
                    Use
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redeem;
