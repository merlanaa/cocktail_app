import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'


const CocktailList = () => {
  const {loading,cocktails} = useGlobalContext()

  if(loading){
    return <Loading/>
  }

  if(cocktails.length < 1){
    return <h1 style={{textAlign:'center',marginTop:'1rem'}}>No cocktails matched</h1>
  }
  return (
    <div className='allcocktails'>
      {cocktails.map((item) => {
        return <Cocktail key={item.id} {...item}  />
      })}
    </div>
  )
}

export default CocktailList
