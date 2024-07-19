import React from 'react';

const Favorites = ({ favorites, onRemoveFavorite, onClose }) => {
  return (
    <div className="favorites">
      <button className="close-favorites" onClick={onClose}>
        X
      </button>
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites saved.</p>
      ) : (
        <ul>
          {favorites.map(cocktail => (
            <li key={cocktail.idDrink}>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="favorite-image" />
              {cocktail.strDrink}
              <button onClick={() => onRemoveFavorite(cocktail.idDrink)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
