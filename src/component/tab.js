import React, { useState } from "react";
import "../style/tab.css";
import Expense from "./Expense";
import BankCard from "./BankCard";
import Saving from "./Saving";
import ExpenseModal from "./Modal/ExpenseModal";
import SavingModal from "./Modal/SavingModal";
import Transaction from "./Modal/Transaction";

const Tab = () => {
  const [tabNum, setTabNum] = useState(0);
  const [openExpenseModal, setOpenExpenseModal] = useState(false);
  const [openSavingModal, setOpenSavingModal] = useState(false);
  const [openTransactionModal, setOpenTransactionModal] = useState(false);

  return (
    <div>
      <div class="tabs">
        <ExpenseModal
          visible={openExpenseModal}
          setVisible={setOpenExpenseModal}
        />
        <SavingModal
          visible={openSavingModal}
          setVisible={setOpenSavingModal}
        />
        <Transaction
          visible={openTransactionModal}
          setVisible={setOpenTransactionModal}
        />
        <div class="tabby-tab">
          <input type="radio" id="tabss-2" name="tabby-tabs" checked />
          <label for="tabss-2">My Expenses</label>
          <div class="tabby-content">
            <Expense setVisible={setOpenExpenseModal} />
          </div>
        </div>

        <div class="tabby-tab">
          <input type="radio" id="tabss-3" name="tabby-tabs" />
          <label for="tabss-3">Saving</label>
          <div class="tabby-content">
            <Saving setVisible={setOpenSavingModal} />
          </div>
        </div>

        <div class="tabby-tab">
          <input type="radio" id="tabss-4" name="tabby-tabs" />
          <label for="tabss-4">My Card</label>
          <div class="tabby-content">
            <BankCard setVisible={setOpenTransactionModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
