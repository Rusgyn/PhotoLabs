import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoList from 'components/PhotoList';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

// const photoNewArr = [...photos].map((_, index) => {
//   return <PhotoListItem key={index} photo={sampleDataForPhotoListItem} />
// });
// {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}

  return (
    <div className="App">
      <PhotoList />
    </div>
  );
};

export default App;
