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
  CLOSE_PHOTO_DETAILS: 'CLOSE_PHOTO_DETAILS',
  DARK_MODE_SCREEN: 'DARK_MODE_SCREEN'
};

//actionHandlers object will define how to handle each action type
const actionHandlers = {
  [ACTIONS.FAV_PHOTO_ADDED]: (state, action) => ({
    ...state,
    favorites: [...state.favorites, action.payload.id],
  }),
  [ACTIONS.FAV_PHOTO_REMOVED]: (state, action) => ({
    ...state,
    favorites: state.favorites.filter((photoId) => photoId !== action.payload.id),
  }),
  [ACTIONS.SET_PHOTO_DATA]: (state, action) => ({
    ...state,
    photos: action.payload,
  }),
  [ACTIONS.SET_TOPIC_DATA]: (state, action) => ({
    ...state,
    topics: action.payload,
  }),
  [ACTIONS.GET_PHOTOS_BY_TOPICS]: (state, action) => ({
    ...state,
    photos: action.payload,
  }),
  [ACTIONS.SELECT_PHOTO]: (state, action) => ({
    ...state,
    selectedPhoto: action.payload.photo,
    isModal: true,
  }),
  [ACTIONS.DISPLAY_PHOTO_DETAILS]: (state) => ({
    ...state,
    isModalOpen: true,
  }),
  [ACTIONS.CLOSE_PHOTO_DETAILS]: (state) => ({
    ...state,
    isModalOpen: false,
  }),
  [ACTIONS.DARK_MODE_SCREEN]: (state) => ({
    ...state,
    isDarkMode: !state.isDarkMode,
  })
};

//This function looks up the appropriate handler in the actionHandlers object.
function reducer(state, action) {
  const handler = actionHandlers[action.type];
  return handler ? handler(state, action) : state;
};

//This function, hook, will dispatch actions based on UI.
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
    isDarkMode: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  
  // useEffect and axios to get photos data
  useEffect(() => {
    axios.get('/api/photos/')
      .then((response) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data });
      })
      .catch(error => {
        console.error('Error fetching photo data:', error);
      });
  }, []);

  // useEffect and axios to get topics data
  useEffect(() => {
    axios.get('/api/topics/')
      .then((response) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: response.data });
      })
      .catch(error => {
        console.error('Error fetching topic data:', error);
      });
  }, []);

  const selectPhoto = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
  };

  const getPhotosByTopic = (id) => {
    axios(`/api/topics/photos/${id}`)
      .then((response) => {
        dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: response.data });
      })
      .catch(error => {
        console.error('Error fetching photos by topic data:', error);
      });
  };

  const goToHomePage =() => {
    axios.get('/api/photos/')
    .then((response) => {
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data });
    })
    .catch(error => {
      console.error('Error fetching photo data:', error);
    });
    axios.get('/api/topics/')
    .then((response) => {
      dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: response.data });
    })
    .catch(error => {
      console.error('Error fetching topic data:', error);
    });
  };

  const openModalWithPhoto = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS }); 
  };

  const toggleAddToFavorites = (id, inFavorites) => {
    if (inFavorites) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id } });
    }
  };

  const toggleDarkMode = () => {
    dispatch({ type: ACTIONS.DARK_MODE_SCREEN });
  };

  return {
    ...state,
    selectPhoto,
    getPhotosByTopic,
    openModalWithPhoto,
    closeModal,
    toggleAddToFavorites,
    goToHomePage,
    toggleDarkMode
  };
};