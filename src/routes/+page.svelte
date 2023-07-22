<script lang="ts">
  import { onMount } from 'svelte';
  import Header from "$lib/header.svelte"
  import Footer from "$lib/footer.svelte"

  // lightGallery
  import lightGallery from 'lightgallery';

  // Plugins
  import lgThumbnail from 'lightgallery/plugins/thumbnail'
  import lgZoom from 'lightgallery/plugins/zoom'

  let uploads: any = [];
  let playlists: any = [];
  let featuredPlaylistId = 'PLtoxeJ0aVT64nNSz7QnXp8G21nppHVLTB'
      
  function loadInline (items: any) {
    let val: HTMLElement = document.getElementById('inline-gallery-container') || Object.create(HTMLElement)
  
    console.log(val)
    let dynamicEl: any = []
    items.forEach((item: any) => {
      dynamicEl.push({
        src: item.snippet.thumbnails.default.url,
        thumb: item.snippet.thumbnails.default.url,
        subHtml: `<div class="lightGallery-captions">
          <p>${item.snippet.title}</p>
          <br />
          <a href="/playlists/${featuredPlaylistId}/${item.snippet.resourceId.videoId}">
            <button style="padding: 0.5em; cursor: pointer; font-size: 1em;">watch video</button>
          </a>
        </div>`,
      })
    })

    const inlineGallery = lightGallery(val, {
        container: val,
        dynamic: true,
        // Turn off hash plugin in case if you are using it
        // as we don't want to change the url on slide change
        hash: false,
        // Do not allow users to close the gallery
        closable: false,
        // Add maximize icon to enlarge the gallery
        showMaximizeIcon: true,
        // Append caption inside the slide item
        // to apply some animation for the captions (Optional)
        appendSubHtmlTo: '.lg-item',
        // Delay slide transition to complete captions animations
        // before navigating to different slides (Optional)
        // You can find caption animation demo on the captions demo page
        slideDelay: 400,
        dynamicEl: dynamicEl,
        plugins: [lgZoom, lgThumbnail],

        // thumbWidth: 60,
        // thumbHeight: "40px",
        // thumbMargin: 4
    });

    // Since we are using dynamic mode, we need to programmatically open lightGallery
    setTimeout(() => {
      inlineGallery.openGallery();
    }, 200);
  }

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
    fetch(`/data/playlists/${featuredPlaylistId}.json`)
      .then(response => response.json())
      .then(results => {
        console.log('results.items', results.items)
        let videos = results.items
        setTimeout(() => {
          loadInline(videos)
        }, 0)
      }).catch(error => {
        console.log(error);
        return [];
      });

    fetch("/data/playlists.json")
      .then(response => response.json())
      .then(results => {
        console.log('results.items', results.items)
        // find a common thumbnail
        // results.items.forEach((key, value) => {

        // })
        playlists = results.items
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
  
  <div id="inline-gallery-container" class="inline-gallery-container"></div>
  
  <br />
  <br />
  <h3>Created playlists</h3>
  <div id="thumbnails-gallery" class="thumbnails-gallery">
    {#each playlists as playlist}
      <a href={playlist.snippet.thumbnails.medium.url} data-lg-size="1024-800">
        <img alt={playlist.snippet.title} src={playlist.snippet.thumbnails.medium.url}/>
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
  .inline-gallery-container {
    height: 500px;
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
</style>