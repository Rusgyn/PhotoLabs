import React, { Fragment } from "react";

import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
 
  // Destructured the received parameters (props)
  const { favorites = [], openModalWithPhoto, setFavorites, toggleModal, selectedPhoto, toggleAddToFavorites, inModal } = props;
  const {
    id,
    location: {city, country},
    urls: {full, regular},
    user: {username, name, profile}
  } = props.photoValue;
  const inFavorites = favorites.includes(id);
  
  const handleInModal = () => {
    if (!inModal) {
      return openModalWithPhoto(props.photoValue);
    } else {
      return;//(In Modal). To prevent opening modal when clicking similar photo.
    }
  }

  //This function will handle the favorite toggle
  const handleAddToFavoriteToggle = () => {
    toggleAddToFavorites(id, inFavorites);
  };
 
  return (    
    <div className="photo-list__item">

      {/* Favorite icon */}
      <PhotoFavButton
        onClick={handleAddToFavoriteToggle}
        inFavorites={inFavorites}
      />

      {/* Photo Details */}
      <img 
        className="photo-list__image"
        src={regular} alt={`photo by ${name}`}
        onClick={handleInModal}
      />
      
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
