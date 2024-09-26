import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  // Destructured the received parameters (props)
  const {
    photos,
    favorites,
    openModalWithPhoto,
    toggleAddToFavorites,
    inModal,
    isDarkMode
  } = props;
 
  const mappedPhoto = photos.map((photo) => {
    return (
      <PhotoListItem
        key={photo.id}
        photoValue={photo}
        favorites={favorites}
        openModalWithPhoto={openModalWithPhoto}
        toggleAddToFavorites={toggleAddToFavorites}
        inModal={inModal}
      />
    )
  })

  return (
    <ul className={`photo-list ${isDarkMode ? 'dark-mode' : ''}`} >
      { mappedPhoto }
    </ul>
  );
};

export default PhotoList;