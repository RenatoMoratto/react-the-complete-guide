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
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterChange={filterChangeHandler}
      />
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
