const responseFormatter = tracks => {
  let tracksArray = [];
  const size = tracks.length < 20 ? tracks.length : 20;
  for (let index = 0; index < size; index++) {
    let trackElement = {};
    const element = tracks[index];
    trackElement.name = element.name;
    trackElement.playcount = element.playcount ? element.playcount : null;
    trackElement.listeners = element.listeners ? element.listeners : null;
    trackElement.url = element.url;
    trackElement.image = element.image[3]['#text'];
    tracksArray.push(trackElement);
  }
  return tracksArray;
};
export default responseFormatter;
