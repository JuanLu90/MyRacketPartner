import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Layout from "./components/Layout/Layout";

const App = () => {

  const history = createBrowserHistory();

  return (
    <Router history={history}>
       <Switch>
        <Route exact path="/" component={Layout} />
        <Redirect to="/" /> 
      </Switch>
    </Router>
  );
}

export default App;