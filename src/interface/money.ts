export interface MoneyProps {
  option: "Income" | "Expense";
  list: MoneyType[];
  setList: React.Dispatch<React.SetStateAction<MoneyType[]>>;
  balance: number;
}

export interface MoneyType {
  id: string;
  source: string;
  amount: number;
  date: string;
}
