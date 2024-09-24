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
};

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
};

function reducer(state, action) {
  const handler = actionHandlers[action.type];
  return handler ? handler(state, action) : state;
}

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
  
  // useEffect and axios to get photos
  useEffect(() => {
    axios.get('/api/photos/')
      .then((response) => {
        console.log("GET PHOTO, useApplicationData:", response.data);
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: response.data });
      })
      .catch(error => {
        console.error('Error fetching photo data:', error);
      });
  }, []);

  // useEffect and axios to get topics
  useEffect(() => {
    axios.get('/api/topics/')
      .then((response) => {
        console.log("GET TOPICS, useApplicationData:", response.data);
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

  const openModalWithPhoto = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
  };

  const toggleModal = () => {
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

  return {
    ...state,
    selectPhoto,
    getPhotosByTopic,
    openModalWithPhoto,
    toggleModal,
    closeModal,
    toggleAddToFavorites
  };
}











// import React, { useEffect, useReducer } from "react";
// import axios from "axios";

// export const ACTIONS = {
//   FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
//   FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
//   SET_PHOTO_DATA: 'SET_PHOTO_DATA',
//   SET_TOPIC_DATA: 'SET_TOPIC_DATA',
//   GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
//   SELECT_PHOTO: 'SELECT_PHOTO',
//   DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
//   CLOSE_PHOTO_DETAILS: 'CLOSE_PHOTO_DETAILS'
// }

// function reducer(state, action) {

//   switch (action.type) {
//     case ACTIONS.FAV_PHOTO_ADDED:
//       return {
//         ...state,
//         favorites: [...state.favorites, action.payload.id],
//       };
//     case ACTIONS.FAV_PHOTO_REMOVED:
//       return {
//         ...state,
//         favorites: state.favorites.filter((photoId) => photoId !== action.payload.id),
//       };
//     case ACTIONS.SET_PHOTO_DATA:
//       return {
//         ...state,
//         photos: action.payload
//       };
//     case ACTIONS.SET_TOPIC_DATA:
//       return {
//         ...state,
//         topics: action.payload
//       };
//     case ACTIONS.GET_PHOTOS_BY_TOPICS:
//       return {
//         ...state,
//         photos: action.payload
//       }
//     case ACTIONS.SELECT_PHOTO:
//       return {
//         ...state,
//         selectedPhoto: action.payload.photo,
//         isModal: true
//       };
//     case ACTIONS.DISPLAY_PHOTO_DETAILS:
//       return {
//         ...state,
//         isModalOpen: true,
//       };
//     case ACTIONS.CLOSE_PHOTO_DETAILS:
//       return {
//         ...state,
//         isModalOpen: false,
//       };
//     default:
//       return state;
//   }
// };

// export default function useApplicationData() {

//   const initialState = {
//     favorites: [],
//     inModal: false,
//     isModalOpen: false,
//     selectedPhoto: {
//       id: null,
//       location: { city: '', country: '' },
//       similar_photos: {},
//       urls: { full: '', regular: '' },
//       user: { username: '', name: '', profile: '' }
//     },
//     photos: [],
//     topics: [],
//   };

//   const [state, dispatch] = useReducer(reducer, initialState);
  
//   //useEffect and axios to get photos
//   useEffect(() => {
//     // make the get request to the backend. Load photos data.
//     axios.get('/api/photos/')
//       .then((response) => {
//         console.log("GET PHOTO, useApplicationData:", response.data);
//         dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: response.data});
//       })
//       .catch(error => {
//         console.error('Error fetching photo data:', error); // Handle errors
//       });
//   }, []);

//   //useEffect and axios to get topics
//   useEffect(() => {
//     // make the get request to the backend. Load topics data.
//     axios.get('/api/topics/')
//       .then((response) => {
//         console.log("GET TOPICS, useApplicationData:", response.data);
//         dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: response.data});
//       })
//       .catch(error => {
//         console.error('Error fetching topic data:', error); // Handle errors
//       });
//   }, []);

//   const selectPhoto = (photo) => {
//     dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
//   }
  
//   //This function will retrieve photo/s as per topic.
//   const getPhotosByTopic = (id) => {
//     axios(`/api/topics/photos/${id}`)
//       .then((response) => {
//         dispatch({type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: response.data});
//       })
//       .catch(error => {
//         console.error('Error fetching photos by topic data:', error);
//       });
//   };
//   const openModalWithPhoto = (photo) => {
//     dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photo } });
//     dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
//   };

//   const toggleModal = () => {
//     dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS });
//   }

//   const closeModal = () => {
//     dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS }); 
//   };
  
//   const toggleAddToFavorites = (id, inFavorites) => {
//     (inFavorites && dispatch({type: 'FAV_PHOTO_REMOVED', payload: {id}}));
//     (!inFavorites && dispatch({type: 'FAV_PHOTO_ADDED', payload: {id}}));
//   };

//   return {
//     ...state,
//     selectPhoto,
//     getPhotosByTopic,
//     openModalWithPhoto,
//     toggleModal,
//     closeModal,
//     toggleAddToFavorites
//   };

// };
