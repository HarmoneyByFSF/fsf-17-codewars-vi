import React from "react";
import "../style/expenseCard.css";
import cwa from "../img/cwa.png";
import ceb from "../img/CEB.png";
import due from "../img/due.png";
import paid from "../img/paid.png";
const Expense = () => {
  return (

<div className="scrollable-container">
  <div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <div className="expense-container" style={{boxShadow: "0px 8px 25px rgba(208, 210, 218, 0.9)"}}>
          <div className="expense-row">
            <div className="expense-title">
              Water Bill
            </div>
            <img className="expense-image" src={cwa} alt="Expense Image"/>
          </div>
          <div className="expense-row">
            <div className="expense-description">
              To pay water bill for June.
            </div>
          </div>
          <div className="expense-row">
            <div className="expense-due-date">
              Due Date: 2 July 2023
            </div>
          </div>
          <div className="expense-row">
            <div className="expense-alarm">
              Alarm: 1 July 2023
            </div>
          </div>
          <div className="expense-row1">
            <img className="notification-icon" src={paid} alt="Notification Icon"/>
            <div className="expense-price">
              Rs 450.00
            </div>
          </div>
        </div>

        <p></p>

        <div className="expense-container" style={{boxShadow: "0px 8px 25px rgba(208, 210, 218, 0.9)"}}>
          <div className="expense-row">
            <div className="expense-title">
              Electricity Bill
            </div>
            <img className="expense-image" src={ceb} alt="Expense Image"/>
          </div>
          <div className="expense-row">
            <div className="expense-description">
              To pay electricity bill for June.
            </div>
          </div>
          <div className="expense-row">
            <div className="expense-due-date">
              Due Date: 2 July 2023
            </div>
          </div>
          <div className="expense-row">
            <div className="expense-alarm">
              Alarm: 1 July 2023
            </div>
          </div>
          <div className="expense-row1">
            <img className="notification-icon" src={due} alt="Notification Icon"/>
            <div className="expense-price">
              Rs 750.00
            </div>
          </div>
        </div>
      </div>

      <p></p>

      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <div className="expense-container" style={{boxShadow: "0px 8px 25px rgba(208, 210, 218, 0.9)"}}>
          <div className="expense-row">
            <div className="expense-title">
              Water Bill
            </div>
            <img className="expense-image" src={cwa} alt="Expense Image"/>
          </div>
          <div className="expense-row">
            <div className="expense-description">
              To pay water bill for June.
            </div>
          </div>
          <div className="expense-row">
            <div className="expense-due-date">
              Due Date: 2 July 2023
            </div>
          </div>
          <div className="expense-row">
            <div className="expense-alarm">
              Alarm: 1 July 2023
            </div>
          </div>
          <div className="expense-row1">
            <img className="notification-icon" src={paid} alt="Notification Icon"/>
            <div className="expense-price">
              Rs 450.00
            </div>
          </div>
        </div>

        <p></p>

        <div className="expense-container" style={{boxShadow: "0px 8px 25px rgba(208, 210, 218, 0.9)"}}>
          <div className="expense-row">
            <div className="expense-title">
              Electricity Bill
            </div>
            <img className="expense-image" src={ceb} alt="Expense Image"/>
          </div>
          <div className="expense-row">
            <div className="expense-description">
              To pay electricity bill for June.
            </div>
          </div>
          <div className="expense-row">
            <div className="expense-due-date">
              Due Date: 2 July 2023
            </div>
          </div>
          <div className="expense-row">
            <div className="expense-alarm">
              Alarm: 1 July 2023
            </div>
          </div>
          <div className="expense-row1">
            <img className="notification-icon" src={due} alt="Notification Icon"/>
            <div className="expense-price">
              Rs 750.00
            </div>
          </div>
        </div>
      </div>
      </div>

      <div>
        
      </div>
    </div>

  );
  
  
};

export default Expense;
