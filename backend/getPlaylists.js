import fetch from 'node-fetch'
import fs from 'fs'

async function getChannelPlaylists(apiKey, channelId) {
  const apiUrl = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${channelId}&maxResults=50&key=${apiKey}`;

  const playlists = [];

  let nextPageToken = null;

  try {
    do {
      const response = await fetch(nextPageToken ? `${apiUrl}&pageToken=${nextPageToken}` : apiUrl);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        playlists.push(...data.items);
      }

      nextPageToken = data.nextPageToken;
    } while (nextPageToken);

    return playlists;
  } catch (error) {
    console.error('Error fetching playlists:', error.message);
    return null;
  }
}

// Replace YOUR_API_KEY with your actual YouTube Data API key
const apiKey = 'AIzaSyCmD-wH1cpFeoG-9ZDrqZJUzeLILtWyJIM';
const channelId = 'UC9VI8tMugRuayae1wIm9Zjg';

getChannelPlaylists(apiKey, channelId)
  .then(playlists => {
    if (playlists) {
      const result = { playlists };
      const resultJSON = JSON.stringify(result, null, 2);

      fs.writeFile('./static/data/playlists.json', resultJSON, 'utf8', err => {
        if (err) {
          console.error('Error writing to file:', err);
        } else {
          console.log('Channel playlists data written to playlists.json');
        }
      });
    }
  })
  .catch(err => console.error(err));