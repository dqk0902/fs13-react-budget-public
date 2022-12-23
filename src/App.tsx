import React, { useEffect } from "react";
import Balance from "./components/Balance";
import Money from "./components/Money";
import Saving from "./components/Saving";
import { useState } from "react";
import { MoneyType } from "./interface/money";
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
    <div>
      <Money
        option="Income"
        list={income}
        setList={setIncome}
        balance={balance}
      />
      <Money
        option="Expense"
        list={expense}
        setList={setExpense}
        balance={balance}
      />
      <Balance balance={balance} setSaving={setSaving} />
      <Saving saving={saving} />
    </div>
  );
};

export default App;
