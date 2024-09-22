import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  // Destructured the received parameters (props)
  const {photos, favorites, setFavorites, openModalWithPhoto, selectedPhoto, toggleAddToFavorites } = props;
 
  const mappedPhoto = photos.map((photo) => {
      return (
      <PhotoListItem
        key={photo.id}
        photoValue={photo}
        favorites={favorites}
        setFavorites={setFavorites}
        openModalWithPhoto={openModalWithPhoto}
        selectedPhoto={selectedPhoto}
        toggleAddToFavorites={toggleAddToFavorites}
      />)
  })

  return (
    <ul className="photo-list">
      { mappedPhoto }
    </ul>
  );
};

export default PhotoList;
