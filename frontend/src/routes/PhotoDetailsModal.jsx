import React, {useState} from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {

  const { photos, toggleModal, selectedPhoto, favorites, setFavorites  } = props;
  // addFavoritesInModal, setAddFavoritesInModal
  const {
    id,
    location: {city, country},
    similar_photos, //Note: {{},{},..}
    urls: {full, regular},
    user: {username, name, profile} 
  } = selectedPhoto;

  // Convert similar_photos object to an array
  const similarPhotosArray = Object.values(similar_photos);

  // Liking similar photos while in Modal
   const inFavorites = favorites.includes(id);
 
  const toggleAddToFavorites = () => {
    setFavorites(prevSetFavorites => !prevSetFavorites);
    (inFavorites  && setFavorites(favorites.filter(photoId => photoId !== id)));
    (!inFavorites  && setFavorites([...favorites, selectedPhoto.id]))
  };

  console.log("FAVORITES:  ", favorites);
    
  return (
    <div className="photo-details-modal">

      {/* Modal button */}

      <button
        className="photo-details-modal__close-button"
        onClick={toggleModal} >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {/* Displays the selected photo */}

      <PhotoFavButton
        onClick={toggleAddToFavorites}
        inFavorites = {inFavorites}
      />
      {/* Selected Photo */}
      <img className='photo-details-modal__image'
        src={full} alt="Full view of the selected photo">
      </img>

      {/* Photographer - Profile photo */}
      <div className='photo-details-modal__header'>

        <div className='photo-details-modal__photographer-details'>

          <img
            className='photo-details-modal__photographer-profile'
            src={profile} alt={`Photographer ${name} image`} 
          />
          {/* Photographer - Name and location */}
          <div className='photo-details-modal__photographer-info'>
            <span> {name} </span>
            <div className='photo-details-modal__photographer-location'>
              <span> {city}, {country} </span>
            </div>
          </div>
        </div>
      </div>
       
      {/* Displays the Similar Photos */}  
      <span>Similar Photos</span> 
      <div className='photo-details-modal__images'>
        <PhotoList
          photos={similarPhotosArray} // Pass the converted array
          favorites={props.favorites}
          setFavorites={props.setFavorites}
          toggleModal={props.toggleModal}
          setSelectedPhoto={props.setSelectedPhoto}
        />
      </div>
            
    </div>
  )
};

export default PhotoDetailsModal;
