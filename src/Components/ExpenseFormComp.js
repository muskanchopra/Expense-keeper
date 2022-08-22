import React, { useState } from "react";

import './ExpenseFormComp.css';

const ExpenseFormComp = (props) => {

    const [enterTitle, setEnterTitle] = useState('');
    const [enterAmount, setEnterAmount] = useState('');
    const [enterDate, setEnterDate] = useState('');

    const titleChangeHandler = (event) => {
        // console.log(event.target.value);
        setEnterTitle(event.target.value);
    }

    const AmountChangeHandler = (event) => {
        // console.log(event.target.value);
        setEnterAmount(event.target.value);
    }

    const DateChangeHandler = (event) => {
        // console.log(event.target.value);
        setEnterDate(event.target.value);
    }

    const sumbitHandler = (event) => {
        event.preventDefault();  // to prevent refresh


        const expenses = {
            title: enterTitle,
            amount: enterAmount,
            date: new Date(enterDate)
        }  // form object as we did in app.js

        props.onSaveExpenseData(expenses);    // send data to parent component i.e Expense form

        console.log(expenses);

        // to clear form (jo phele likha h usse clear kr dega) when we click on add expense
        setEnterAmount('');
        setEnterDate('');
        setEnterTitle('');
    }

    return (
        <form onSubmit={sumbitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type= 'text' value = {enterTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amout Spend</label>
                    <input type= 'number' value = {enterAmount} min='0.01' step='0.01' onChange={AmountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type= 'date' value = {enterDate} onChange={DateChangeHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseFormComp;