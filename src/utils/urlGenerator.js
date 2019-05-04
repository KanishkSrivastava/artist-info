export const getInfo = name =>
  `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=${process.env.REACT_APP_API_KEY}&format=json`;
export const getSimilar = name =>
  `http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${name}&api_key=${process.env.REACT_APP_API_KEY}&format=json`;
export const getTracks = name =>
  `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&api_key=${process.env.REACT_APP_API_KEY}&format=json`;
export const getAlbums = name =>
  `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=${process.env.REACT_APP_API_KEY}&format=json`;
