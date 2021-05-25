import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpenseFilter'
import ExpenseChart from "./ExpenseChart"
import './Expenses.css'

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2021')

  const getYear = (selectedYear) => {
    setFilteredYear(selectedYear)
    console.log(selectedYear)
  }
  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onSelectYear={getYear}
      />
      <ExpenseChart expenses={filteredExpenses} />
        {filteredExpenses.map((expenses) => (
          <ExpenseItem
            key={expenses.id}
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))}
      </div>
    </div>
  );
}
export default Expenses;

