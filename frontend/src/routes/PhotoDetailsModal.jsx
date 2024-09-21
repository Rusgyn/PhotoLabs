import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  
  const { photos, toggleModal, selectedPhoto, favorites, setFavorites } = props;
  const { id, location, similar_photos, urls, user } = selectedPhoto;

  console.log("PROPS" , Object.values(props.selectedPhoto.similar_photos));

  return (
    <div className="photo-details-modal">

      {/* Modal button */}

      <button className="photo-details-modal__close-button" onClick={toggleModal} >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      {/* Displays the selected photo */}

      {/* Selected Photo */}
      <img className='photo-details-modal__image'
        src={urls.full} alt="Full view of the selected photo">
      </img>

      {/* Photographer - Profile photo */}
      <div className='photo-details-modal__header'>

        <div className='photo-details-modal__photographer-details'>

          <img
            className='photo-details-modal__photographer-profile'
            src={user.profile} alt={`Photographer ${user.name} image`} 
          />
          {/* Photographer - Name and location */}
          <div className='photo-details-modal__photographer-info'>
            <span> {user.name} </span>
            <div className='photo-details-modal__photographer-location'>
              <span> {location.city}, {location.country} </span>
            </div>
          </div>
        </div>
      </div>

   
      {/* Similar Photos */}  
      <span>Similar Photos</span> 
      <div className='photo-details-modal__images'>
      
        <PhotoList 
          photos={Object.values(props.selectedPhoto.similar_photos)}
        />
      </div>

            
    </div> //Main div
  )
};

export default PhotoDetailsModal;
