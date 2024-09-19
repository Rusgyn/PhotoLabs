import React from "react";

import "../styles/PhotoListItem.scss"

const PhotoListItem = (props) => {

  const {id, imageSource, profile, username, location: {city, country}} = props.photo;
  
  return (     
    <div className="photo-list__item" key={id}>
      {/* Photo Details */}
      <img className="photo-list__image" src={imageSource} alt="image"></img>

      {/* User Details */}
      <div className="photo-list__user-details">
        {/* User Details - profile photo */}
        <img className="photo-list__user-profile" src={profile} alt={`${username}'s profile photo`}></img>
        {/* User Details - username and location */}
        <div className="photo-list__user-info">
          {username}
          <p className="photo-list__user-location" >
            {city} {country}
          </p>
        </div>
      </div>

    </div>
  );

};

export default PhotoListItem;
