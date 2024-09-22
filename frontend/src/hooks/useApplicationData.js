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

  // const favoritesToggle = () => {
  //   // Add photo to the array of favorites
  //   setFavorites(prevFavorites => !prevFavorites);
  //   ((favorites.includes(id)) && setFavorites(favorites.filter(photoId => photoId !== id)));
  //   ((!favorites.includes(id)) && setFavorites([...favorites, id]))
  // }
  
  const toggleAddToFavorites = (id, inFavorites) => {
    setFavorites(prevFavorites => !prevFavorites);
    (inFavorites && setFavorites(favorites.filter(photoId => photoId !== id)));
    (!inFavorites && setFavorites([...favorites, selectedPhoto.id]))
  };

  return (
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
  );
}

export default useApplicationData;