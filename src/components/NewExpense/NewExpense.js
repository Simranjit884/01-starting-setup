import React from "react";
import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [isClickedButton, setIsClickedButton] = useState(false);

  const isClicked = () => {
      setIsClickedButton(prevState => !prevState);
  }

  return (
    <div className="new-expense">
      
      {isClickedButton ? <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} /> : <div>
        <button onClick={isClicked}>Add new expense</button>
      </div>}
    </div>
  );
};

export default NewExpense;
