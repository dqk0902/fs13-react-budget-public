import React from "react";
import { Button } from "./button";
export const Expense = () => {
  return (
    <div>
      <div>
        <h5>Expense Source</h5>
        <input type="text" name="expense" />
      </div>
      <div>
        <h5>Amount of Expense</h5>
        <input type="number" name="amountExpense" />
      </div>
      <div>
        <h5>Date of income</h5>
        <input type="date" name="incomeDate" />
      </div>
      <br />
      <Button name="Add expense" />
    </div>
  );
};
