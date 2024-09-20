import { React, useState } from 'react';

import HomeRoute from 'routes/HomeRoute';
import photos from "./mocks/photos"
import topics from "./mocks/topics"
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [favorites, setFavorites] = useState([]);
  
  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favorites={favorites}
        setFavorites={setFavorites}
      />    
    </div>
  );

};

export default App;
