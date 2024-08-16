import React from 'react';
import { motion } from 'framer-motion';
import { stocksData } from '../data/stocksData';
import './StockList.css';

const StockList = ({ onStockSelect }) => {
  return (
    <motion.div className="stock-list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h3>Stock List</h3>
      <ul>
        {stocksData.map(stock => (
          <motion.li
            key={stock.symbol}
            onClick={() => onStockSelect(stock)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="stock-item"
          >
            <div className="stock-info">
              <h4>{stock.symbol}</h4>
              <p>Price: ${stock.price}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default StockList;
