import React, { Component } from 'react'
import CocktailsList from './CocktailsList'
import CocktailDisplay from './CocktailDisplay'
import Form from './Form'
import { Route } from 'react-router-dom';

import Adapter from '../Adapter'
const adapter = new Adapter()
const COCKTAILSURL = 'https://react-boozer-backend.herokuapp.com/api/v1/cocktails'

class CocktailsContainer extends Component {

  constructor() {
    super()
    this.state = {
      allCocktails: []
    }
  }

  componentDidMount() {
    this.getAllCocktails()
  }

  getAllCocktails() {
    adapter.genericFetch(COCKTAILSURL)
    .then(cocktailData => this.setState({allCocktails: cocktailData}))
  }

  render(){
    return (
      <div className="container">
        <CocktailsList cocktails={this.state.allCocktails} />
        {(this.state.allCocktails.length !== 0) ?
          <Route
            path={`/cocktails/:cocktailId`}
            render={routerProps => <CocktailDisplay {...routerProps} cocktails={this.state.allCocktails}/>}
          /> : null
        }

        <Form />
      </div>
    )
  }
}

export default CocktailsContainer
