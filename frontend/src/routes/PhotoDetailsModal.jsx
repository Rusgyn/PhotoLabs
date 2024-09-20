import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  
  const { toggleModal, photos } = props;
  
  const chosenPhoto = photos.map((data) => {
    const {
      id,
      location: {city, country},
      urls: {full, regular},
      user: {username, name, profile}
    } = data;

    return <div key={id}> {console.log(data)} </div>
  })

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={toggleModal} >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {chosenPhoto}
    </div>
  )
};

export default PhotoDetailsModal;
