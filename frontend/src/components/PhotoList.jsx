import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  // Destructured the received parameters (props)
  const {photos, favorites, setFavorites, toggleModal, setSelectedPhoto } = props;

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
              toggleModal={toggleModal}
              setSelectedPhoto={setSelectedPhoto}
            />)
        })
      }
    </ul>
  );
};

export default PhotoList;
