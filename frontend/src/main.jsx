import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import UserProvider from '../src/context/User/UserProvider.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserProvider>,
);
