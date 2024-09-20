import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  // const [isFave, setIsFave] = useState(false);
  const { onClick, isFavorites } = props

  // const addToFavorites = () => {
  //   setFavorites((prev) => [...prev, identifier])
  // };

  // const removeFromFavorites = () => {
  //   setFavorites((prev) => prev.filter((fave) => fave !== identifier));
  // };

  // const faveIconToggle = () => {
  //   setIsFave((prevIsFave) => {
  //     const currentToggle = !prevIsFave;
  //     if (currentToggle) {
  //       addToFavorites();
  //     } else {
  //       removeFromFavorites();
  //     }
  //     return currentToggle; // ensures that we are working with the most recent state.
  //   })
  // };

//onClick={faveIconToggle} 
  return (
    <div className="photo-list__fav-icon" >
      <div className="photo-list__fav-icon-svg">
        <FavIcon onClick={onClick} selected={isFavorites} />
      </div>
    </div>
  );
}

export default PhotoFavButton;