import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './custom.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { IsMobileProvider } from './context/IsMobileContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <IsMobileProvider>
      <App />
    </IsMobileProvider>
  </Router>
);