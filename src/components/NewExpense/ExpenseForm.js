import React from "react";
import { useState } from "react/cjs/react.development";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });

    setUserInput((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };

  const amountChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   enteredmount: e.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, amount: e.target.value };
    });
  };

  const dateChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, date: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredExpenseData = {
      title: userInput.title,
      amount: +userInput.amount,
      date: new Date(userInput.date),
    };
    props.onSaveExpenseData(enteredExpenseData);
    setUserInput({ title: "", amount: "", date: "" });
  };

  const resetHandler = () => {
    props.onClickCancel();
  };

  return (
    <form onSubmit={submitHandler} onReset={resetHandler}>
      <div className="new-expense__control">
        <div className="new-expense_control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="reset">Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
