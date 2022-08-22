import React from "react";

import './ExpenseForm.css';

import ExpenseFormComp from "./ExpenseFormComp";

const ExpenseForm = (props) => {

    const saveDataExpenseHandler = (enteredExpenseData) => {  // take data from children i.e, ExpenseFormComp so that it can be pass to app.js

        const expensesData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expensesData);  // send data to app.ja

        console.log(enteredExpenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseFormComp  onSaveExpenseData={saveDataExpenseHandler}/>
        </div>
    );

}

export default ExpenseForm;