import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm() {
    const [input, setInput] = useState({
        Title: '',
        Amount: '',
        Date: '',

    })


    function handleChange(event) {
        setInput((prevState) => {
            return {
                ...prevState,
                Title: event.target.value
            }
        })
    }
    function handleChangeAmount(event) {
        setInput((prevState) => {
            return {
                ...prevState,
                Amount: event.target.value
            }
        })
    }
    function handleChangeDate(event) {
        setInput((prevState) => {
            return {
                ...prevState,
                Date: event.target.value
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            Title: input.Title,
            Amount: input.Amount,
            Date: new Date(input.Date),
        }
        console.log(expenseData)
    }

    return (
        <form onSubmit={submitHandler} >
            <div className='new-expense__controls'>

                <div className='new-expense__controls'>
                    <label>Title</label>
                    <input type='text' name='title' onChange={handleChange} />
                </div>
                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input type='number' name='amount' min='5000' step='1000' onChange={handleChangeAmount} />
                </div>
                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input type='date' name='date' min='2019-01-01' max='2022-12-31' onChange={handleChangeDate} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm