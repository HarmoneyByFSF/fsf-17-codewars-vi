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
import "../style/investmentpage.css";


const Investment = ({ setVisible }) => {
  return (
    <div className="scrollable-container-investment-page">

      <div id="cardContainer-investment-page" class="position-relative animated zoomIn" >
        <img class="img-fluid-investment-page" src={balanceCardBackground} alt="" style={{width : "100%"}}/>
        <div class="bottom-left-investment-page">
          <p id="incomeLabel">Income</p>
          <p id="bottomLeft">Rs 3455</p>
        </div>
        <div class="center-bottom-investment-page"></div>
        <div class="top-left-investment-page">
          <p id="topLeft-investment-page">Balance</p>
        </div>
        <div class="bottom-right-investment-page">
          <p id="expenseLabel">Expenses</p>
          <p id="bottomRight">Rs 4500</p>
        </div>
        <div class="centered-investment-page">
          <p id="centered" style={{ color: "white" }}>Rs 50000</p>
        </div>
      </div>


      <div style={{ paddingTop: "15px" }}>
        <p style={{ color: "#2F2F2F", fontSize: "20px", fontWeight: "600" }}>
          Open Market
        </p>
      </div>

      <div class="container-stock-investment-page">
        <div class="stock-container-investment-page">
          <div class="stock-row-investment-page">
            <img class="stock-image-investment-page" src={alteoIcon} alt="" />
            <div class="stock-price-investment-page">Rs 8.20</div>
          </div>
        </div>
      </div>

      <div class="container-stock-investment-page">
        <div class="stock-container-investment-page">
          <div class="stock-row-investment-page">
            <img class="stock-image-investment-page" src={moroilIcon} alt="" />
            <div class="stock-price-investment-page">Rs 17.75</div>
          </div>
        </div>
      </div>

      <div class="container-stock-investment-page">
        <div class="stock-container-investment-page">
          <div class="stock-row-investment-page">
            <img class="stock-image-investment-page" src={terraIcon} alt="" />
            <div class="stock-price-investment-page">Rs 22.00</div>
          </div>
        </div>
      </div>

      <div class="container-stock-investment-page">
        <div class="stock-container-investment-page">
          <div
            class="stock-row-investment-page"
            onClick={() => {
              setVisible(true);
            }}
          >
            <img class="stock-image-investment-page" src={rogersIcon} alt="" />
            <div class="stock-price-investment-page">Rs 29.75</div>
          </div>
        </div>
      </div>

      <div class="container-stock-investment-page">
        <div class="stock-lock-container-investment-page locked">
          <div class="overlay-investment-page"></div>
          <div class="lock-content-investment-page">
            <img class="lock-image-investment-page" src={lockIcon} alt="" />
          </div>
          <div class="stock-container-investment-page">
            <div class="stock-row-investment-page">
              <img class="stock-image-investment-page" src={enlIcon} alt="" />
              <div class="stock-price-investment-page">Rs 19.50</div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-stock-investment-page">
        <div class="stock-lock-container-investment-page locked">
          <div class="overlay-investment-page"></div>
          <div class="lock-content-investment-page">
            <img class="lock-image-investment-page" src={lockIcon} alt="" />
          </div>
          <div class="stock-container-investment-page">
            <div class="stock-row-investment-page">
              <img class="stock-image-investment-page" src={mcbIcon} alt="" />
              <div class="stock-price-investment-page">Rs 315.45</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investment;
