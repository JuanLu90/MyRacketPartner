import React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Main from "./components/Main/Main";

const App = () => {

  const history = createBrowserHistory();

  return (
    <Router history={history}>
       <Switch>
        <Route exact path="/Main" component={Main} />
        <Redirect to="/Main" /> 
      </Switch>
    </Router>
  );
}

export default App;