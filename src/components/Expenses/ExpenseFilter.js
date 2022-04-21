import {useState} from 'react';

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
    const [selectedYear, setSelectedYear] = useState('2019');
    const onChangeHandler = (inputYear) => {
        // console.log(inputYear.target.value);
        setSelectedYear(inputYear.target.value);
        props.filteredYear(selectedYear);
    }
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Year</label>
        <select onChange={onChangeHandler}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
