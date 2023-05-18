import {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
const [enteredTitle,setEnteredTitle]=useState('');
const [enteredAmount,setEnteredAmount]=useState('');
const [enteredDate,setEnteredDate]=useState('');

/* way to merge multiple useState into single state object*/
// const [userInput, setUserInput] = useState({
//     enteredTitle: '',
//     enteredAmount: '',
//     enteredDate: '',
//   });


    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
      // setUserInput((prevState) => {
      // return { ...prevState, enteredTitle: event.target.value };
      // });

    }
    const amountChangeHandler=(event)=>{
      setEnteredAmount(event.target.value);
      
    }
    const dateChangeHandler=(event)=>{
      setEnteredDate(event.target.value);
      
    }

    const submitHandler= (event)=>{
      event.preventDefault();
      const expenseData={
        title:enteredTitle,
        amount:+enteredAmount,
        date:new Date(enteredDate)
      };
// we're passing a handler function i.e.onSaveExpenseData from the parent{NEWEXPENSE}
// to this child component{EXPENSEFORM} having argument containing the data of child component
// so that child data can be passed --> upto parent component.
      props.onSaveExpenseData(expenseData);

      setEnteredTitle('')
      setEnteredAmount('')
      setEnteredDate('')
    };

    const [isaddExpenseBtn, setIsAddExpenseBtn]=useState(false);
    const AddExpenseBtnHandler=()=>{
      setIsAddExpenseBtn(true);
    }
    const CancelBtnHandler=()=>{
      setIsAddExpenseBtn(false);
    }

    let formData=
    <button onClick={AddExpenseBtnHandler} type='submit'>Add New Expense</button>

    if (isaddExpenseBtn === true){
      formData=(
        <form onSubmit={submitHandler}>
          <div  className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text'
          value={enteredTitle}
          onChange={titleChangeHandler}/>
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number'
          value={enteredAmount}
          onChange={amountChangeHandler} min='0.01' step='0.01' />
        </div>
        
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date'
          value={enteredDate}
          onChange={dateChangeHandler} min='2018-01-01' max='2023-12-31' />
        </div>
      </div>
    
      <div className='new-expense__actions'>
       <button onClick={CancelBtnHandler} type='submit'>Cancel</button>
        <button onClick={AddExpenseBtnHandler} type='submit'>Add Expense</button>
      </div>
        </form>
      )
    }
   
  return (
    // <form onSubmit={submitHandler}>
    <div>
      {formData}
      </div>
    // </form>
  );
};

export default ExpenseForm;