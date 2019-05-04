import * as types from '../types';

const initialState = { search: '', selectedNavigationButton: 'about', artistName: '', image: null, about: null, tracks: [], albums: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ARTIST_NAME:
      const { artistName } = action.payload;
      return { ...state, artistName };
    case types.ARTIST_IMAGE:
      const { image } = action.payload;
      return { ...state, image };
    case types.ARTIST_ABOUT:
      const { about } = action.payload;
      return { ...state, about };
    case types.NAVIGATION_BUTTON_SELECT:
      const { selectedNavigationButton } = action.payload;
      return { ...state, selectedNavigationButton };
    case types.ARTIST_TRACKS:
      const { tracks } = action.payload;
      return { ...state, tracks };
    case types.ARTIST_ALBUMS:
      const { albums } = action.payload;
      return { ...state, albums };
    default:
      return state;
  }
};
