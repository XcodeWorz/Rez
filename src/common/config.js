import React, { useEffect, useState } from 'react';
import axios from "axios"

export const Context = React.createContext();

export function ContextController({ children }) {
  let intialState = {
    recipes: []
  };

  const [state, setState] = useState(intialState);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(res => {
        console.log(res.data.categories)
        setState({
          recipes: res.data.categories
        });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}