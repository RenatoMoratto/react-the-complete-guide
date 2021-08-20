import { useState } from 'react';
import Card from '../UI/Card/Card';
import ExpensesChart from './ExpensesChart/ExpensesChart';

import './Expenses.css';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList/ExpensesList';

function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // Task 3 - Working with lists
  // My solution
  // const filterByYear = (item) => {
  //   let year = item.date.getFullYear().toString();

  //   if (year === filteredYear) return item;
  // };

  // const filteredItems = items.filter(filterByYear);

  // Teacher solution
  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
