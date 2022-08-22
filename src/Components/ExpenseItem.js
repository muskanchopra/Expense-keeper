import React from 'react';

import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';

// import Cards from './Cards';

const ExpenseItem = (props) => {

    // let title = props.title
    // const clickHandler = () => {
    //     title = "New title";
    //     console.log(title);
    // }    for make it work we use state........

//     const [newTitle,  setNewTitle] = useState("");//for user input

//     const [title, setTitle] = useState(props.title);


//     // const clickHandler = () => {
//     //      setTitle('New Title..');  //using state to make changes in state chage example on click
//     // }

//     const clickHandler = () => {
//         setTitle(newTitle);  // upadte by user input....
//    }

//     const changeHandler = (event) => {
//         setNewTitle(event.target.value);   // Upadte value of new title using state
//     }



    return (
        <div className="Item">
            <div className="Item-description">
                <div className="Item-date">
                    <ExpenseDate date={props.date}/>
                </div>
                <div className="Item-name">{ props.title }</div>
                <div className="Item-price">$ { props.amount }</div>
            </div>
            {/* <input type = "text" value={newTitle} onChange={changeHandler}/>
            <button onClick={clickHandler}>Change Title</button> */}
        </div>
    );
}

export default ExpenseItem;