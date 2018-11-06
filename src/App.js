import React, { Component } from 'react';
import './App.css';
import CocktailsContainer from './components/CocktailsContainer'
import {
  BrowserRouter as Router
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <CocktailsContainer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
