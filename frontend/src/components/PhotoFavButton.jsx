import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const [isFave, setIsFave] = useState(false);
  const { identifier, photoValue, setFavorites } = props

  const addToFavorites = () => {
    setFavorites((prev) => [...prev, identifier])
  };

  const removeFromFavorites = () => {
    setFavorites((prev) => prev.filter((fave) => fave !== identifier));
  };

  const faveIconToggle = () => {
    setIsFave((prevIsFave) => {
      const currentToggle = !prevIsFave;
      currentToggle ? addToFavorites() : removeFromFavorites();
      return currentToggle; // ensures that we are working with the most recent state.
    })
  };


  return (
    <div className="photo-list__fav-icon" onClick={faveIconToggle}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFave} />
      </div>
    </div>
  );
}

export default PhotoFavButton;