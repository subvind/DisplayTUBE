<script lang="ts">
  import { onMount } from 'svelte';

  // lightGallery
  import lightGallery from 'lightgallery';

  // Plugins
  import lgThumbnail from 'lightgallery/plugins/thumbnail'
  import lgZoom from 'lightgallery/plugins/zoom'

  let uploads: any = [];
  let playlists: any = [];
  let featuredPlaylistId = 'PLtoxeJ0aVT670BoNcI9x70HeKixrgoQ2Y';
	let organization: any;
      
  function loadInline (items: any) {
    let val: HTMLElement = document.getElementById('inline-gallery-container') || Object.create(HTMLElement)
  
    console.log(val)
    let dynamicEl: any = []
    items.forEach((item: any) => {
      let image = ''
      if (item.snippet.thumbnails.standard) {
        image = item.snippet.thumbnails.standard.url
      } else if (item.snippet.thumbnails.high) {
        image = item.snippet.thumbnails.high.url
      } else if (item.snippet.thumbnails.medium) {
        image = item.snippet.thumbnails.medium.url
      } else {
        image = item.snippet.thumbnails.default.url
      }
      dynamicEl.push({
        src: image,
        thumb: image,
        subHtml: `<div class="lightGallery-captions" style="padding: 0.5em; background-color:rgba(0, 0, 0, 0.75);">
          <p style="font-size: 1em;">${item.snippet.title}</p>
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
        console.log(`${featuredPlaylistId}.json`, results)
        let videos = results
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
        console.log('playlists.json', results)
        // find a common thumbnail
        // results.items.forEach((key, value) => {

        // })
        playlists = results

        playlists.forEach((playlist: any) => {
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

        // setTimeout(() => {
        //   loadGallery()
        // }, 0)
      }).catch(error => {
        console.log(error);
        return [];
      });

    let tubeHostname = window.location.hostname
    if (tubeHostname === 'localhost') {
      tubeHostname = 'videos.subvind.com'
    }
    const response = await fetch(`https://api.subvind.com/organizations/tubeHostname/${tubeHostname}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.ok) {
      organization = await response.json();
    } else {
      const errorData = await response.json();
      alert(errorData.error);
    }
    
		// @ts-ignore
		gtag('event', 'pageview', {
			'organizationId': organization.id, // Replace with the actual tenantId
		});
  });
</script>

<iframe 
  width="100%"
  height="750"
  src="https://www.youtube.com/embed/TLwhqmf4Td4?autoplay=0"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen
  style="border: 3px solid #333; border-left: 0; border-right: 0; margin-bottom: -6px;"
>
</iframe>
<div class="container">
  <br />
  <h3 style="margin: 0;">Playlists</h3>
  <div class="row">
    {#each playlists as playlist}
      <div class="col s12 m4">
        <div class="card">
          <div class="card-image">
            <img src={`${playlist.image}`}>
            <!-- <span class="card-title">Card Title</span> -->
          </div>
          <!-- <div class="card-content">
            <p>{playlist.snippet.description}</p>
          </div> -->
          <div class="card-action">
            <a href={`/playlists/${playlist.id}`} style="text-overflow: ellipsis; white-space: nowrap; text-transform: none;">{playlist.snippet.title}</a>
          </div>
        </div>
      </div>
    {/each}
  </div>
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
  
  .card {
    background: #000;
  }
</style>