import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/login';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </div>
  );
}



export default App;
