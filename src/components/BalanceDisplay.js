// src/components/BalanceDisplay.js
import React from 'react';

const BalanceDisplay = ({ balance }) => {
  return (
    <div className="balance-display">
      <h2>Balance: ${balance.toFixed(2)}</h2>
    </div>
  );
};

export default BalanceDisplay;
