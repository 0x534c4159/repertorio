import React from 'react';
import Menu from './cmp/Menu';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Inbox from './cmp/Inbox';
import AddButton from './cmp/AddButton';



function App() {
  return (
    <React.Fragment>
      <Router>
      <Menu />
      <Switch>
        <Route exact path="/">
          <Inbox />
        </Route>

        <Route path="/panel">
          <h1>adfasdf</h1>
        </Route>

        <Route path="/a">
          <h1>pag 1</h1>
        </Route>
      </Switch>
      <AddButton />
      </Router>
    <div className="container">
    </div>
    </React.Fragment>
  );
}

export default App;
