import React from 'react';
import Menu from './cmp/Menu';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Inbox from './cmp/Inbox';


function App() {
  return (
    <React.Fragment>
    <div className="container-fluid bg-dark ">
      <header className="App-header">
        <Menu />
      </header>

      
    </div>
    <div className="container">
    <Router>
    

    <Switch>
      <Route path="/panel">

      </Route>
      <Route exact path="/">
        <Inbox />
      </Route>
    </Switch>
    </Router>
  </div>
  </React.Fragment>
  );
}

export default App;
