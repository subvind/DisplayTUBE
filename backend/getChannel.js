import fetch from 'node-fetch'
import fs from 'fs'

async function getChannelId(apiKey, username) {
  const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${encodeURIComponent(username)}&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.items && data.items.length > 0) {
      // return data.items[0].snippet.channelId;
      return data.items[0]
    } else {
      throw new Error('Channel not found');
    }
  } catch (error) {
    console.error('Error fetching channel data:', error.message);
    return null;
  }
}

// Replace YOUR_API_KEY with your actual YouTube Data API key
const apiKey = 'AIzaSyCmD-wH1cpFeoG-9ZDrqZJUzeLILtWyJIM';
const username = 'RRABBITmusic';

getChannelId(apiKey, username)
  .then(channelId => {
    const result = { channelId };
    const resultJSON = JSON.stringify(result, null, 2);

    fs.writeFile('./static/data/channel.json', resultJSON, 'utf8', err => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Channel ID data written to channel.json');
      }
    });
  })
  .catch(err => console.error(err));