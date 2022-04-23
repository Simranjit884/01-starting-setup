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

  const filteredExpenses = props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        onFilteredYear={filteredYearHandler}
      />
      {filteredExpenses.length === 0 && <p>No expense found.</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expenseItem) => 
        <ExpenseItem
          key={expenseItem.id}
          title={expenseItem.title}
          amount={expenseItem.amount}
          date={expenseItem.date}
        />
        )}
    </Card>
  );
};

export default Expenses;
