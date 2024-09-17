import React from 'react';

const TransactionList = ({ transactions, removeTransaction }) => {
  return (
    <div className="transaction-list">
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.category} - ${transaction.amount.toFixed(2)} ({transaction.type})
            <button onClick={() => removeTransaction(transaction.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
