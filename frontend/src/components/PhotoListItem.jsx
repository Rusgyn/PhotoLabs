import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  const {id, imageSource, profile, username, city, country} = props

  return (
    <div>
      <h2>PhotoListItem Component</h2>
      <div key={id}>
        <img src={imageSource} alt="Photo"></img> <br/>
        <img src={profile} alt="user profile image"></img> <br/>
        <h2> {username} </h2>
        <span>{city} {country}</span>
      </div>
    </div>
  );
};

export default PhotoListItem;
