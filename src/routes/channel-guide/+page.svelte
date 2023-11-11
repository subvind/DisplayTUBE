<script lang="ts">
  import { onMount } from "svelte";

  let playlists: any = null;

  const options: any = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  
	let organization: any;

  onMount(async () => {
    fetch("/data/playlists.json")
      .then(response => response.json())
      .then(results => {
        console.log('playlists.json', results)

        playlists = results
        console.log('playlists', playlists)
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
  })
</script>

<div class="container" style="padding: 0; border: 3px solid #444;">
	<nav class="breadcrumbs lighten-2" style="background: #000; padding: 0 1em;">
		<div class="nav-wrapper">
			<div class="col s12">
				<a href="/" class="breadcrumb">Main Channel</a>
        <a href={`/channel-guide`} class="breadcrumb">Channel Guide</a>
			</div>
		</div>
	</nav>
</div>
<div class="container" style="overflow: hidden;">
  <br />
  {#if playlists}
    <table border="1">
      <tr>
        <th>Playlist</th>
        <th>Description</th>
        <th>Published</th>
      </tr>
      {#each playlists as playlist}
        <tr class="row">
          <td>
            <a href={`/playlists/${playlist.id}`}><button class="watch">{playlist.snippet.title}</button></a>
          </td>
          <td>{playlist.snippet.description}</td>
          <td>{new Date(playlist.snippet.publishedAt).toLocaleString('en-IN', options)}</td>
        </tr>
      {/each}
    </table>
  {/if}
    <ul>
    </ul>
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

  .watch {
    margin: 0.5em;
    padding: 1em;
    cursor: pointer;
    background: #444;
    border: none;
  }

  table,
  th,
  td {
    border: 1px solid #000;
  }

  hr {
    border: 1px solid #333;
  }
</style>