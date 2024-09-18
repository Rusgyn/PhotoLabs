import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  const {id, imageSource, profile, username, location: {city, country}} = props.photo;
  
  return (
    <div>
      <h2>PhotoListItem Component</h2>
      <div key={id}>
        <img src={imageSource} alt="image"></img> <br/>
        <img src={profile} alt={`${username}'s profile photo`}></img> <br/>
        <div>
          <h2> {username} </h2>
          <span>{city} {country}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
