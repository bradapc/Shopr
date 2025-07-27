import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ShoppingContextProvider } from './context/ShoppingContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShoppingContextProvider>
      <App />
    </ShoppingContextProvider>
  </React.StrictMode>
);