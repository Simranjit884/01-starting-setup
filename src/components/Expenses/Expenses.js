import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2019");
  const filteredYearHandler = (filteredYear) => {
    setSelectedYear(filteredYear);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        onFilteredYear={filteredYearHandler}
      />
      {props.items.map((expenseItem) => (
        <ExpenseItem
          title={expenseItem.title}
          amount={expenseItem.amount}
          date={expenseItem.date}
        ></ExpenseItem>
      ))}
    </Card>
  );
};

export default Expenses;
