import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  
  const { toggleModal, selectedPhoto } = props;

  const {
    id,
    location: {city, country},
    similar_photos, //Note: value is in {}
    urls: {full, regular},
    user: {name, profile, username}
  } = selectedPhoto;

  return (
    <div className="photo-details-modal">

      {/* Modal button */}

      <button className="photo-details-modal__close-button" onClick={toggleModal} >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {/* Displays the selected photo */}

      {/* Selected Photo */}
      <div className='photo-details-modal__top-bar'>
        {/* Photo */}
        <img src={full} alt="Full view of the selected photo" className='photo-details-modal__image' />

        {/* Photographer */}
        {/* Photographer - Profile photo */}
        <div className='photo-details-modal__photographer-details'>
          <img 
            src={profile} alt={`Photographer ${name} image`} className='photo-details-modal__photographer-profile'
          />
        </div>
        {/* Photographer - Name and location */}
        <div className='photo-details-modal__photographer-info'>
          <div className='photo-details-modal__photographer-location'>
            {city}, {country}
          </div>
        </div>

      </div>

      {/* Similar Photos */}

      <div className='photo-details-modal__header'>
        <h3>Similar Photos</h3>
        {/* Photo */}
    

      </div>


      {console.log(selectedPhoto)}
    </div>
  )
};

export default PhotoDetailsModal;
