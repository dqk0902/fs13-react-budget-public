import React from "react";
import { Button } from "./button";

export const Income = () => {
  return (
    <div>
      <div>
        <h5>Income Source</h5>
        <input type="text" name="income" />
      </div>
      <div>
        <h5>Amount of Income</h5>
        <input type="number" name="amountIncome" />
      </div>
      <div>
        <h5>Date of expense</h5>
        <input type="date" name="expenseDate" />
      </div>
      <br />
      <Button name="Add income" />
    </div>
  );
};
