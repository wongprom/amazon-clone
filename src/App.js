import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './header/Header';
import Home from './home/Home';
import Checkout from './chekout/Checkout';
import Login from './login/Login';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login>Login</Login>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
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
