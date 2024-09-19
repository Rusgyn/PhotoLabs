import React from 'react';

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation topic={props.topic}/>
      <PhotoList photo={props.photo} />
    </div>
  );
};

export default HomeRoute;
