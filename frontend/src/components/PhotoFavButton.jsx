import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  const [isFave, setIsFave] = useState(false);

  const faveIconToggle = () => { setIsFave(!isFave) };

  return (
    <div className="photo-list__fav-icon" onClick={faveIconToggle}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFave} />
      </div>
    </div>
  );
}

export default PhotoFavButton;