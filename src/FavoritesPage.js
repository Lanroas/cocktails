import React from 'react';

const Favorites = ({ favorites, onRemoveFavorite }) => {
  return (
    <div className="favorites">
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites saved.</p>
      ) : (
        <ul>
          {favorites.map(cocktail => (
            <li key={cocktail.idDrink}>
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
