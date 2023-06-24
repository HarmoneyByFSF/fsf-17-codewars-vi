import React, { useState, useRef, useEffect } from "react";
import "../style/expenseCard.css";
import cwa from "../img/cwa.png";
import ceb from "../img/CEB.png";
import due from "../img/due.png";
import paid from "../img/paid.png";
import ExpenseModal from "./Modal/ExpenseModal";
const Expense = ({ setVisible }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("Expenses"));
    if (items) {
      setItems(items);
    }
    console.log(items);
  }, []);

  return (
    <div className="scrollable-container">
      <div>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          {items?.map((expenses, index) => (
            <div
              className="expense-container"
              style={{ boxShadow: "0px 8px 25px rgba(208, 210, 218, 0.9)" }}
            >
              <div className="expense-row">
                <div className="expense-title">{expenses.Title}</div>
                {/* <img className="expense-image" src={cwa} alt="Expense Image" /> */}
              </div>
              <div className="expense-row">
                <div className="expense-description">
                  {expenses.description}
                </div>
              </div>
              <div className="expense-row">
                <div className="expense-due-date">Due Date: 2 July 2023</div>
              </div>
              {/* <div className="expense-row">
              <div className="expense-alarm">Alarm: 1 July 2023</div>
            </div> */}
              {/* <div className="expense-row1">
                <img
                  className="notification-icon"
                  src={paid}
                  alt="Notification Icon"
                />
                <div className="expense-price"> {expenses.amount}</div>
              </div> */}
            </div>
            //  <p></p>
          ))}

          {/* <div
            className="expense-container"
            style={{ boxShadow: "0px 8px 25px rgba(208, 210, 218, 0.9)" }}
          >
            <div className="expense-row">
              <div className="expense-title">Electricity Bill</div>
              <img className="expense-image" src={ceb} alt="Expense Image" />
            </div>
            <div className="expense-row">
              <div className="expense-description">
                To pay electricity bill for June.
              </div>
            </div>
            <div className="expense-row">
              <div className="expense-due-date">Due Date: 2 July 2023</div>
            </div>
            <div className="expense-row">
              <div className="expense-alarm">Alarm: 1 July 2023</div>
            </div>
            <div className="expense-row1">
              <img
                className="notification-icon"
                src={due}
                alt="Notification Icon"
              />
              <div className="expense-price">Rs 750.00</div>
            </div>
          </div>
        </div>

        <p></p>

        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <div
            className="expense-container"
            style={{ boxShadow: "0px 8px 25px rgba(208, 210, 218, 0.9)" }}
          >
            <div className="expense-row">
              <div className="expense-title">Water Bill</div>
              <img className="expense-image" src={cwa} alt="Expense Image" />
            </div>
            <div className="expense-row">
              <div className="expense-description">
                To pay water bill for June.
              </div>
            </div>
            <div className="expense-row">
              <div className="expense-due-date">Due Date: 2 July 2023</div>
            </div>
            <div className="expense-row">
              <div className="expense-alarm">Alarm: 1 July 2023</div>
            </div>
            <div className="expense-row1">
              <img
                className="notification-icon"
                src={paid}
                alt="Notification Icon"
              />
              <div className="expense-price">Rs 450.00</div>
            </div>
          </div>

          <p></p>

          <div
            className="expense-container"
            style={{ boxShadow: "0px 8px 25px rgba(208, 210, 218, 0.9)" }}
          >
            <div className="expense-row">
              <div className="expense-title">Electricity Bill</div>
              <img className="expense-image" src={ceb} alt="Expense Image" />
            </div>
            <div className="expense-row">
              <div className="expense-description">
                To pay electricity bill for June.
              </div>
            </div>
            <div className="expense-row">
              <div className="expense-due-date">Due Date: 2 July 2023</div>
            </div>
            <div className="expense-row">
              <div className="expense-alarm">Alarm: 1 July 2023</div>
            </div>
            <div className="expense-row1">
              <img
                className="notification-icon"
                src={due}
                alt="Notification Icon"
              />
              <div className="expense-price">Rs 750.00</div>
            </div>
          </div> */}
        </div>
      </div>

      <div class="addbutton">
        <button class="circle-button" onClick={() => setVisible(true)}>
          <i class="fas fa-plus"></i>
        </button>
        {/* <ExpenseModal /> */}
      </div>
    </div>
  );
};

export default Expense;
