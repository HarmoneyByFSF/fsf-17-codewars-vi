import React from "react";
import "../style/bankCard.css";
import visa from "../img/visa_card.png";
const BankCard = () => {
  return (
  
  <div class="overall">
    
    <div class="first-row">
      <div class="first-column"></div>
      <div class="second-column">

      <div  class=" animated zoomIn">
        <img class="img-fluid" src={visa} alt=""/>
        <div class="bottom-left-visa">
          <p id="cardNumber">CARD NUMBER</p>
          <p id="lockedCardNumber">2352385</p>
          <p id="validity">VALID THRU</p>
          <p id="date">date</p>
          
        </div>
     
       
        <div class="top-right-visa">
            <p id="topRightVisa">Rs 1234</p>
        </div>
       
      </div>
      </div>
      <div class="third-column"></div>
    </div>
    <div class="second-row">

    </div>

  </div>
  
  );
};

export default BankCard;
