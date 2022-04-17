import {useState} from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

  const [loki, setTitle] = useState(props.title);   // returned value of the title(loki) will be used in h2 tag to display the updated value.

  const clickHandler = () => {
    setTitle('updated!');
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{loki}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
