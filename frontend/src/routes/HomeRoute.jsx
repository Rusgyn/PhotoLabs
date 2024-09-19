import React from 'react';

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const {topics, photos, setFavorites } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics}/>
      <PhotoList photos={photos} setFavorites={setFavorites} />
    </div>
  );

};

export default HomeRoute;
