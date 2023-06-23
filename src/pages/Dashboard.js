import React from "react";
import "../style/dashboard.css";
import prt from "../img/card1.png";
import streak from "../img/streak.png";
import skill from "../img/skill.png";
import visa from "../img/visa.png";

const Dashboard = () => {
  return (
    <div style={{ height: "200px" }}>
      <div class="angry-grid">
        <div id="item-0">
          {/* <img src={prt} style={{ width: "100%", borderRadius: "20px" }} /> */}
        </div>
        <div id="item-1">
          {/* <img src={streak} style={{ width: "100%", borderRadius: "20px" }} /> */}
        </div>
        <div id="item-2">
          {/* <img src={skill} style={{ width: "100%", borderRadius: "20px" }} /> */}
        </div>
        <div id="item-3">
          {/* <img src={visa} style={{ width: "100%", borderRadius: "20px" }} /> */}
        </div>
            
      </div>
    </div>
  );
};

export default Dashboard;
