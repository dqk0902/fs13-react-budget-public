import React from "react";
import "./App.css";
import { Expense } from "./components/expense";
import { Income } from "./components/income";
import { Target } from "./components/target";
import { Transfer } from "./components/transfer";

function App() {
  return (
    <div className="flex">
      <div className="flex-1">
        <Income />
      </div>
      <div className="flex-2">
        <Expense />
      </div>
      <div className="flex-3">
        <Target />
      </div>
      <div className="flex-4">
        <Transfer />
      </div>
    </div>
  );
}

export default App;
