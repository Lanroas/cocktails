import React from 'react';

const Modal = ({ cocktail, onClose, onAddToFavorites }) => {
  if (!cocktail) return null; 

  const handleAddToFavorites = () => {
    onAddToFavorites(cocktail);
    onClose(); 
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{cocktail.strDrink}</h2>
        <div className="modal-body">
          <div className="modal-image">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          </div>
          <div className="modal-details">
            <h3>Ingredients:</h3>
            <ul>
            {Object.keys(cocktail)
              .filter((key) => key.startsWith('strIngredient'))
              .map((key) => cocktail[key])
              .filter((ingredient) => ingredient)
              .join(', ')}
            </ul>
            <h3>Instructions:</h3>
            <p>{cocktail.strInstructions}</p>
            <button onClick={handleAddToFavorites}>Add to Favorites</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
