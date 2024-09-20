import React from 'react';

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  // Destructure the received props.
  const {topics, photos, favorites, setFavorites } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favorites={favorites}/>
      <PhotoList photos={photos} favorites={favorites} setFavorites={setFavorites} />
    </div>
  );

};

export default HomeRoute;
