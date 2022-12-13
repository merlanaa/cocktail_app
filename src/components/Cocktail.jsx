import React from 'react'
import { Link } from 'react-router-dom'
import './Cocktail.scss'
import Button from '@mui/material/Button';

const Cocktail = ({image, name , id ,info , glass}) => {
  return (
    <div className='cocktail'>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h4>{glass}</h4>
      <p>{info}</p>
      <Link to={`/cocktail/${id}`}>
      <Button variant="contained">Details</Button>
      </Link>
    </div>
  )
}

export default Cocktail
