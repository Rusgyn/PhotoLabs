import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  
  const { toggleModal, selectedPhoto } = props;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={toggleModal} >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {console.log(selectedPhoto)}
    </div>
  )
};

export default PhotoDetailsModal;
