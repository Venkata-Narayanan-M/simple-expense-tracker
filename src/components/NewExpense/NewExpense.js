import React, { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [showAddExpense, setShowAddExpense] = useState(false);

  const handleShowAddExpense = () => {
    setShowAddExpense((prevVal) => {
      return !prevVal;
    });
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: (Math.random() * 1).toString(),
      ...enteredExpenseData,
    };

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!showAddExpense && (
        <button onClick={handleShowAddExpense}>Add New Expense</button>
      )}
      {showAddExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClickCancel={handleShowAddExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
