import React, { Fragment } from "react";

import "../styles/PhotoListItem.scss"
import PhotoFavButton from "./PhotoFavButton";
import PhotoList from "./PhotoList";

const PhotoListItem = (props) => {
 
  // Destructured the received parameters (props)
  const {
    id,
    location: {city, country},
    urls: {full, regular},
    user: {username, name, profile}
  } = props.photo;
    
  return (   
    <div className="photo-list__item" key={id}>
      <PhotoFavButton /> {/* Favorite icon */}
      {/* Photo Details */}
      <img className="photo-list__image" src={regular} alt={regular}></img>

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
