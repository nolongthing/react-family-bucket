import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Sub from './pages/sub';
import Login from './pages/login';
import Monthly from './pages/monthly';
import MultistageRouter from './pages/multistageRouter';
import Home from './pages/multistageRouter/components/home';
import Download from './pages/multistageRouter/components/download';
import Table from './pages/table';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Sub} />
          <Route path='/login' component={Login} />
          <Route path='/monthly' component={Monthly} />
          {/* 嵌套路由的时候方法，除了需要在此处定义子路由之外，
          还需要在MultistageRouter组件中写上{props.children}用以渲染路由子组件 */}
          <Route path='/multistageRouter' render={()=>
            <MultistageRouter>
              <Switch>
                <Route path='/multistageRouter/home' component={Home} />
                <Route path='/multistageRouter/download' component={Download} />
                <Redirect to='/multistageRouter/home' />
              </Switch>
            </MultistageRouter>
          } />
          <Route path='/table' component={Table} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
