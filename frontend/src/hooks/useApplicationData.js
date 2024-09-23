import React, { useEffect, useReducer } from "react";
import axios from "axios";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  SELECT_PHOTO: 'SELECT_PHOTO',
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
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.payload
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.payload
      };
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return {
        ...state,
        photos: action.payload
      }
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload.photo,
        isModal: true
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
    inModal: false,
    isModalOpen: false,
    selectedPhoto: {
      id: null,
      location: { city: '', country: '' },
      similar_photos: {},
      urls: { full: '', regular: '' },
      user: { username: '', name: '', profile: '' }
    },
    photos: [],
    topics: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  
  //useEffect and axios to get photos
  useEffect(() => {
    // make the get request to the backend. Load photos data.
    axios.get('/api/photos/')
      .then((response) => {
        console.log("GET PHOTO, useApplicationData:", response.data);
        dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: response.data});
      })
      .catch(error => {
        console.error('Error fetching photo data:', error); // Handle errors
      });
  }, []);

  //useEffect and axios to get topics
  useEffect(() => {
    // make the get request to the backend. Load topics data.
    axios.get('/api/topics/')
      .then((response) => {
        console.log("GET TOPICS, useApplicationData:", response.data);
        dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: response.data});
      })
      .catch(error => {
        console.error('Error fetching topic data:', error); // Handle errors
      });
  }, []);

  const selectPhoto = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
  }
  
  //This function will retrieve photo/s as per topic.
  const getPhotosByTopic = (id) => {
    axios(`/api/topics/photos/${id}`)
      .then((response) => {
        dispatch({type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: response});
      })
      .catch(error => {
        console.error('Error fetching photos by topic data:', error);
      });
  };
  const openModalWithPhoto = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  const toggleModal = () => {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  }

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS }); 
  };
  
  const toggleAddToFavorites = (id, inFavorites) => {
    (inFavorites && dispatch({type: 'FAV_PHOTO_REMOVED', payload: {id}}));
    (!inFavorites && dispatch({type: 'FAV_PHOTO_ADDED', payload: {id}}));
  };

  return {
    ...state,
    selectPhoto,
    getPhotosByTopic,
    openModalWithPhoto,
    toggleModal,
    closeModal,
    toggleAddToFavorites
  };

};
