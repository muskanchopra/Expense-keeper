import React, { useState } from 'react';

import './App.css';

import ExpenseForm from './Components/ExpenseForm';

import Expenses from './Components/Expenses';


let DUMMY_EXPENSE= [
  {
    id : 'e1',
    date : new Date(2022, 3, 28),
    amount : 300,
    title : 'Buy Books'
  },
  {
    id : 'e2',
    date : new Date(2022, 4, 8),
    amount : 900,
    title : 'House Rent'
  },
  {
    id : 'e3',
    date : new Date(2022, 4, 20),
    amount : 300,
    title : 'Buying Food'
  },
  {
    id : 'e4',
    date : new Date(2022, 5, 2),
    amount : 1000,
    title : 'Household accesseries'
  }

];


const App = () => {

  // let expenseDate = new Date(2022, 3, 28);
  // let ExpenseName = "School Fee";
  // let expensePrice = 300;
   
  // let expenses= [
  //   {
  //     id : 'e1',
  //     date : new Date(2022, 3, 28),
  //     price : 300,
  //     name : 'Buy Books'
  //   },
  //   {
  //     id : 'e2',
  //     date : new Date(2022, 4, 8),
  //     price : 900,
  //     name : 'House Rent'
  //   },
  //   {
  //     id : 'e3',
  //     date : new Date(2022, 4, 20),
  //     price : 300,
  //     name : 'Buying Food'
  //   },
  //   {
  //     id : 'e4',
  //     date : new Date(2022, 5, 2),
  //     price : 1000,
  //     name : 'Household accesseries'
  //   }
    
  // ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  // function fetchData(){
  //   fetch('https://techgun.website/sample/api/read.php').then(  //use to fetch data form any api 
  //     response => {       //get response
  //       return response.json()
  //     }
  //   ).then(
  //     data => {
  //       console.log(data);
  //       setExpenses(data);
  //     }
  //   )
  // }
  // useEffect(() => {fetchData();}, []);

  const addExpenseHandler = (expense) => {  //take data from children i.e ExpenseForm
    console.log(expense);
    const updateExpense = [expense, ...expenses];
    setExpenses(updateExpense);

    // fetch('https://techgun.website/sample/api/read.php',{
    //   method: 'POST',
    //   body: JSON.stringify(expense),
    //   headers:{
    //     'content-Type' : 'application/json'
    //   }
    // }).then(
    //   response => {
    //     fetchData();
    //   }
    // )
  };

  return (
    <div className="App">
      <h1>Let's Get Started</h1>

      <ExpenseForm onAddExpense={addExpenseHandler} />

      <Expenses item={expenses} />
    </div>
  );
}

export default App;
