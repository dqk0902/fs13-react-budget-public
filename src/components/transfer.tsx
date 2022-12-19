import React from "react";
import { Button } from "./button";

export const Transfer = () => {
  return (
    <div>
      <h4>Current balance: </h4>
      <h4>Transfer to saving account</h4>
      <input type="number" name="transferAmount" />
      <Button name="Transfer" />
    </div>
  );
};
