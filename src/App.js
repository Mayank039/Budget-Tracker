import React, { useState, useEffect } from 'react';
import './App.css';
import BalanceDisplay from './components/BalanceDisplay';
import IncomeExpenseForm from './components/IncomeExpenseForm';
import TransactionList from './components/TransactionList';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);
  const [inputData, setInputData] = useState({ amount: '', category: 'income', type: 'income' });

  // Load data from localStorage when the app starts
  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions'));
    if (storedTransactions) {
      setTransactions(storedTransactions);
      calculateBalance(storedTransactions);
    }
  }, []);

  // Save transactions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (e) => {
    e.preventDefault();
    const { amount, category, type } = inputData;
    if (!amount) return;
    const newTransaction = { id: Date.now(), amount: parseFloat(amount), category, type };
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);
    setInputData({ amount: '', category: 'income', type: 'income' });
    calculateBalance(updatedTransactions);
  };

  const removeTransaction = (id) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions);
    calculateBalance(updatedTransactions);
  };

  const calculateBalance = (transactions) => {
    let totalIncome = 0, totalExpense = 0;
    transactions.forEach((transaction) => {
      if (transaction.type === 'income') totalIncome += transaction.amount;
      else totalExpense += transaction.amount;
    });
    setBalance(totalIncome - totalExpense);
  };

  return (
    <div className="App">
      <header>
        <h1>Personal Budget Tracker</h1>
      </header>
      <BalanceDisplay balance={balance} />
      <IncomeExpenseForm
        inputData={inputData}
        setInputData={setInputData}
        addTransaction={addTransaction}
      />
      <TransactionList transactions={transactions} removeTransaction={removeTransaction} />
      {/* You can add your chart component here later */}
    </div>
  );
};

export default App;
