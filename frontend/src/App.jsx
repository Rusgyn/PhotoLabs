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
    // setSelectedPhoto,
    selectPhoto,
    getPhotosByTopic,
    openModalWithPhoto,
    // toggleModal,
    closeModal,
    toggleAddToFavorites,
    goToHomePage,
    ...state
  } = useApplicationData();

  // useEffect(() => {
  //   console.log('selectedPhoto state updated:', selectedPhoto);
  // }, [selectedPhoto]);
  
  // useEffect(() => {
  //   console.log('isModalOpen state updated:', isModalOpen);
  // }, [isModalOpen]);

  return (
    
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favorites={favorites}
        // setFavorites={setFavorites}
        openModalWithPhoto={openModalWithPhoto}
        // toggleModal={toggleModal}
        selectedPhoto={selectedPhoto}
        toggleAddToFavorites={toggleAddToFavorites}
        getPhotosByTopic={getPhotosByTopic}
        goToHomePage={goToHomePage}
      />
      { isModalOpen && 
        <PhotoDetailsModal 
          photos={photos}
          favorites={favorites}
          // setFavorites={setFavorites}
          selectedPhoto={selectedPhoto}
          openModalWithPhoto={openModalWithPhoto}
          // toggleModal={toggleModal}
          closeModal={closeModal}
          toggleAddToFavorites={toggleAddToFavorites}
        />
      }
    </div>
  );

};

export default App;
