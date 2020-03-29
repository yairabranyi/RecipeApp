import React, { useEffect, useState } from 'react'
import './App.css'
import Recipe from './components/Recipe'

function App () {
  const APP_ID = 'e54cfbe6'
  const APP_KEY = '544262c0a288c4325a1bd031f06d097d'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const HandleSearchChange = e => {
    setSearch(e.target.value)
    console.log(search)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className='App'>
    <h1 className='main-header'>Menue finder</h1>
      <form onSubmit={getSearch} className='search-form'>
        <input
          className='searc-bar'
          type='text'
          placeholder='what you would like?'
          value={search}
          onChange={HandleSearchChange}
        />
        <button className='search-button' type='submit'>
          Search Menue
        </button>
      </form>
      <div className='recipies'>
        {recipes.map(recipe => {
          return (
            <Recipe
              key={recipe.recipe.calories}
              label={recipe.recipe.label}
              calories={Math.round(recipe.recipe.calories)}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
