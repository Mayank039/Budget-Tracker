// src/components/IncomeExpenseForm.js
import React from 'react';

const IncomeExpenseForm = ({ inputData, setInputData, addTransaction }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  return (
    <form onSubmit={addTransaction}>
      <input
        type="number"
        name="amount"
        value={inputData.amount}
        placeholder="Enter amount"
        onChange={handleInputChange}
      />
      <select name="type" value={inputData.type} onChange={handleInputChange}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input
        type="text"
        name="category"
        value={inputData.category}
        placeholder="Enter category"
        onChange={handleInputChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default IncomeExpenseForm;
