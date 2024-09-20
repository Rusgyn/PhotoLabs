import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  // Destructured the received parameters (props)
  const {photos, setFavorites } = props;

  return (
    <ul className="photo-list">
      {
        photos.map((data) => {
          return (
            <PhotoListItem
              key={data.id}
              identifier={data.id}
              photoValue={data}
              setFavorites={setFavorites}
            />)
        })
      }
    </ul>
  );
};

export default PhotoList;
