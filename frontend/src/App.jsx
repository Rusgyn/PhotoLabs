import { React, useState } from 'react';

import HomeRoute from 'routes/HomeRoute';
import photos from "./mocks/photos"
import topics from "./mocks/topics"
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [favorites, setFavorites] = useState([]);
  console.log("Favorites ", setFavorites);

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        setFavorites={setFavorites}
      />    
    </div>
  );

};

export default App;
