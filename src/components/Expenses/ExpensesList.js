import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expensesContent = (
    <p className="expenses-list__fallback">No expenses found</p>
  );
  if (props.filteredExpenses.length > 0) {
    expensesContent = (
      <ul className="expenses-list">
        {props.filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </ul>
    );
  }

  return expensesContent;
};

export default ExpensesList;
