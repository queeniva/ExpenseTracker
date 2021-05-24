import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'


function NewExpense(props) {
    const [options, changeOptions] = useState(false)

    const handleClick = () => {
        changeOptions(!options)
    }

    const handleCancel = () =>{
        changeOptions(!options)
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
    return (
        <div className="new-expense">
            {!options && <button onClick={handleClick}>Add New Expense</button>}
            {options && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {handleCancel}/>}
        </div>
    );
}
export default NewExpense;