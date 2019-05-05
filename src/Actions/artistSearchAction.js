import axios from 'axios';

import * as types from '../types';
import * as url from '../utils/urlGenerator';

import responseFormater from '../utils/responseFormater';

export const navigationButtonSelect = selectedNavigationButton => {
  return { type: types.NAVIGATION_BUTTON_SELECT, payload: { selectedNavigationButton } };
};
const artistName = artistName => {
  return { type: types.ARTIST_NAME, payload: { artistName } };
};
const artistImage = image => {
  return { type: types.ARTIST_IMAGE, payload: { image } };
};
const aboutArtist = aboutArtist => {
  const about = aboutArtist.split('<a')[0];
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
const similarArtists = artists => {
  const similarArtists = responseFormater(artists);
  return { type: types.SIMILAR_ARTIST, payload: { similarArtists } };
};
const loading = () => {
  return { type: types.LOADING };
};
const doneLoading = () => {
  return { type: types.DONE_LOADING };
};
export const history = (newArtist = null) => async dispatch => {
  if (newArtist !== null) {
    if (localStorage.getItem('history') === null) {
      let history = [newArtist.toLowerCase()];
      history = JSON.stringify(history);
      await localStorage.setItem('history', history);
    } else {
      let history = await localStorage.getItem('history');
      history = JSON.parse(history);
      let historyFiltered = history.filter(value => value !== newArtist.toLowerCase());
      historyFiltered.unshift(newArtist.toLowerCase());
      history = JSON.stringify(historyFiltered);
      await localStorage.setItem('history', history);
    }
  }
  let history = await localStorage.getItem('history');
  history = JSON.parse(history);
  dispatch({ type: types.HISTORY, payload: { history } });
};

export const getArtistDetails = name => async dispatch => {
  dispatch(loading());
  try {
    const infoData = (await axios.get(url.getInfo(name))).data;
    if (infoData.error) throw Error('Artist Not Found');

    dispatch(artistName(infoData.artist.name));
    dispatch(artistImage(infoData.artist.image[2]['#text']));
    dispatch(aboutArtist(infoData.artist.bio.content));

    const trackData = (await axios.get(url.getTracks(name))).data;
    dispatch(artistTracks(trackData.toptracks.track));

    const albumData = (await axios.get(url.getAlbums(name))).data;
    dispatch(artistAlbums(albumData.topalbums.album));

    const similarArtistData = (await axios.get(url.getSimilar(name))).data;
    dispatch(similarArtists(similarArtistData.similarartists.artist));

    dispatch(await history(name));
  } catch (error) {
    alert(error.message);
  }
  dispatch(doneLoading());
};
