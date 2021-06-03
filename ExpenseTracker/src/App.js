import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';


const DUMMY_EXPENSES = [];


const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
var temp=[];
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  const onDeleteHandler = (events) => {
   
    temp=[];
    for (var j = 0; j < expenses.length; j++){

      if(expenses[j].id !== events){
      temp.push(expenses[j])
      }
      
      }
      console.log(temp);
      setExpenses(temp);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onDelete={onDeleteHandler}/>
      
    </div>
  );
};

export default App;
