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

  onMount(() => {
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
  })
</script>

<div class="container">
  <a href="/" target="_self"><button class="back">MAIN CHANNEL</button></a>
  <br />
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
            <a href={`/live-now/${playlist.id}`} target="_self"><button class="watch">{playlist.snippet.title}</button></a>
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
    width: 900px;
    margin: 0 auto;
    background: #111;
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
</style>