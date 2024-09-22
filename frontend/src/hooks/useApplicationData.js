import React, { useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

function reducer(state, action) {
  switch (action.type) {
    case FAV_PHOTO_ADDED:
      return { ...state,
        favorites: [...state.favorites, action.payload.id]
    }
    case FAV_PHOTO_REMOVED:
      return { ...state,
        favorites: state.favorites.filter((photoId) => photoId !== action.payload.id)
      }
    case SELECT_PHOTO:
      return { ...state, 
        selectedPhoto: action.payload.id
      }
    case DISPLAY_PHOTO_DETAILS:
      return { ...state,
        isModalOpen: true
      }
    default:
      return state;
  }
}

function useApplicationData() {
  const initialState = {
    favorites: [],
    isModalOpen: false,
    selectedPhoto: {
      id: undefined,
      location: undefined,
      similar_photos: undefined,
      urls: undefined,
      user: undefined
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleModal = () => {
    dispatch({type: 'DISPLAY_PHOTO_DETAILS'});
  };

  const toggleAddToFavorites = (id, inFavorites) => {
    (inFavorites && dispatch({type: 'FAV_PHOTO_REMOVED', payload: {id}}));
    (!inFavorites && dispatch({type: 'FAV_PHOTO_ADDED', payload: {id}}));
  };

  return {
    ...state,
    toggleModal,
    toggleAddToFavorites
  };

};
