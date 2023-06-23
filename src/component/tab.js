import React, { useState } from "react";
import "../style/tab.css";
import Expense from "./Expense";
import BankCard from "./BankCard";
import Saving from "./Saving";

const Tab = () => {
  const [tabNum, setTabNum] = useState(0);

  return (
    <div>
      <div class="tabs">
        <div class="tabby-tab">
          <input type="radio" id="tab-2" name="tabby-tabs" checked />
          <label for="tab-2">My Expenses</label>
          <div class="tabby-content">
            <Expense />
          </div>
        </div>

        <div class="tabby-tab">
          <input type="radio" id="tab-3" name="tabby-tabs" />
          <label for="tab-3">Saving</label>
          <div class="tabby-content">
            <Saving />
          </div>
        </div>

        <div class="tabby-tab">
          <input type="radio" id="tab-4" name="tabby-tabs" />
          <label for="tab-4">My Card</label>
          <div class="tabby-content">
            <BankCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
