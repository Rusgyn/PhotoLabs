import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const { onClick, inFavorites } = props

  return (
    <div className="photo-list__fav-icon" >
      <div className="photo-list__fav-icon-svg">
        <FavIcon 
          onClick={onClick}
          selected={inFavorites}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;