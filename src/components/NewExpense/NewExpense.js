import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const onSaveExpenseDataHandler= (enteredExpenseData) =>{
    const expenseData= { ...enteredExpenseData, id:Math.random().toString()}
    
// we're passing a handler function i.e.onAddExpense from the parent{APP}
// to this child component{NEWEXPENSE} having argument containing the data of this child component
// so that child data can be passed NEWEXPENSE-->APP upto parent component.
    props.onAddExpense(expenseData);
  }

  
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
    </div>
  );
};

export default NewExpense;