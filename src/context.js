import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchCocs, setSearchCocs] = useState('a')
  const [cocktails, setCocktails] = useState([])

const fetchCocktails = useCallback(async () => {
  setLoading(true)
try {
  const response = await fetch(`${url}${searchCocs}`)
  const data = await response.json()
  const { drinks } = data
  if(drinks){
    const newCocktails = drinks.map((item) => {
      const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass} = item
      return {id:idDrink,name:strDrink,image:strDrinkThumb,info:strAlcoholic,glass:strGlass}
    })
    setCocktails(newCocktails)
  } else {
    setCocktails([])
  }
  setLoading(false)
} catch(error) {
  console.log(error);
  setLoading(false)
}
},[searchCocs]
)
useEffect(() => {
  fetchCocktails()
}, [searchCocs,fetchCocktails])


  return <AppContext.Provider value={{loading,cocktails,searchCocs,setSearchCocs}} >
    {children}
    </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
