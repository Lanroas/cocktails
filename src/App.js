import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Search from './Search';
import CocktailList from './CocktailList';
import Modal from './Modal';
import Favorites from './Favorites';
import logo from './logo.png'
import { Content } from './Content';

const App = () => {
  const [cocktails, setCocktails] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false); 

  useEffect(() => {
    
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const searchCocktails = async (query) => {
    try {
      const response = await axios.get(`http://www.thecocktaildb.com/api/json/v1/1/search.php?f=${query}`);
      setCocktails(response.data.drinks || []);
    } catch (error) {
      console.error('Error fetching cocktails:', error);
    }
  };

  const handleCocktailClick = (cocktail) => {
    setSelectedCocktail(cocktail);
  };

  const handleCloseModal = () => {
    setSelectedCocktail(null);
  };

  const handleAddToFavorites = (cocktail) => {
    if (!favorites.some(fav => fav.idDrink === cocktail.idDrink)) {
      const updatedFavorites = [...favorites, cocktail];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  const handleRemoveFavorite = (cocktailId) => {
    const updatedFavorites = favorites.filter(cocktail => cocktail.idDrink !== cocktailId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  const closeFavoritesPanel = () => {
    setShowFavorites(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className='logo'/>
        <h1 className='app-name'>Cocktails Craze</h1>
        <button className="favorites-button" onClick={toggleFavorites}>
          Favorites
        </button>
      </header>
      <Content/>
      <Search onSearch={searchCocktails} />
      <div className="content">
        <CocktailList cocktails={cocktails} onCocktailClick={handleCocktailClick} />
        {selectedCocktail && (
          <Modal cocktail={selectedCocktail} onClose={handleCloseModal} onAddToFavorites={handleAddToFavorites} />
        )}
        {showFavorites && (
          <Favorites favorites={favorites} onRemoveFavorite={handleRemoveFavorite} onClose={closeFavoritesPanel} />
        )}
      </div>
    </div>
  );
};

export default App;
