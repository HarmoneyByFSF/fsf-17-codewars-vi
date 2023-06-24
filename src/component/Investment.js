import React from "react";
import balanceCardBackground from "../img/free_fund_card.png";
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
    <div className="scrollable-container-investment-page">
      <div
        id="cardContainer-investment-page"
        class="position-relative animated zoomIn"
      >
        <img
          class="img-fluid-investment-page"
          src={balanceCardBackground}
          alt=""
          style={{ width: "100%" }}
        />
        <div class="bottom-left-investment-page">
          <p id="incomeLabel">Income</p>
          <p id="bottomLeft">Rs 3455</p>
        </div>
        <div className="center-bottom-investment-page"></div>
        <div className="top-left-investment-page">
          <p id="topLeft-investment-page">Free fund</p>
        </div>
        <div className="bottom-right-investment-page">
          <p id="expenseLabel">Expenses</p>
          <p id="bottomRight">Rs 4500</p>
        </div>
        <div className="centered-investment-page">
          <p id="centered" style={{ color: "white" }}>
            Rs 50000
          </p>
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
