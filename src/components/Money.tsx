import React, { ReactFragment, useState } from "react";
import uuid4 from "uuid4";
import { MoneyProps, MoneyType } from "../interface/money";

const Money = ({ option, list, setList, balance }: MoneyProps) => {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const addNew = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = uuid4();
    const moneyItem: MoneyType = {
      id,
      source,
      amount,
      date,
    };
    if (option === "Expense") {
      if (balance < amount) {
        setError("You do not have enough money");
        return;
      } else {
        setError("");
      }
    }
    setList([...list, moneyItem]);
  };
  return (
    <div>
      <h1>{option}</h1>
      <form onSubmit={(e) => addNew(e)}>
        <div>
          <label htmlFor="source">{option} source</label>
          <input
            type="text"
            name="source"
            id="source"
            placeholder={option}
            value={source}
            onChange={(e) => setSource(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="amount">Amount of {option}</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
          ></input>
        </div>
        <div>
          <label htmlFor="date">Date of {option}</label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
        </div>
        <button type="submit">Save</button>
        {error && <p>{error}</p>}
      </form>
      <ul>
        {list.map((list) => (
          <li key={list.id}>
            {list.source}: {list.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Money;
