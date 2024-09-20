import { React, useState } from 'react';

import HomeRoute from 'routes/HomeRoute';
import photos from "./mocks/photos"
import topics from "./mocks/topics"
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prevModal => !prevModal);
  }
  
  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favorites={favorites}
        setFavorites={setFavorites}
        toggleModal={toggleModal}
      />
      { isModalOpen && <PhotoDetailsModal toggleModal={toggleModal} /> }
    </div>
  );

};

export default App;
