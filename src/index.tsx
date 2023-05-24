import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css';
import "@grapecity/spread-sheets-designer/styles/gc.spread.sheets.designer.min.css"
// import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
