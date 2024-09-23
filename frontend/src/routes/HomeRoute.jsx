import React from 'react';

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  // Destructure the received props.
  const { topics, selectedPhoto, photos, favorites, setFavorites, openModalWithPhoto, toggleModal, toggleAddToFavorites } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favorites={favorites}/>
      <PhotoList
        photos={photos}
        favorites={favorites}
        setFavorites={setFavorites}
        openModalWithPhoto={openModalWithPhoto}
        toggleModal={toggleModal}
        selectedPhoto={selectedPhoto}
        toggleAddToFavorites={toggleAddToFavorites}
      />
    </div>
  );

};

export default HomeRoute;
