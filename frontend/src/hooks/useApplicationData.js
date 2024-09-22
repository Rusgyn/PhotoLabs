import React, { useState } from "react";

const useApplicationData = () => {

  const [favorites, setFavorites] = useState([]); // Add photo to favorites
  const [inFavorites, setInFavorites] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({
    id: undefined,
    location: undefined,
    similar_photos: undefined,
    urls: undefined,
    user: undefined
  });

  const toggleModal = () => {
    setIsModalOpen(prevIsModal => !prevIsModal);
  };
  
  const toggleAddToFavorites = (id, inFavorites) => {
    setFavorites((prevFavorites) =>
      inFavorites ? prevFavorites.filter((photoId) => photoId !== id) : [...prevFavorites, id]
    );
  };

  return ({
    favorites,
    setFavorites,
    inFavorites,
    setInFavorites,
    isModalOpen,
    setIsModalOpen,
    selectedPhoto,
    setSelectedPhoto,
    toggleModal,
    toggleAddToFavorites
  });

}

export default useApplicationData;