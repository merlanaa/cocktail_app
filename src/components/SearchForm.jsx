import React from 'react'
import { useGlobalContext } from '../context'
import TextField from '@mui/material/TextField';
import './SearchForm.scss'

const SearchForm = () => {
  const {setSearchCocs} = useGlobalContext()
  const searchValue = React.useRef('')

  const searchCocktail = () => {
    setSearchCocs(searchValue.current.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
    </form>
  )
}

export default SearchForm
