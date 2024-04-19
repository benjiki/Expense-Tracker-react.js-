import React from "react";
import "./NewExpense.css";
import ExpencseForm from "./ExpencseForm";

function NewExpense(props) {
  const saveExpenceDataHandler = (enterdExpenceData) => {
    const expenseData = {
      ...enterdExpenceData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpencseForm onSaveExpenceData={saveExpenceDataHandler} />
    </div>
  );
}

export default NewExpense;
