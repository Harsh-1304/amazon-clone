import React, {useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Components/Login';
import { useStateValue } from './Components/StateProvider';
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();
  // useEffect <- POWERFUL
  // piece of code that runs based on a give condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        // the user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
    return () => {
      // any clean up operations go here
      unsubscribe();
    };
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>  
          <Route path="/login">
            <Login />
            {/* <h1>Login Page</h1> */}
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            {/* <h1>checkout</h1> */}
          </Route>
          <Route path="/">
            {/*   <h1>Home page</h1> */}
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
