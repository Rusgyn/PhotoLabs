import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  // Destructured the received parameters (props)
  const {photos, favorites, setFavorites, modalToggle } = props;

  return (
    <ul className="photo-list">
      {
        photos.map((data) => {
          return (
            <PhotoListItem
              key={data.id}
              photoValue={data}
              favorites={favorites}
              setFavorites={setFavorites}
              modalToggle={modalToggle}
            />)
        })
      }
    </ul>
  );
};

export default PhotoList;
