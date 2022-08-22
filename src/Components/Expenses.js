import React from 'react';

import './Expenses.css';

import ExpenseItem from './ExpenseItem'

const Expenses = (props) => {

    return(
        <div className='expenses'>
            {/* <ExpenseItem
                date={props.item[0].date}
                name={props.item[0].name}
                price={props.item[0].price}>
            </ExpenseItem>
            <ExpenseItem
                date={props.item[1].date}
                name={props.item[1].name}
                price={props.item[1].price}>
            </ExpenseItem>
            <ExpenseItem
                date={props.item[2].date}
                name={props.item[2].name}
                price={props.item[2].price}>
            </ExpenseItem>
            <ExpenseItem
                date={props.item[3].date}
                name={props.item[3].name}
                price={props.item[3].price}>
            </ExpenseItem> */}

            {
                props.item.map(
                    expense => (
                        <ExpenseItem
                            date={expense.date}
                            title={expense.title}
                            amount={expense.amount}>
                        </ExpenseItem>
                    )
                )
            }
        </div>
    );
}

export default Expenses;