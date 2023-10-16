<script lang="ts">
  import { onMount } from "svelte";

  // lightGallery
  import lightGallery from 'lightgallery';

  // Plugins
  import lgThumbnail from 'lightgallery/plugins/thumbnail'
  import lgZoom from 'lightgallery/plugins/zoom'

  /** @type {import('./$types').PageData} */
  export let data: any;
  let videos: any = [];
  let playlist: any;
      
  const options: any = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  function loadGallery () {
    let val: HTMLElement = document.getElementById('thumbnails-gallery') || Object.create(HTMLElement)
  
    console.log(val)
    lightGallery(val, {
        plugins: [lgZoom, lgThumbnail],
        licenseKey: 'your_license_key',
        speed: 500,
        // ... other settings
        thumbnail: true
    });
  }

  onMount(async () => {
    console.log('/playlists/[playlistId]', data.playlistId)
    fetch(`/data/playlists/${data.playlistId}.json`)
      .then(response => response.json())
      .then(results => {
        console.log(`${data.playlistId}.json`, results)
        // find a common thumbnail
        // results.items.forEach((key, value) => {

        // })
        videos = results

        videos.forEach((playlist: any) => {
          if (playlist.snippet.thumbnails.standard) {
            playlist.image = playlist.snippet.thumbnails.standard.url
          } else if (playlist.snippet.thumbnails.high) {
            playlist.image = playlist.snippet.thumbnails.high.url
          } else if (playlist.snippet.thumbnails.medium) {
            playlist.image = playlist.snippet.thumbnails.medium.url
          } else {
            playlist.image = playlist.snippet.thumbnails.default.url
          }
        })

        setTimeout(() => {
          loadGallery()
        }, 0)
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
  });
</script>

<div class="container" style="overflow: hidden;">
  <hr>
  <a href="/" target="_self"><button class="back">MAIN CHANNEL</button></a>
  <br />
  <hr>
  {#if playlist}
    <h3 class="title">{playlist.snippet.title}</h3>
    <p class="published">Published: {new Date(playlist.snippet.publishedAt).toLocaleString('en-IN', options)}</p>
    <p class="description">{playlist.snippet.description}</p>
    <hr>
  {/if}
  <br />
  {#each videos as video}
    <div class="card">
      <div class="row">
        <div class="col s12 m5">
          <a href={`/playlists/${video.snippet.playlistId}/${video.snippet.resourceId.videoId}`}>
            <img src={`${video.image}`} style="width: 100%;">
          </a>
        </div>
        <div class="col s12 m7">
          <div class="card-content">
            <p>{video.snippet.description}</p>
          </div>
          <div class="card-action">
            <a href={`/playlists/${video.snippet.playlistId}/${video.snippet.resourceId.videoId}`} style="text-transform: none;">{video.snippet.title}</a>
          </div>
        </div>
      </div>
    </div>
  {/each}
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

  .card {
    background: #000;
  }

</style>