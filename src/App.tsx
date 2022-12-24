import React, { useEffect } from "react";
import Balance from "./components/Balance";
import Money from "./components/Money";
import Saving from "./components/Saving";
import { useState } from "react";
import { MoneyType } from "./interface/money";
import "./App.css";
const App = () => {
  const [income, setIncome] = useState<MoneyType[]>([]);
  const [expense, setExpense] = useState<MoneyType[]>([]);
  const [balance, setBalance] = useState(0);
  const [saving, setSaving] = useState(0);

  useEffect(() => {
    const totalIncome = income.reduce(
      (prev, current) => prev + current.amount,
      0
    );
    const totalExpense = expense.reduce(
      (prev, current) => prev + current.amount,
      0
    );
    setBalance(totalIncome - totalExpense - saving);
  });
  return (
    <div className="flex">
      <div className="flex-1">
        {" "}
        <Money
          option="Income"
          list={income}
          setList={setIncome}
          balance={balance}
        />
      </div>
      <div className="flex-2">
        <Money
          option="Expense"
          list={expense}
          setList={setExpense}
          balance={balance}
        />
      </div>
      <div className="flex-3">
        <Saving saving={saving} />
      </div>
      <div className="flex-4">
        <Balance balance={balance} setSaving={setSaving} />
      </div>
    </div>
  );
};

export default App;
