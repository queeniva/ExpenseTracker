import React, { useState } from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense'

const dummyData = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 500,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 150000, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 10000,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 15000,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, updateExpenses] = useState(dummyData)

  const addExpenseHandler = (expense) => {
    updateExpenses((previousExpenses) => {
      return [expense, ...previousExpenses]
 
});
console.log(expense)
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

