import React from 'react'

const Recipe = props => {
  return (
    <div className={"recipe"}>
      <h1>{props.label}</h1>
      <ol>
        {props.ingredients.map(ingredient => (
          
          <li  key={1 + Math.random()}>
           
          {ingredient.text}</li>
        ))}
      </ol>
      <p>{props.calories} Calories</p>
      <img className={"image"} src={props.image} alt={'img'} />
    </div>
  )
}

export default Recipe
