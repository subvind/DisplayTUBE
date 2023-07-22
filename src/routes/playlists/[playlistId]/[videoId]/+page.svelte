<script lang="ts">

  /** @type {import('./$types').PageData} */
  export let data;

  console.log('data.videoId', data.videoId)

  // Replace YOUR_API_KEY with your actual YouTube Data API key
  const API_KEY = 'AIzaSyCmD-wH1cpFeoG-9ZDrqZJUzeLILtWyJIM' // 'YOUR_API_KEY';
  const VIDEO_ID = data.videoId // 'YOUR_VIDEO_ID';

  let videoDuration = null;

  async function getVideoInfo() {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?id=${VIDEO_ID}&key=${API_KEY}&part=contentDetails`
      );
      const data = await response.json();

      console.log('getVideoInfo', data)

      if (data.items && data.items.length > 0) {
        videoDuration = data.items[0].contentDetails.duration;
      }
    } catch (error) {
      console.error('Failed to retrieve video information.', error);
    }
  }

  getVideoInfo();
</script>

<h1>RRABBIT</h1>
<p>RRABBIT was a DJ/Performer/Artist at underground raves in 1998-early 2000's. Known for playing controversial/complicated music.</p>

<iframe 
  width="560" 
  height="315" 
  src={`https://www.youtube.com/embed/${data.videoId}`} 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
>
</iframe>

<br />
<br />
<a href="/playlists/pandoras-box">PANDORAS BOX</a> {videoDuration}