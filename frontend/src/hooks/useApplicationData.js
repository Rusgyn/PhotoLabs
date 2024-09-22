import React, { useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_PHOTO_DETAILS: 'CLOSE_PHOTO_DETAILS'
}

function reducer(state, action) {

  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favorites: [...state.favorites, action.payload.id],
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favorites: state.favorites.filter((photoId) => photoId !== action.payload.id),
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload.photo,
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        isModalOpen: true,
      };
    case ACTIONS.CLOSE_PHOTO_DETAILS:
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      return state;
  }
};

export default function useApplicationData() {

  const initialState = {
    favorites: [],
    isModalOpen: false,
    selectedPhoto: {
      id: null,
      location: { city: '', country: '' },
      similar_photos: {},
      urls: { full: '', regular: '' },
      user: { username: '', name: '', profile: '' }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const selectPhoto = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
  }
  
  const openModalWithPhoto = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS }); 
  };
  
  const toggleAddToFavorites = (id, inFavorites) => {
    (inFavorites && dispatch({type: 'FAV_PHOTO_REMOVED', payload: {id}}));
    (!inFavorites && dispatch({type: 'FAV_PHOTO_ADDED', payload: {id}}));
  };

  return {
    ...state,
    openModalWithPhoto,
    selectPhoto,
    openModalWithPhoto,
    closeModal,
    toggleAddToFavorites
  };

};
