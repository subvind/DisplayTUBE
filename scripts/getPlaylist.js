import fetch from 'node-fetch';
import fs from 'fs';

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

async function getAllPlaylistVideos(apiKey, playlistId) {
  const maxResults = 50; // Maximum number of items per API request
  const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${apiKey}`;

  const videos = [];

  let nextPageToken = null;

  try {
    do {
      const response = await fetch(nextPageToken ? `${apiUrl}&pageToken=${nextPageToken}` : apiUrl);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        videos.push(...data.items);
      }

      nextPageToken = data.nextPageToken;
    } while (nextPageToken);

    return videos;
  } catch (error) {
    console.error('Error fetching videos:', error.message);
    return null;
  }
}

// Replace YOUR_API_KEY with your actual YouTube Data API key
const apiKey = 'AIzaSyCmD-wH1cpFeoG-9ZDrqZJUzeLILtWyJIM';
const channelId = 'UCwcibF78LrLQBpfvlApvgKg';

getChannelPlaylists(apiKey, channelId)
  .then(playlists => {
    if (playlists) {
      playlists.forEach(playlist => {
        const playlistId = playlist.id;
        const playlistTitle = playlist.snippet.title;

        getAllPlaylistVideos(apiKey, playlistId)
          .then(videos => {
            if (videos) {
              const result = videos;
              const resultJSON = JSON.stringify(result, null, 2);

              fs.writeFile(`./static/data/playlists/${playlistId}.json`, resultJSON, 'utf8', err => {
                if (err) {
                  console.error(`Error writing to file for playlist "${playlistId}":`, err);
                } else {
                  console.log(`Playlist videos data for "${playlistTitle}" written to ${playlistId}.json`);
                }
              });
            }
          })
          .catch(err => console.error(err));
      });
    }
  })
  .catch(err => console.error(err));
