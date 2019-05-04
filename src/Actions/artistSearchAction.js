import axios from 'axios';

import * as types from '../types';
import * as url from '../utils/urlGenerator';

import responseFormater from '../utils/tracksAndAlbumResponseFormater';

export const navigationButtonSelect = selectedNavigationButton => {
  return { type: types.NAVIGATION_BUTTON_SELECT, payload: { selectedNavigationButton } };
};
const artistName = artistName => {
  return { type: types.ARTIST_NAME, payload: { artistName } };
};
const artistImage = image => {
  return { type: types.ARTIST_IMAGE, payload: { image } };
};
const aboutArtist = about => {
  return { type: types.ARTIST_ABOUT, payload: { about } };
};
const artistTracks = allTracks => {
  const tracks = responseFormater(allTracks);
  return { type: types.ARTIST_TRACKS, payload: { tracks } };
};
const artistAlbums = allAlbums => {
  const albums = responseFormater(allAlbums);
  return { type: types.ARTIST_ALBUMS, payload: { albums } };
};
export const getArtistDetails = name => async dispatch => {
  try {
    const infoData = (await axios.get(url.getInfo(name))).data;
    dispatch(artistName(infoData.artist.name));
    dispatch(artistImage(infoData.artist.image[2]['#text']));
    dispatch(aboutArtist(infoData.artist.bio.content));

    const trackData = (await axios.get(url.getTracks(name))).data;
    dispatch(artistTracks(trackData.toptracks.track));

    const albumData = (await axios.get(url.getAlbums(name))).data;
    dispatch(artistAlbums(albumData.topalbums.album));

    const similarArtistData = (await axios.get(url.getSimilar(name))).data;
  } catch (error) {}
};
