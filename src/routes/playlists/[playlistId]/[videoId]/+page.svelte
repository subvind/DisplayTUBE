<script lang="ts">
  import { onMount } from 'svelte';

  /** @type {import('./$types').PageData} */
  export let data: any;

  console.log('data.videoId', data.videoId)

  // Replace YOUR_API_KEY with your actual YouTube Data API key
  const API_KEY = 'AIzaSyCmD-wH1cpFeoG-9ZDrqZJUzeLILtWyJIM' // 'YOUR_API_KEY';
  const VIDEO_ID = data.videoId // 'YOUR_VIDEO_ID';

  let videoDuration: any = null;
  // let secondsRemaining: any = null;
  let videos: any = null;
  let video: any = null;
  let playlist: any = null;
  let videoIndex: any = null;

  const options: any = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  // function youtubeDurationToSeconds(duration: string) {
  //   // Ensure the duration is in the correct format
  //   if (!/^PT(\d+H)?(\d+M)?(\d+S)?$/.test(duration)) {
  //     throw new Error('Invalid YouTube duration format');
  //   }

  //   // Extract hours, minutes, and seconds from the duration
  //   const hours = duration.match(/(\d+)H/) || [];
  //   const minutes = duration.match(/(\d+)M/) || [];
  //   const seconds = duration.match(/(\d+)S/) || [];

  //   // Parse the numeric values and calculate the total duration in seconds
  //   const totalSeconds = (parseInt(hours[1]) || 0) * 3600 +
  //                       (parseInt(minutes[1]) || 0) * 60 +
  //                       (parseInt(seconds[1]) || 0);

  //   return totalSeconds;
  // }


  onMount(() => {
    // setInterval(() => {
    //   secondsRemaining = secondsRemaining - 1
    // }, 1000)

    async function getVideoInfo() {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?id=${VIDEO_ID}&key=${API_KEY}&part=snippet%2C%20contentDetails%2C%20statistics%2C%20player%2C%20topicDetails`
        );
        const result = await response.json();
  
        console.log('getVideoInfo', result)
  
        if (result.items && result.items.length > 0) {
          video = result.items[0]
          videoDuration = result.items[0].contentDetails.duration;
          secondsRemaining = youtubeDurationToSeconds(videoDuration)

          /**
           * play the next video
           */
          // setTimeout(() => {
          //   // Move to the next video in the playlist
          //   videoIndex = (videoIndex + 1) % videos.length;
      
          //   // Get the video ID of the next video
          //   const videoId = videos[videoIndex].snippet.resourceId.videoId;
      
          //   // Redirect the user to the next video in the playlist
          //   window.location.href = `/playlists/${data.playlistId}/${videoId}`;
          // }, (secondsRemaining + 5) * 1000)

          console.log('video', video)
        }
      } catch (error) {
        console.error('Failed to retrieve video information.', error);
      }
    }
    getVideoInfo();

    fetch("/data/playlists.json")
      .then(response => response.json())
      .then(results => {
        console.log('playlists.json', results)

        playlist = results.find((object: any) => {
          return object.id === data.playlistId
        })
        console.log('playlist', playlist)
      }).catch(error => {
        console.log(error);
        return [];
      });

    console.log('/playlists/[playlistId]', data.playlistId)
    fetch(`/data/playlists/${data.playlistId}.json`)
      .then(response => response.json())
      .then(results => {
        console.log(`${data.playlistId}.json`, results)
        videos = results

        // where is our current video index?
        videoIndex = videos.findIndex((object: any) => {
          return object.snippet.resourceId.videoId === data.videoId
        })
      }).catch(error => {
        console.log(error);
        return [];
      });
    
  })

</script>

<div class="container" style="padding: 0; border: 3px solid #444;">
	<nav class="breadcrumbs lighten-2" style="background: #000; padding: 0 1em;">
		<div class="nav-wrapper">
			<div class="col s12">
				<a href="/" class="breadcrumb">Main Channel</a>
        {#if playlist}
				  <a href={`/playlists/${data.playlistId}`} class="breadcrumb">Playlist</a>
        {/if}
        {#if video}
				  <a href={`/playlists/${data.playlistId}/${data.videoId}`} class="breadcrumb">Video</a>
        {/if}
			</div>
		</div>
	</nav>
</div>
<div class="container" style="border-bottom: 0; overflow: hidden;">
  <br />
  <hr>
  <!-- <a href="#" target="_self"><button class="auto-play">AUTO PLAY ({secondsRemaining})</button></a> -->
  {#if playlist}
    <h3 class="title">{playlist.snippet.title}</h3>
    <p class="published">Published: {new Date(playlist.snippet.publishedAt).toLocaleString('en-IN', options)}</p>
    <p class="description">{playlist.snippet.description}</p>
  {/if}
  <hr>
  {#if video}
    <h3 class="title">{video.snippet.title}</h3>
    <p class="published">Published: {new Date(video.snippet.publishedAt).toLocaleString('en-IN', options)}</p>
  {/if}
  <hr>
</div>
<iframe 
  width="100%" 
  height="750" 
  src={`https://www.youtube.com/embed/${data.videoId}?autoplay=1`} 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; encrypted-media; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
  style="border: 3px solid #333; border-left: 0; border-right: 0; margin-bottom: -5px;"
>
</iframe>
<div class="container" style="border-top: 0;">
  <br />
  <br />

  {#if video}
    <p class="description">{video.snippet.description}</p>
  {/if}
</div>

<style>
  .container {
    margin: 0 auto;
    background: #222;
    padding: 1em;
    padding-top: 0;
    color: #ccc;
    position: relative;
    border: 3px solid #333;
    border-top: 0px;
    border-bottom: 0px;
  }

  .auto-play,
  .back {
    padding: 0.5em;
    cursor: pointer;
    background: #555;
    border: none;
  }

  .auto-play {
    float: right;
  }

  .title {
    margin: 0;
  }

  .published,
  .description {
    margin: 0;
    color: #777;
  }

  hr {
    border: 1px solid #333;
  }
</style>