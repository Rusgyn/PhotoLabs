import React from 'react';

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  // Destructure the received props.
  const {
    photos,
    topics,
    // selectedPhoto,
    favorites,
    // setFavorites,
    getPhotosByTopic,
    openModalWithPhoto,
    // toggleModal,
    toggleAddToFavorites,
    goToHomePage,
    isDarkMode,
    toggleDarkMode
  } = props;

  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favorites={favorites}
        getPhotosByTopic={getPhotosByTopic}
        goToHomePage={goToHomePage}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <PhotoList
        photos={photos}
        favorites={favorites}
        // setFavorites={setFavorites}
        openModalWithPhoto={openModalWithPhoto}
        // toggleModal={toggleModal}
        // selectedPhoto={selectedPhoto}
        isDarkMode={isDarkMode}
        toggleAddToFavorites={toggleAddToFavorites}
      />
    </div>
  );

};

export default HomeRoute;
