<script lang="ts">
  import { onMount } from 'svelte';

  /** @type {import('./$types').PageData} */
  export let data: any;

  console.log('data.videoId', data.videoId)

  // Replace YOUR_API_KEY with your actual YouTube Data API key
  const API_KEY = 'AIzaSyCmD-wH1cpFeoG-9ZDrqZJUzeLILtWyJIM' // 'YOUR_API_KEY';
  const VIDEO_ID = data.videoId // 'YOUR_VIDEO_ID';

  let videoDuration: any = null;
  let secondsRemaining: any = null;

  function youtubeDurationToSeconds(duration) {
    // Ensure the duration is in the correct format
    if (!/^PT(\d+H)?(\d+M)?(\d+S)?$/.test(duration)) {
      throw new Error('Invalid YouTube duration format');
    }

    // Extract hours, minutes, and seconds from the duration
    const hours = duration.match(/(\d+)H/) || [];
    const minutes = duration.match(/(\d+)M/) || [];
    const seconds = duration.match(/(\d+)S/) || [];

    // Parse the numeric values and calculate the total duration in seconds
    const totalSeconds = (parseInt(hours[1]) || 0) * 3600 +
                        (parseInt(minutes[1]) || 0) * 60 +
                        (parseInt(seconds[1]) || 0);

    return totalSeconds;
  }


  onMount(() => {
    setInterval(() => {
      secondsRemaining = secondsRemaining - 1
    }, 1000)

    async function getVideoInfo() {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?id=${VIDEO_ID}&key=${API_KEY}&part=contentDetails`
        );
        const data = await response.json();
  
        console.log('getVideoInfo', data)
  
        if (data.items && data.items.length > 0) {
          videoDuration = data.items[0].contentDetails.duration;
          secondsRemaining = youtubeDurationToSeconds(videoDuration)

          setTimeout(() => {
            window.location.href = '/live-now'
          }, (secondsRemaining + 5) * 1000)
        }
      } catch (error) {
        console.error('Failed to retrieve video information.', error);
      }
    }
  
    getVideoInfo();
  })

</script>

<div class="container">
  <a href="/" target="_self"><button class="back">MAIN CHANNEL</button></a>
  <a href={`/playlists/${data.playlistId}`} target="_self"><button class="back">PLAYLIST</button></a> {secondsRemaining}
  <br />
  <br />

  <iframe 
    width="900" 
    height="500" 
    src={`https://www.youtube.com/embed/${data.videoId}?autoplay=1`} 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen
  >
  </iframe>

  <br />
  <br />
</div>

<style>
  .container {
    width: 900px;
    margin: 0 auto;
    background: #111;
    padding: 1em;
    color: #ccc;
    position: relative;
    border: 3px solid #333;
    border-top: 0px;
    border-bottom: 0px;
  }

  .back {
    padding: 0.5em;
    cursor: pointer;
    background: #555;
    border: none;
  }
</style>