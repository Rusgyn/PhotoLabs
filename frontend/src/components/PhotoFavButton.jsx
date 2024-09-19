import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  const [isFave, setIsFave] = useState(false);

  const faveIconToggle = () => {
    setIsFave(prevIsFave => !prevIsFave); // ensures that we are working with the most recent state.
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