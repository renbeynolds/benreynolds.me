import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Pages/Home';
import Kodenames from './Pages/Kodenames/Kodenames';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/kodenames'>
            <Kodenames />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
