import { React, useEffect } from 'react';

import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
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
    openModalWithPhoto, //
    toggleModal,
    closeModal,
    toggleAddToFavorites,
    ...state
  } = useApplicationData();

  useEffect(() => {
    console.log('selectedPhoto state updated:', selectedPhoto);
  }, [selectedPhoto]);
  
  useEffect(() => {
    console.log('isModalOpen state updated:', isModalOpen);
  }, [isModalOpen]);

  return (
    
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favorites={favorites}
        setFavorites={setFavorites}
        openModalWithPhoto={openModalWithPhoto}
        toggleModal={toggleModal}
        selectedPhoto={selectedPhoto}
        toggleAddToFavorites={toggleAddToFavorites}
      />
      { isModalOpen && 
        <PhotoDetailsModal 
          photos={photos}
          favorites={favorites}
          setFavorites={setFavorites}
          selectedPhoto={selectedPhoto}
          openModalWithPhoto={openModalWithPhoto}
          toggleModal={toggleModal}
          closeModal={closeModal}
          toggleAddToFavorites={toggleAddToFavorites}
        />
      }

<button onClick={() => toggleModal()}>Open Modal</button>
    </div>
  );

};

export default App;
