import React from 'react';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  // Destructure the received props.
  const {
    photos,
    topics,
    favorites,
    getPhotosByTopic,
    openModalWithPhoto,
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
        openModalWithPhoto={openModalWithPhoto}
        isDarkMode={isDarkMode}
        toggleAddToFavorites={toggleAddToFavorites}
      />
    </div>
  );
};

export default HomeRoute;