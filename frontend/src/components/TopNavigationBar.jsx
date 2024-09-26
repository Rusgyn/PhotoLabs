import React from 'react';

import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = (props) => {
  
  const {
    topics,
    favorites,
    getPhotosByTopic,
    goToHomePage,
    isDarkMode,
    toggleDarkMode
  } = props;
  
  return (
    <div className={`top-nav-bar ${isDarkMode ? 'dark-mode' : ''}`} >
      <span 
        className={`top-nav-bar__logo ${isDarkMode ? 'dark-mode' : ''}`} onClick={goToHomePage}
      >
        PhotoLabs
      </span>
      <TopicList
        topics={topics}
        getPhotosByTopic={getPhotosByTopic}
        isDarkMode={isDarkMode}
      />
      <div className='top-nav-bar__notification-darkMode'>
        <FavBadge isFavPhotoExist={favorites.length > 0}/>
        <button
          className="top-nav-bar__dark-mode-icon" 
          onClick={toggleDarkMode}
        >
          { `${isDarkMode ? '🌚 Dark' : '🌞 Light'}`}
        </button>
      </div>
    </div>
  );

};
// className={`top-nav-bar__dark-mode-icon ${isDarkMode ? '🌚' : '🌞'}`} 
// `"ScreenMode"} 

export default TopNavigation;