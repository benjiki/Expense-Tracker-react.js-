import React, { useState } from "react";
import "./ExpenceForm.css";

function ExpencseForm(props) {
  const [enterdTitle, setEnterdTitle] = useState("");
  const [enterdAmount, setEnterdAmount] = useState("");
  const [enterdDate, setEnterdDate] = useState("");

  const handleTitle = (event) => {
    setEnterdTitle(event.target.value);
  };
  const handleAmount = (event) => {
    setEnterdAmount(event.target.value);
  };
  const handleDate = (event) => {
    setEnterdDate(event.target.value);
  };
  const submitHandler = (event) => {
    const expenseData = {
      title: enterdTitle,
      amount: enterdAmount,
      date: new Date(enterdDate),
    };

    props.onSaveExpenceData(expenseData);

    setEnterdTitle("");
    setEnterdAmount("");
    setEnterdDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={enterdTitle}
            onChange={handleTitle}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="number"
            min="0.01"
            step="0.01"
            value={enterdAmount}
            onChange={handleAmount}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enterdDate}
            onChange={handleDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpencseForm;
