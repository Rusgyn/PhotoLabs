import React, {useState} from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {

  const { photos, toggleModal, selectedPhoto, favorites, setFavorites, toggleAddToFavorites } = props;
  const {
    id,
    location: {city, country},
    similar_photos, //Note: {{},{},..}
    urls: {full, regular},
    user: {username, name, profile} 
  } = selectedPhoto;

  // Convert similar_photos object to an array
  const similarPhotosArray = Object.values(similar_photos);
  const inFavorites = favorites.includes(id);

  //This function will handle the favorite toggle
  const handleAddToFavoriteToggle = () => {
    toggleAddToFavorites(id, inFavorites); // Ensure this is called as a function
  };
 
  return (
    <div className="photo-details-modal">

      {/* Modal button */}
      <button
        className="photo-details-modal__close-button"
        onClick={toggleModal} >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {/* Displays the selected photo */}
      <div className='photo-details-modal__images'>
        {/* Selected Photo */}
        <div className='photo-details-modal__top-bar'>
          <div style={{marginRight:"880px"}} > 
            <PhotoFavButton
              onClick={handleAddToFavoriteToggle}
              inFavorites = {inFavorites}
            />
          </div>
          <img className='photo-details-modal__image'
            src={full} alt="Full view of the selected photo">
          </img>
        </div>

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
      
        <hr style={{color:"grey"}}/>
        
        {/* Displays the Similar Photos */}  
        <h4>Related Photos </h4>
        <PhotoList
          photos={similarPhotosArray}
          favorites={props.favorites}
          setFavorites={props.setFavorites}
          toggleModal={props.toggleModal}
          setSelectedPhoto={props.setSelectedPhoto}
          toggleAddToFavorites={toggleAddToFavorites}
          handleAddToFavoriteToggle={handleAddToFavoriteToggle}
        />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
