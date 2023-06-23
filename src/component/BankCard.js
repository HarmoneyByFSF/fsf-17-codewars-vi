import React from "react";
import "../style/bankCard.css";
import visa from "../img/visa_card.png";
import edit from "../img/edit_card.png";
const BankCard = () => {
  return (
  
  <div class="overall">
    
    <div class="first-row">
      <div class="first-column">
        <div class="title-details">
      <p id="cardDetails">Card Details</p>
          <p id="expiryDate">Expiry Date: 24 April 2022</p>
          <p id="limit">Card Limit: Rs 10,000</p>
          </div>

          <div class="edit-card">
          <img class="img-fluid" src={edit} alt=""/>
          </div>
      </div>

      <div class="second-column">
     
      <div id="cardContainer" class="position-relative">
        
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
      <p id="transaction">Transaction</p>
      <div class="transactions"> 
      <div class="transactions-container">
        <div class="transactions-details">
        <p id="transaction-title" style={{ color :"#939393"}}>Grocery</p>
        <p id="transaction-amount" style={{color:"Red"}}>Rs -1000</p>
        </div>
      </div>
      <div class="transactions-container">
        <div class="transactions-details">
          <p id="transaction-title" style={{ color :"#939393"}}>Grocery</p>
          <p id="transaction-amount" style={{color:"Red"}}>Rs -1000</p>
        </div>
      </div>
      <div class="transactions-container">
        <div class="transactions-details">
        <p id="transaction-title" style={{ color :"#939393"}}>Grocery</p>
        <p id="transaction-amount" style={{color:"Red"}}>Rs -1000</p>
        </div>
      </div>
      <div class="transactions-container">
        <div class="transactions-details">
        <p id="transaction-title" style={{ color :"#939393"}}>Grocery</p>
          <p id="transaction-amount" style={{color:"Red"}}>Rs -1000</p>
        </div>
      </div>
      <div class="transactions-container">
        <div class="transactions-details">
        <p id="transaction-title" style={{ color :"#939393"}}>Grocery</p>
        <p id="transaction-amount" style={{color:"Red"}}>Rs -1000</p>
        </div>
      </div>
       <div class="button-container">
       <div></div>
           <div class="add-button">
              <span class="plus-sign">+</span>
           </div>
          
     </div>
     


      </div>
    </div>

  </div>
  
  );
};

export default BankCard;
