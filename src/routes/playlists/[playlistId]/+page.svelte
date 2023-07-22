<script lang="ts">
  import { onMount } from "svelte";

  /** @type {import('./$types').PageData} */
  export let data: any;
  let videos: any = []
      
  onMount(async () => {
    console.log('/playlists/[playlistId]', data.playlistId)
    fetch("/data/playlists.json")
      .then(response => response.json())
      .then(playlists => {
        console.log('/data/playlists.json', playlists);
        let playlist = playlists.find((object: any) => {
          return object.ref === data.playlistId
        })
        console.log('playlist loaded', playlist)
        videos = playlist.videos
      }).catch(error => {
        console.log(error);
        return [];
      });
  });
</script>

<h1>RRABBIT</h1>
<p>RRABBIT was a DJ/Performer/Artist at underground raves in 1998-early 2000's. Known for playing controversial/complicated music.</p>

<h3>Playlist videos</h3>
<ul>
  {#each videos as video}
    <li>
      <a href={`/playlists/pandoras-box/${video.watch}`}>{video.name}</a>
    </li>
  {/each}
</ul>

<a href="/">CHANNEL</a>