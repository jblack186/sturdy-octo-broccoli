import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Shop from './Shop';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavBar';

function App() {
  return (
    <React.Fragment>
    <Layout>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' component={Shop} />
        </Switch> 
      </Router>
    </Layout>
    </React.Fragment>
  );
}

export default App;
