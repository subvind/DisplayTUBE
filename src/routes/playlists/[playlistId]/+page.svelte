<script lang="ts">
  import { onMount } from "svelte";

  import Header from '$lib/header.svelte'
  import Footer from '$lib/footer.svelte'

  // lightGallery
  import lightGallery from 'lightgallery';

  // Plugins
  import lgThumbnail from 'lightgallery/plugins/thumbnail'
  import lgZoom from 'lightgallery/plugins/zoom'

  /** @type {import('./$types').PageData} */
  export let data: any;
  let videos: any = []
      
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
        console.log(`${data.playlistId}.json`, results.items)
        // find a common thumbnail
        // results.items.forEach((key, value) => {

        // })
        videos = results.items

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
  });
</script>

<div class="container">
  <Header />
  <a href="/" target="_self"><button class="back">MAIN CHANNEL</button></a>
  <br />
  <br />
  <h3>Playlist videos</h3>
  <div id="thumbnails-gallery" class="thumbnails-gallery">
    {#each videos as video}
      <a href={video.image} data-lg-size="1024-800" data-sub-html={`<p style="font-size: 1em;">${video.snippet.title}</p>
        <br />
        <a href="/playlists/${video.snippet.playlistId}/${video.snippet.resourceId.videoId}" target="_self">
          <button style="padding: 0.5em; cursor: pointer; font-size: 1em;">watch video</button>
        </a>
        <br />
        <br />`}>
        <img alt={video.snippet.title} src={video.image} />
      </a>
    {/each}
  </div>
  <Footer />
</div>

<style>
  .container {
    width: 900px;
    margin: 0 auto;
    background: #111;
    padding: 1em;
    color: #ccc;
  }

  .back {
    padding: 0.5em;
    cursor: pointer;
    background: #555;
    border: none;
  }

  .thumbnails-gallery {
    display: flex;
    flex-wrap: wrap;
  }
  .thumbnails-gallery a {
    width: calc(94% / 3);
    margin: 0.5em;
    overflow: hidden;
  }
  .thumbnails-gallery img {
    width: 100%;
  }

</style>