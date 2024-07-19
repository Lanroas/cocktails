import React from 'react';

const CocktailList = ({ cocktails, onCocktailClick, onAddToFavorites }) => {
  return (
    <div className="cocktail-list">
      {cocktails.map(cocktail => (
        <div key={cocktail.idDrink} className="cocktail-item">
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} onClick={() => onCocktailClick(cocktail)} />
          <p>{cocktail.strDrink}</p>
        </div>
      ))}
    </div>
  );
};

export default CocktailList;
