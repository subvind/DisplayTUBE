<script lang="ts">
  import { onMount } from "svelte";

  /** @type {import('./$types').PageData} */
  export let data: any;
  let playlist: any = null;
  let videos: any = null;

  const options: any = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  onMount(() => {

    console.log('/playlists/[playlistId]', data.playlistId)
    fetch(`/data/playlists/${data.playlistId}.json`)
      .then(response => response.json())
      .then(results => {
        console.log(`${data.playlistId}.json`, results)
        videos = results

        console.log('setTimeout', videos)
        setTimeout(() => {
          // // Generate a random index within the range of the playlist length
          // const randomIndex = Math.floor(Math.random() * videos.length);
          // console.log('randomIndex', randomIndex)

          // Get the video ID of the first video
          const videoId = videos[0].snippet.resourceId.videoId;
          console.log('random video', videoId)

          let url = `/playlists/${data.playlistId}/${videoId}`
          console.log('redirect', url)

          // Redirect the user to the random video in the playlist
          window.location.href = url;
          
        }, 7000)
      }).catch(error => {
        console.log(error);
        return [];
      });

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
  })
</script>

<div class="container" style="padding: 0; border: 3px solid #444;">
	<nav class="breadcrumbs lighten-2" style="background: #000; padding: 0 1em;">
		<div class="nav-wrapper">
			<div class="col s12">
				<a href="/" class="breadcrumb">Main Channel</a>
        <a href={`/channel-guide`} class="breadcrumb">Channel Guide</a>
        <a href={`/channel-guide/${data.playlistId}`} class="breadcrumb">5... 4... 3... 2... 1...</a>
			</div>
		</div>
	</nav>
</div>
<div class="container" style="overflow: hidden;">
  <br />
  <hr>
  {#if playlist}
    <h3 class="title">{playlist.snippet.title}</h3>
    <p class="published">Published: {new Date(playlist.snippet.publishedAt).toLocaleString('en-IN', options)}</p>
    <p class="description">{playlist.snippet.description}</p>
  {/if}
  <hr>
</div>
<iframe 
  width="100%"
  height="750"
  src="https://www.youtube.com/embed/TLwhqmf4Td4?autoplay=1"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
  style="border: 3px solid #333; border-left: 0; border-right: 0; margin-bottom: -6px;"
>
</iframe>

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

  .back {
    padding: 0.5em;
    cursor: pointer;
    background: #555;
    border: none;
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