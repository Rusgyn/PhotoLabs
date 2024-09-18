import React from "react";

import "../styles/PhotoListItem.scss";



const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const PhotoListItem = () => {
  /* Insert React */

  return (
    <div>
      <h2>PhotoListItem Component</h2>
      <img src={sampleDataForPhotoListItem.imageSource} alt="Photo"></img> <br/>
      <img src={sampleDataForPhotoListItem.profile} alt="user profile image"></img> <br/>
      {sampleDataForPhotoListItem.username} <br/>
      {sampleDataForPhotoListItem.location.city} {sampleDataForPhotoListItem.location.country}
       
    </div>
  );
};

export default PhotoListItem;
