import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import NavBar from './components/NavBar';

import Home from './pages/Home';
import E404 from './pages/E404';

const darkTheme = {
  backgroundColor: '#1e2021',
  color: '#fafafa',
  colorHover: '#1ae8ff'
};

const ligthTheme = {
  backgroundColor: '#fafafa',
  color: '#212121',
  colorHover: '#2979ff',
};

class App extends React.Component{
  constructor(props){
    super(props);
    this.changeTheme = this.changeTheme.bind(this);

    this.state = {
      theme: true
    }
  }

  changeTheme(){
    this.setState(prev => ({theme: !prev.theme}));
  }

  render(){
    return(
      <Router>
        <ThemeProvider theme={ this.state.theme ? ligthTheme : darkTheme }>
          <NavBar changeTheme={this.changeTheme}/>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/:item" component={ Home } />
            <Route exact component={ E404 } />
          </Switch>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;