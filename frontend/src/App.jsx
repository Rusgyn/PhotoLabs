import { React, useState } from 'react';

import HomeRoute from 'routes/HomeRoute';
import photos from "./mocks/photos"
import topics from "./mocks/topics"
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [favorites, setFavorites] = useState([]); // Add photo to favorites
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  // Add the photo/s within Modal
  const [addFavoritesInModal, setAddFavoritesInModal] = useState(favorites);

  const toggleModal = () => {
    setIsModalOpen(prevIsModal => !prevIsModal);
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favorites={favorites}
        setFavorites={setFavorites}
        toggleModal={toggleModal}
        setSelectedPhoto={setSelectedPhoto}
      />
      { isModalOpen && 
        <PhotoDetailsModal 
          photos={photos}
          favorites={favorites}
          setFavorites={setFavorites}
          selectedPhoto={selectedPhoto}
          toggleModal={toggleModal}
          addFavoritesInModal={addFavoritesInModal}
          setAddFavoritesInModal={setAddFavoritesInModal}
        />
      }
    </div>
  );

};

export default App;
