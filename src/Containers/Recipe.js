import React, { useContext } from 'react';
import { Context } from '../common/config';

const Recipe = () => {
  const [state] = useContext(Context);
  const { recipes } = state;

  if(recipes === undefined || recipes.length === 0) {
    return (<h1>Loading......</h1>)
  } else {
  return (
    <div>
      <h1>Recipes comes here</h1>
      {recipes.map(recipe =>
        <h1>{recipe.strCategory}</h1>
      )}
    </div>
  );
  }
};

export default Recipe;