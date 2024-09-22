import { React, useState } from 'react';

import HomeRoute from 'routes/HomeRoute';
import photos from "./mocks/photos"
import topics from "./mocks/topics"
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
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
  } = useApplicationData;

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favorites={favorites}
        setFavorites={setFavorites}
        toggleModal={toggleModal}
        setSelectedPhoto={setSelectedPhoto}
        toggleAddToFavorites={toggleAddToFavorites}
      />
      { isModalOpen && 
        <PhotoDetailsModal 
          photos={photos}
          favorites={favorites}
          setFavorites={setFavorites}
          selectedPhoto={selectedPhoto}
          toggleModal={toggleModal}
          toggleAddToFavorites={toggleAddToFavorites}
        />
      }
    </div>
  );

};

export default App;
