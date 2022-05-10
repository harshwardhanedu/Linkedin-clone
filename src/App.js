import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/login';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Header />
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

  );
}



export default App;
