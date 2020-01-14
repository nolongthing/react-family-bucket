import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Sub from './pages/sub';
import Login from './pages/login';
import Monthly from './pages/monthly';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Sub} />
          <Route path='/login' component={Login} />
          <Route path='/monthly' component={Monthly}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
