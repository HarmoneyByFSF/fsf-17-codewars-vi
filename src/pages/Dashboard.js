import React from "react";
import "../style/dashboard.css";
import prt from "../img/card1.png";
import streak from "../img/streak.png";
import skill from "../img/skill.png";
import visa from "../img/visa.png";
import BalanceCard from "../component/balanceCard";
import StreakCard from "../component/streakCard";
import Tab from "../component/tab";

const Dashboard = () => {
  return (
    <div style={{ height: "200px" }}>
      <div class="angry-grid">
        <div id="item-0">
          <BalanceCard />
        </div>
        <div id="item-1">
          {/* <img src={streak} style={{ width: "100%", borderRadius: "20px" }} /> */}
          <StreakCard />
        </div>
        <div id="item-2">
          {/* <img src={skill} style={{ width: "100%", borderRadius: "20px" }} /> */}
        </div>
        <div id="item-3">
          <Tab />
          {/* <img src={visa} style={{ width: "100%", borderRadius: "20px" }} /> */}
        </div>
            
      </div>
    </div>
  );
};

export default Dashboard;
