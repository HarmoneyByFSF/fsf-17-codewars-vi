import React from "react";
import balanceCardBackground from "../img/balanceCard.png";
import editBtn from "../img/edit.png";
import alteoIcon from "../img/Alteo.png";
import enlIcon from "../img/enl.png";
import cimIcon from "../img/cim.png";
import swanIcon from "../img/swan.png";
import moroilIcon from "../img/moroil.png";
import terraIcon from "../img/terra.png";
import mcbIcon from "../img/mcb.png";
import rogersIcon from "../img/rogers.png";
import lockIcon from "../img/Lock_icon.png";
import "../style/balanceCard.css";

const Investment = ({ setVisible }) => {
  return (
    <div className="scrollable-container">
      <div style={{ width: "70%" }}>
        <div id="cardContainer" class="position-relative animated zoomIn">
          <img class="img-fluid" src={balanceCardBackground} alt="" />
          <div class="bottom-left">
            <p id="incomeLabel">Spent</p>
            <p id="bottomLeft">Rs {18000}.00</p>
          </div>
          <div class="center-bottom"></div>
          <div class="top-left">
            <p id="topLeft">Free Fund</p>
          </div>
          <div class="bottom-right">
            <p id="expenseLabel">Portfolio</p>
            <p id="bottomRight">Rs {8575}.00</p>
          </div>
          <div class="centered">
            <p id="centered">Rs {32000}</p>
          </div> 
        </div>
      </div>

      <div style={{ paddingTop: "15px" }}>
        <p style={{ color: "#2F2F2F", fontSize: "20px", fontWeight: "600" }}>
          Open Market
        </p>
      </div>

      <div class="container-stock">
        <div class="stock-container">
          <div class="stock-row">
            <img class="stock-image" src={alteoIcon} alt="" />
            <div class="stock-price">Rs 8.20</div>
          </div>
        </div>
      </div>

      <div class="container-stock">
        <div class="stock-container">
          <div class="stock-row">
            <img class="stock-image" src={moroilIcon} alt="" />
            <div class="stock-price">Rs 17.75</div>
          </div>
        </div>
      </div>

      <div class="container-stock">
        <div class="stock-container">
          <div class="stock-row">
            <img class="stock-image" src={terraIcon} alt="" />
            <div class="stock-price">Rs 22.00</div>
          </div>
        </div>
      </div>

      <div class="container-stock">
        <div class="stock-container">
          <div
            class="stock-row"
            onClick={() => {
              setVisible(true);
            }}
          >
            <img class="stock-image" src={rogersIcon} alt="" />
            <div class="stock-price">Rs 29.75</div>
          </div>
        </div>
      </div>

      <div class="container-stock">
        <div class="stock-lock-container locked">
          <div class="overlay"></div>
          <div class="lock-content">
            <img class="lock-image" src={lockIcon} alt="" />
          </div>
          <div class="stock-container">
            <div class="stock-row">
              <img class="stock-image" src={enlIcon} alt="" />
              <div class="stock-price">Rs 19.50</div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-stock">
        <div class="stock-lock-container locked">
          <div class="overlay"></div>
          <div class="lock-content">
            <img class="lock-image" src={lockIcon} alt="" />
          </div>
          <div class="stock-container">
            <div class="stock-row">
              <img class="stock-image" src={mcbIcon} alt="" />
              <div class="stock-price">Rs 315.45</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investment;
