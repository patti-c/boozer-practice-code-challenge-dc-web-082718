import React from 'react'
import { Link } from 'react-router-dom';

const link = {
  color: 'black',
  textDecoration: 'none'
}

const Cocktail = ({cocktail}) => {

  return (
    <li>
      <Link style={link} to={`/cocktails/${cocktail.id}`}>{cocktail.name}</Link>
    </li>
  )
}

export default Cocktail
