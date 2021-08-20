import { useState } from 'react';
import Card from '../UI/Card/Card';
import ExpenseItem from './ExpenseItem/ExpenseItem';

import './Expenses.css';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';

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

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
}

export default Expenses;
