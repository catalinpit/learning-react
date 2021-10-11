import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

axios
  .get('http://localhost:3001/notes')
  .then((response) => {
    const res = response.data;

    console.log('result', res);
  });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);