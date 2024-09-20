import React, { Fragment } from "react";

import "../styles/PhotoListItem.scss"
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
 
  // Destructured the received parameters (props)
  const {
    id,
    location: {city, country},
    urls: {full, regular},
    user: {username, name, profile}
  } = props.photoValue;

  const { favorites, setFavorites, toggleModal } = props;

  const isFavorites = favorites.includes(id);
  // console.log(`isFavorites: ${isFavorites} | favorites are: ${favorites}`)

  const favoritesToggle = () => {
    // Add photo to the array of favorites
    (!isFavorites && setFavorites([...favorites, id]));
    // Exist, remove photo from the array
    (isFavorites && setFavorites(favorites.filter(favPhotoId => favPhotoId !== id)));
  }
    
  return (    
    <div className="photo-list__item" key={id}>

      {/* Favorite icon */}
      <PhotoFavButton
        onClick={favoritesToggle}
        isFavorites={isFavorites}
      />

      {/* Photo Details */}
      <img className="photo-list__image" src={regular} alt={`photo by ${name}`} onClick={toggleModal} ></img>

      {/* User Details */}
      <div className="photo-list__user-details">
        {/* User - profile photo */}
        <img className="photo-list__user-profile" src={profile} alt={`${username}'s profile photo`}></img>
        {/* User - username and location */}
        <div className="photo-list__user-info">
          {name}
          <div className="photo-list__user-location" >
            {city}, {country}
          </div>
        </div>
      </div>

    </div>
  );

};

export default PhotoListItem;
