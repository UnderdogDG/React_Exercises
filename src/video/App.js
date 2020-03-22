import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';

import Home from './pages/Home';
import E404 from './pages/E404';

class App extends React.Component{
  render(){
    return(
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/:item" component={ Home } />
          <Route exact component={ E404 } />
        </Switch>
      </Router>
    );
  }
}

export default App;