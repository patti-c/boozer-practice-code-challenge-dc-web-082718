import React from 'react'

const CocktailDisplay = ({cocktails, match}) => {
  const currentCocktail = cocktails[match.params.cocktailId - 1]
  return (
    <div id="cocktail-display">
      <h1>{currentCocktail.name}</h1>
      <h3>{currentCocktail.description}</h3>
      <p>{currentCocktail.instructions}</p>
    </div>
  )
}

export default CocktailDisplay
