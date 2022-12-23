import React from "react";
import { BalanceProps } from "../interface/balance";
import { useState } from "react";
const Balance = ({ balance, setSaving }: BalanceProps) => {
  const [amount, setAmount] = useState(0);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (balance < amount) {
      throw new Error("you dont have enough cash");
    }
    setSaving((prev) => prev + amount);
  };
  return (
    <div>
      <p>Current balance: {balance}</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="amount">Transfer to saving account</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
        />
        <button type="submit">Transfer</button>
      </form>
    </div>
  );
};

export default Balance;
