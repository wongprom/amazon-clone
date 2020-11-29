import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Header from './header/Header';
import Home from './home/Home';
import Checkout from './chekout/Checkout';
import Login from './login/Login';
import Orders from './orders/Orders';

import { auth } from './firebase/firebase';
import { useStateValue } from './globalState/StateProvider';

import './App.css';
import Payment from './payment/Payment';
/**
 * todo - Add uuid for items in basket, otherwise error from <FlipMove />
 * todo - Better animations <FlipMove />
 */

const promise = loadStripe(
  'pk_test_51HssWsDHIJLf7ahjwwg1l1egOdRDbLJspSQXXPqyQtrAAHrHmbDkFb4tXE5tVMPSM7Nm2ixgNQ47pAfHOKKNTZdj00Yt5JLcdc'
);

function App() {
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('The user is ===>>>>>', authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
