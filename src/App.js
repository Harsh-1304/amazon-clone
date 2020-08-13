import React from 'react';
// import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          <Route path="/checkout">
            <h1>checkout</h1>
          </Route>
          <Route path="/">
            {/*   <h1>Home page</h1> */}
            <Header />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
