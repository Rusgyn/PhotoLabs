import { React, useEffect } from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    photos,
    topics,
    favorites,
    setFavorites,
    inFavorites,
    setInFavorites,
    isModalOpen,
    setIsModalOpen,
    selectedPhoto,
    selectPhoto,
    getPhotosByTopic,
    openModalWithPhoto,
    closeModal,
    toggleAddToFavorites,
    goToHomePage,
    ...state
  } = useApplicationData();

  return (
    
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favorites={favorites}
        openModalWithPhoto={openModalWithPhoto}
        selectedPhoto={selectedPhoto}
        toggleAddToFavorites={toggleAddToFavorites}
        getPhotosByTopic={getPhotosByTopic}
        goToHomePage={goToHomePage}
      />
      { isModalOpen && 
        <PhotoDetailsModal 
          photos={photos}
          favorites={favorites}
          selectedPhoto={selectedPhoto}
          openModalWithPhoto={openModalWithPhoto}
          closeModal={closeModal}
          toggleAddToFavorites={toggleAddToFavorites}
        />
      }
    </div>
  );

};

export default App;
