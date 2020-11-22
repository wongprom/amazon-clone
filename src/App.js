import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './header/Header';
import Home from './home/Home';
import Checkout from './chekout/Checkout';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
