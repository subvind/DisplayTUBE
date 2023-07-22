<script lang="ts">
  let videos = [
    {
      name: `Marilyn Manson - This Is The New Shit (SYN Remix)`,
      watch: `OsirL1E5r0w`
    },
    {
      name: `Björk talking about her TV`,
      watch: `75WFTHpOw8Y`
    },
  ]
</script>

<h1>RRABBIT</h1>
<p>RRABBIT was a DJ/Performer/Artist at underground raves in 1998-early 2000’s. Known for playing controversial/complicated music.</p>

<h3>Playlist videos</h3>
<ul>
  {#each videos as video}
    <li>
      <a href={`/playlists/pandoras-box/${video.watch}`}>{video.name}</a>
    </li>
  {/each}
</ul>

<a href="/">CHANNEL</a>