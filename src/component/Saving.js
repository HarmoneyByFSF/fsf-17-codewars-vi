import React from "react";
import "../style/savingComponent.css";
import dinner from "../img/dinner.png";
import outing from "../img/outing.png";
import tick from "../img/rightclick.png";
import blank from "../img/blankecllipse.png";

const Saving = ({ setVisible }) => {
  return (
    <div className="scrollable-container">
      <div>
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <div
            class="savinggoal-container"
            style={{ boxShadow: "0px 8px 25px rgba(208, 210, 218, 0.9)" }}
          >
            <img src={dinner} class="savinggoal-image" alt="" />
            <div class="savinggoal-title">Family Dinner</div>

            <div class="savinggoal-date">4 September 2023</div>

            <div class="savinggoal-price">Rs 450.0</div>

            <img src={tick} class="savinggoal-image" alt="" />
          </div>

          <div
            class="savinggoal-container"
            style={{ boxShadow: "0px 8px 25px rgba(208, 210, 218, 0.9)" }}
          >
            <img src={outing} class="savinggoal-image" alt="" />
            <div class="savinggoal-title">Outing</div>

            <div class="savinggoal-date">24 November 2023</div>

            <div class="savinggoal-price">Rs 350.0</div>

            <img src={blank} class="savinggoal-image" alt="" />
          </div>

          <div
            class="savinggoal-container"
            style={{ boxShadow: "0px 8px 25px rgba(208, 210, 218, 0.9)" }}
          >
            <img src={outing} class="savinggoal-image" alt="" />
            <div class="savinggoal-title">Outing</div>

            <div class="savinggoal-date">24 November 2023</div>

            <div class="savinggoal-price">Rs 350.0</div>

            <img src={blank} class="savinggoal-image" alt="" />
          </div>

          <div
            class="savinggoal-container"
            style={{ boxShadow: "0px 8px 25px rgba(208, 210, 218, 0.9)" }}
          >
            <img src={outing} class="savinggoal-image" alt="" />
            <div class="savinggoal-title">Outing</div>

            <div class="savinggoal-date">24 November 2023</div>

            <div class="savinggoal-price">Rs 350.0</div>

            <img src={blank} class="savinggoal-image" alt="" />
          </div>
        </div>

        <p style={{ fontSize: "20px", fontWeight: "400", color: "black" }}>
          Tip
        </p>

        <div class="rowd">
          <div class="tipstext">
            <span>
              Have a clear picture of the regular expenses <br></br> and
              spending habits.<br></br>
              This helps you see where you can <br></br>
              cut back and save.
            </span>
          </div>
          <div class="addbutton" onClick={() => setVisible(true)}>
            <button class="circle-button">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saving;
