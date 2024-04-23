import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DarkModeProvider } from './contex/DarkModeContex';
import { Provider } from "react-redux"
import { store } from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <Provider store={store} >
        <App />
      </Provider>
    </DarkModeProvider>
  </React.StrictMode>
);
reportWebVitals();
