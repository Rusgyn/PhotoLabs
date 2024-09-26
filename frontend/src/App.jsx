import React from 'react';
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
    inFavorites,
    setInFavorites,
    isModalOpen,
    selectedPhoto,
    selectPhoto,
    getPhotosByTopic,
    openModalWithPhoto,
    closeModal,
    toggleAddToFavorites,
    goToHomePage,
    isDarkMode,
    toggleDarkMode,
    ...state
  } = useApplicationData();

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`} >
      <HomeRoute
        photos={photos}
        topics={topics}
        favorites={favorites}
        openModalWithPhoto={openModalWithPhoto}
        selectedPhoto={selectedPhoto}
        toggleAddToFavorites={toggleAddToFavorites}
        getPhotosByTopic={getPhotosByTopic}
        goToHomePage={goToHomePage}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      { isModalOpen && 
        <PhotoDetailsModal 
          photos={photos}
          favorites={favorites}
          selectedPhoto={selectedPhoto}
          openModalWithPhoto={openModalWithPhoto}
          closeModal={closeModal}
          toggleAddToFavorites={toggleAddToFavorites}
          isDarkMode={isDarkMode}
        />
      }
    </div>
  );
};

export default App;