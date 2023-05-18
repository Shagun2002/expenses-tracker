import React, { useEffect, useState } from "react";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import MainHeader from "./components/UI/MainHeader/MainHeader";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Aluminium Foil Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 5, 12),
  },
  {
    id: "e5",
    title: "Table Fan",
    amount: 450,
    date: new Date(2019, 1, 12),
  },
  {
    id: "e6",
    title: "Lunch Box",
    amount: 390,
    date: new Date(2020, 1, 10),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    localStorage.getItem("AllExpenses", JSON.parse(localStorage.getItem("AllExpenses")));
  
    
  useEffect(() => {
    console.log("all expenses = ", expenses);
    localStorage.setItem("AllExpenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
      <MainHeader></MainHeader>
    </div>
  );

  /* If we do not use JSX we would write return as React Dom Tree.*/
  // return React.createElement(
  //   'div', {},
  //   React.createElement('h2',{},"Let;s get started"),
  //   React.createElement(Expenses,{items:expenses})
  // );
}

export default App;
