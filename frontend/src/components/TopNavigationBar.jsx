import React from 'react';

import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = (props) => {
  
  const { topics, favorites, getPhotosByTopic, goToHomePage } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={goToHomePage}>
        PhotoLabs
      </span>
      <TopicList topics={topics} getPhotosByTopic={getPhotosByTopic} />
      <FavBadge isFavPhotoExist={favorites.length > 0}/>
    </div>
  );

};

export default TopNavigation;